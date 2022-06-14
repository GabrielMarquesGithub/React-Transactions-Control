import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

import incrementImg from "../../assets/increment.svg";
import decrementeImg from "../../assets/decrement.svg";
import moneyIconImg from "../../assets/moneyIcon.svg";

import { Container } from "./style";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  const { deposits, withdraws, total } = summary;

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incrementImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={decrementeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={moneyIconImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}
