import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container } from "./style";

import trashIcon from "../../assets/trashIcon.svg";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

export function TransactionsTable() {
  const { transactions, removeTransaction } = useContext(TransactionsContext);

  const handleRemoveTransaction = (transaction: Transaction) => removeTransaction(transaction);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {
                    // Intl para formatação, neste caso para o real brasileiro usando o idioma
                    new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)
                  }
                </td>
                <td>{transaction.category}</td>
                <td>
                  {
                    // Intl para formatação, neste caso de uma data usando o idioma
                    //a data foi recebida como string sendo necessário uma nova transformação
                    new Intl.DateTimeFormat("pt-BR").format(new Date(transaction.createAt))
                  }
                </td>
                <td>
                  <img src={trashIcon} alt="Excluir transação" onClick={() => handleRemoveTransaction(transaction)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
