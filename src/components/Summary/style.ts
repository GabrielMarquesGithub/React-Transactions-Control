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
      @media (max-width: 950px) {
        font-size: 1.75rem;
      }
      @media (max-width: 780px) {
        font-size: 1.5rem;
      }
      @media (max-width: 680px) {
        font-size: 2rem;
      }
    }
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
    @media (max-width: 680px) and (min-width: 530px) {
      &:last-child {
        grid-column: 1/3;
      }
    }
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
