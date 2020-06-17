import { http } from "./config.js";

export default {
  //Requisições do front-end para as rotas da api-covi-19

  listar: () => {
    return http.get("pacientes");
  },

  visualizarPaciente: (id) => {
    return http.get(`pacientes/${id}`);
  },

  adicionar: (novoPaciente) => {
    return http.post("pacientes", novoPaciente);
  },

  atualizar: (id, pacienteSelecionado) => {
    return http.put(`pacientes/${id}`, pacienteSelecionado);
  },

  excluir: (id) => {
    return http.delete(`pacientes/${id}`);
  },

  excluirTodos: () => {
    return http.delete("pacientes");
  },
};
