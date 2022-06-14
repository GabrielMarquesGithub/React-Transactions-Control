import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";

import incrementImg from "../../assets/increment.svg";
import decrementeImg from "../../assets/decrement.svg";
import closeImg from "../../assets/closeIcon.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./style";
import { TransactionsContext } from "../../context/TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<string | number>("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const { createTransaction } = useContext(TransactionsContext);

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction({
      title,
      amount: value as number,
      type,
      category,
    });

    setTitle("");
    setValue("");
    setCategory("");
    setType("deposit");
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      //como são estilos que irão ser padrões serão estilizados no arquivo global
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" value={title} onChange={(event) => setTitle(event.target.value)} />

        <input
          placeholder="Valor"
          type="number"
          step="any"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox type="button" onClick={() => setType("deposit")} isActive={type === "deposit"} activeColor="green">
            <img src={incrementImg} alt="Transação positiva" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button" onClick={() => setType("withdraw")} isActive={type === "withdraw"} activeColor="red">
            <img src={decrementeImg} alt="Transação negativa" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
