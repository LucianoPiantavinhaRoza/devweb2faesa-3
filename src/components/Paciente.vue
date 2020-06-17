<template>
  <div v-if="currentPaciente" class="edit-form">
    <h4>Paciene</h4>
    <form action>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          v-model="currentPaciente.nome"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="currentPaciente.email"
        />
      </div>
      <div class="form-group">
        <label for="data_internacao">Data de internação</label>
        <input
          type="date"
          class="form-control"
          id="data-informacao"
          v-model="currentPaciente.data_internacao"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="deletarPaciente">
      Deletar Paciente
    </button>
    <button
      type="submit"
      class="badge badge-danger mr-2"
      @click="atualizarPaciente"
    >
      Atualizar Paciente
    </button>
  </div>
  <div v-else></div>
</template>

<script>
import PacienteWS from "../services/config";
export default {
  name: "paciente",
  data() {
    return [(currentPaciente = null)];
  },
  methods: {
    getPacientes(id) {
      PacienteWS.getpacienteID(id)
        .then((paciente) => {
          this.currentPaciente = paciente.data;
          let data = this.currentPaciente.data_internacao.spli("T")[0];
          console.log(data);
          this.currentpaciente.data_internacao = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletarPaciente() {
      PacienteWS.deletarPacienteID(this.currentPaciente.id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    atualizarPaciente() {
      PacienteWS.AtualizarPacienteID(
        this.currentPaciente.id,
        this.currentPaciente,
      )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounthed() {
    this.getPacientes(this.$route.params.id);
  },
};
</script>

<style></style>
