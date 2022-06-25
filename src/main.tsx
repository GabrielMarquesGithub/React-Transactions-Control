import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
//mirage js tem a função de simular o BackEnd
import { createServer, Model } from "miragejs";
import { TransactionsProvider } from "./context/TransactionsContext";

createServer({
  //trabalhando com o 'BD' fornecido pelo mirageJS
  models: {
    transaction: Model,
  },
  //criando dados iniciais para o DB, o método nos retorna o serve
  seeds(server) {
    //com o server acessamos o db e o método para carregar dados iniciais
    server.db.loadData({
      //informamos o Model no plural
      transactions: [
        {
          id: 1,
          title: "Lucro",
          type: "deposit",
          category: "Work",
          amount: 1000,
          createAt: new Date("10/01/2022"),
        },
        {
          id: 2,
          title: "Lucro",
          type: "deposit",
          category: "Work",
          amount: 1000,
          createAt: new Date("10/01/2022"),
        },
        {
          id: 3,
          title: "Perda",
          type: "withdraw",
          category: "Work",
          amount: 1000,
          createAt: new Date("10/01/2022"),
        },
        {
          id: 4,
          title: "Lucro",
          type: "deposit",
          category: "Work",
          amount: 1000,
          createAt: new Date("10/01/2022"),
        },
        {
          id: 5,
          title: "Perda",
          type: "withdraw",
          category: "Work",
          amount: 1000,
          createAt: new Date("10/01/2022"),
        },
        {
          id: 6,
          title: "Perda",
          type: "withdraw",
          category: "Work",
          amount: 1000,
          createAt: new Date("10/01/2022"),
        },
      ],
    });
  },

  routes() {
    //indicando a rota
    this.namespace = "api";
    //indicando ação quando houver uma requisição
    //quando a requisição for interceptada, retornara um array de objetos
    this.get("/transactions", () => {
      //agora na rota de get será retornado os dados criados
      return this.schema.all("transaction");
    });
    //trabalhando com a rota de post, request e o que foi enviado, e schema é o DB
    this.post("/transactions", (schema, request) => {
      //como o objeto vem em formato de string é necessário ser passado para JSON
      const data = JSON.parse(request.requestBody);
      //para armazenar no BD usa o método 'create' passa o Model criado e os dados a serem passados
      return schema.create("transaction", data);
    });
    this.delete("/remove/:id", (schema, request) => {
      //recebendo o id via parâmetros passados por URL
      const { id } = request.params;
      //usando o find para encontrar o model no Fake DB com o 'id' e destruindo ele
      schema.find("transaction", id)?.destroy();
      //retornando o schema
      return schema;
    });
  },
});

//método cria a root no elemento selecionando por ID, e renderiza o que há dentro do 'render'
ReactDOM.createRoot(document.getElementById("root")!).render(
  //strict mode para verificação de erros
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>
);
