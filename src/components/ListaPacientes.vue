<!-- ESTRUTURA -->
<template>
  <div class="container">
    <table class="table justify-content-center border table-striped">
      <ul class="nav justify-content-left p-2 border bg-secondary text-white">
        <h6>Lista de pacientes</h6>
      </ul>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Endereço</th>
          <th scope="col">Celular</th>
          <th scope="col">Peso</th>
          <th scope="col">Altura</th>
          <th scope="col">Problemas de Saúde</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id">
          <td class="align-middle">{{ pessoa.id }}</td>
          <td class="align-middle">{{ pessoa.nome }}</td>
          <td class="align-middle">{{ pessoa.endereco }}</td>
          <td class="align-middle">{{ pessoa.celular }}</td>
          <td class="align-middle">{{ pessoa.peso }}</td>
          <td class="align-middle">{{ pessoa.altura }}</td>
          <td class="align-middle">{{ pessoa.problemas_saude }}</td>
          <td class="align-middle">
            <button
              @click="excluirPacienteSelecionado(pessoa.id)"
              type="button"
              class="btn btn-outline-light btn-sm"
              data-toggle="tooltip"
              data-placement="top"
              title="Excluir"
            >
              <i class="fas fa-trash-alt text-primary m-1"></i>
            </button>
            <button
              @click="editarPacienteSelecionado(pessoa)"
              type="button"
              class="btn btn-outline-light btn-sm"
              data-toggle="tooltip"
              data-placement="top"
              title="Editar"
            >
              <i class="fas fa-pencil-alt text-primary m-1"></i>
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-sm"
              data-toggle="tooltip"
              data-placement="top"
              title="Visualizar"
            >
              <i class="far fa-eye text-primary m-1"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- COMPORTAMENTO -->
<script>
import PacienteWS, { http } from "../services/config";
export default {
  name: "listaPacientes",
  data() {
    return {
      pacientes: [],
      currentIndex: -1,
      currentePaciente: null,
      none: "",
    };
  },
  methods: {
    obterPacientes() {
      PacienteWS.getPaciente()
        .then((pacientes) => {
          this.pacientes = paciente.data;
          console.log(this.paciente);
        })
        .catch((error) => {
          console.log(error.mesage);
        });
    },
    refreshPaciente() {
      this.obterPacientes();
      this.currentePaciente = null;
      this.currentIndex = -1;
    },
    selecionarPaciente(paciente, index) {
      this.currentePaciente = paciente;
      this.currenteIndex = index;
    },
    removerTodosPacientes() {
      PacienteWS.deletarTodosPacientes()
        .then((response) => {
          console.log(response.data);
          this.refreshPaciente();
        })
        .catch((error) => {
          console.log(response.message);
        });
    },
  },
};
</script>

<!-- ESTILIZACAO -->

<style></style>
