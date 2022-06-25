import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

//formas com o typeScript de criar um typo usando elementos de outro
type TransactionInput = Omit<Transaction, "id" | "createAt">;
//type TransactionInput = Pick<Transaction, "title" | "amount" | "type" | "category">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  removeTransaction: (transaction: Transaction) => Promise<void>;
}

//Quando o contexto se inicia com o objeto não a muito o que fazer, geralmente se força a tipagem que ele receberá posteriormente
export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    //get indica que é uma busca na Api
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    //chamando a fake api na rota '/transactions' e passando os dados a ela
    const { data } = await api.post("/transactions", {
      ...transactionInput,
      createAt: new Date(),
    });
    const { transaction } = data;
    setTransactions([...transactions, transaction]);
  };
  const removeTransaction = async (transactionRemove: Transaction) => {
    //chamando a fake api na rota '/remove' e passando o id do item a ser removido via URL
    await api.delete(`/remove/${transactionRemove.id}`);
    //filtrando as transações e excluindo a com id passado
    setTransactions(
      transactions.filter((value) => value.id !== transactionRemove.id)
    );
  };

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, removeTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
