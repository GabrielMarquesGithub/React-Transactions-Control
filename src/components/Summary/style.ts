import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  //mover items sem usar positions
  margin-top: -10rem;

  div {
    box-shadow: 1px 1px 5px black;
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        height: 2rem;
      }
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
