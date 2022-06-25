import styled from "styled-components";

export const Container = styled.section`
  margin-top: 4rem;
  overflow: scroll;
  table {
    width: 100%;
    //border-spacing para realizar espaçamento
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      position: relative;
      background-color: var(--shape);
      padding: 1rem 2rem;
      border: 0;
      color: var(--text-body);
      border-radius: 0.25rem;
      &:first-child {
        color: var(--text-title);
      }
      &:last-child {
        width: 0px;
      }
      img {
        cursor: pointer;
        width: 20px;
        transition: transform 0.2s;
      }
      img:hover {
        transform: scale(1.2);
      }
    }

    .deposit {
      color: var(--green);
    }
    .withdraw {
      color: var(--red);
    }
  }
`;
