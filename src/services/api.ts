// services indica um serviço de dados para buscar dados enviar, etc...
import axios from "axios";

// a instancia é criada para definir algumas informações como default
export const api = axios.create({
  //url que se repete em todas as requisições
  baseURL: "http://localhost:3000/api",
});
