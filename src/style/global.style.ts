import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue: #5429cc;
  --green: #70F576;

  --blue-light: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --background: #F0F2F5;
  --shape: #FFFFFF;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  //medidas em % para evitar erros de incompatibilidade com ferramentas para aumento da fonte
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media (max-width: 720px){
    font-size: 87.5%;
  }
  // REM será usado como medida para o app, o rem é baseado no tamanho da fonte do usuário
}
body {
  background: var(--background);
  //em navegadores baseados no chrome o 'antialiased' torna as fontes mais nítidas
  -webkit-font-smoothing: antialiased;
}
//elementos que não recebem a font vinda do body
body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight: 600;
}
button {
  cursor: pointer;
}
[disabled]{
  opacity: 0.6;
  //cursor de bloqueio
  cursor: not-allowed;
}

//estilo modal
.react-modal-overlay{
  background-color: rgba(0,0,0,0.5);
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}
.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.5);
  }
  img{
    height: 1rem;
  }
}

`;
