<template>
  <div class="container">
    <br />
    <h1>Pacientes</h1>
    <br />

    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand border navbar-dark bg-dark text-white">
          <h6>Aicionar um novo paciente</h6>
        </nav>
        <form
          class="form-inline justify-content-center border shadow-lg p-3 mb-5 bg-white rounded"
          @submit.prevent="adicionarNovoPaciente"
        >
          <div class="form-group m-3">
            <label for="nome">
              <h6>Nome</h6>
            </label>
            <input
              type="text"
              class="form-control m-3"
              id="nome"
              name="nome"
              v-model="paciente.nome"
            />
          </div>
          <div class="form-group m-3">
            <label for="endereco">
              <h6>Endereço</h6>
            </label>
            <input
              type="text"
              class="form-control m-3"
              id="endereco"
              name="endereco"
              v-model="paciente.endereco"
            />
          </div>
          <div class="form-group m-3">
            <label for="celular">
              <h6>Celular</h6>
            </label>
            <input
              type="text"
              class="form-control m-3"
              id="celular"
              name="celular"
              v-model="paciente.celular"
            />
          </div>
          <div class="form-group m-3">
            <label for="peso">
              <h6>Peso</h6>
            </label>
            <input
              type="text"
              class="form-control m-3"
              id="peso"
              name="peso"
              placeholder="00.00"
              v-model="paciente.peso"
            />
          </div>
          <div class="form-group m-3">
            <label for="altura">
              <h6>Altura</h6>
            </label>
            <input
              type="text"
              class="form-control m-3"
              id="altura"
              name="altura"
              placeholder="0.00"
              v-model="paciente.altura"
            />
          </div>
          <div class="form-group m-2">
            <label for="problema_saude">
              <h6>Problemas de Saúde</h6>
            </label>
            <input
              type="text"
              class="form-control m-2"
              id="problemas_saude"
              name="problemas_saude"
              v-model="paciente.problemas_saude"
            />
          </div>
          <div class="form-group m-2">
            <button
              type="submit"
              class="btn btn-success form-control m-2"
              v-if="this.scopeAtualizar == false"
            >
              <i class="fas fa-user-plus text-white m-1"></i>Adicionar
            </button>
            <button
              type="submit"
              class="btn btn-primary form-control m-3"
              v-if="this.scopeAtualizar == true"
            >
              <i class="fas fa-user-edit text-white m-1"></i>Atualizar
            </button>
            <button
              type="submit"
              class="btn btn-secondary form-control m-3"
              v-if="this.scopeAtualizar == true"
              @click="cancelar()"
            >
              <i class="fas fa-ban text-white m-1"></i>Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <nav
          class="navbar navbar-expad justify-content-left border navbar-dark bg-dark text-white"
        >
          <h6>Lista de pacientes</h6>
        </nav>
        <table
          class="table justify-content-center border table-striped shadow-lg p-3 mb-5 bg-white rounded"
        >
          <thead>
            <tr>
              <th scope="col" class="align-middle">ID</th>
              <th scope="col" class="align-middle">Nome</th>
              <th scope="col" class="align-middle">Endereço</th>
              <th scope="col" class="align-middle">Celular</th>
              <th scope="col" class="align-middle">Peso</th>
              <th scope="col" class="align-middle">Altura</th>
              <th scope="col" class="align-middle">Problemas de Saúde</th>
              <th scope="col" class="align-middle">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="paciente in pacientes" :key="paciente.id">
              <td class="align-middle">{{ paciente.id }}</td>
              <td class="align-middle">{{ paciente.nome }}</td>
              <td class="align-middle">{{ paciente.endereco }}</td>
              <td class="align-middle">{{ paciente.celular }}</td>
              <td class="align-middle">{{ paciente.peso }}</td>
              <td class="align-middle">{{ paciente.altura }}</td>
              <td class="align-middle">{{ paciente.problemas_saude }}</td>
              <td class="align-middle">
                <button
                  @click="excluirPacienteSelecionado(paciente.id)"
                  type="button"
                  class="btn btn-danger btn-sm m-1"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Excluir"
                >
                  <i class="fas fa-trash-alt text-white m-1"></i>
                  Excluir
                </button>
                <button
                  @click="editarPacienteSelecionado(paciente)"
                  type="button"
                  class="btn btn-warning btn-sm m-1"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Editar"
                >
                  <i class="fas fa-pencil-alt text-dark m-1"></i>
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          class="navbar navbar-expand justify-content-center navbar-dark bg-dark"
        >
          <a class="text-white">DevWeb II - Desenvolvido por</a>
          <a class="nav-link" href="https://github.com/LucianoPiantavinhaRoza"
            >Luciano Piantavigna Rosa</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Paciente from "./services/apiPacientes.js";

export default {
  data() {
    return {
      paciente: {
        id: null,
        nome: "",
        endereco: "",
        celular: "",
        peso: "",
        altura: "",
        problemas_saude: "",
      },
      pacientes: [],
      scopeAtualizar: false,
    };
  },

  mounted() {
    this.listarTodosOsPacientes();
  },

  methods: {
    cancelar() {
      this.scopeAtualizar = false;
      this.paciente = {};
    },

    listarTodosOsPacientes() {
      Paciente.listar().then((resposta) => {
        this.pacientes = resposta.data; //armazenando aresposta da api em um array
      });
    },

    adicionarNovoPaciente() {
      if (!this.paciente.id) {
        let dadosPacienteFormulario = {
          nome: this.paciente.nome,
          endereco: this.paciente.endereco,
          celular: this.paciente.celular,
          peso: this.paciente.peso,
          altura: this.paciente.altura,
          problemas_saude: this.paciente.problemas_saude,
        };

        Paciente.adicionar(dadosPacienteFormulario)
          .then((response) => {
            this.paciente.id = response.data.id;
            console.log(this.paciente.id);
            this.paciente = {};
            alert("PACIENTE SALVO COM SUCESSO!");
            //this.paciente = {};
            this.listarTodosOsPacientes();
          })
          .catch((error) => {
            this.paciente = {};
            alert("NÃO FOI POSSIVEL SALVAR O PACIENTE...");
            console.log(error.message);
          });
      } else {
        Paciente.atualizar(this.paciente.id, this.paciente)
          .then((response) => {
            console.log(response.data);
            this.paciente = {};
            this.scopeAtualizar = false;
            alert("DADOS DO PACIENTE ATUALIZADOS COM SUCESSO!");
            this.listarTodosOsPacientes();
          })
          .catch((error) => {
            this.paciente = {};
            alert("NÃO FOI POSSÍVEL ATUALIZAR OS DADOS DO PACIENTE...");
            console.log(error.message);
          });
      }
    },

    editarPacienteSelecionado(pacienteSelecionado) {
      this.scopeAtualizar = true;
      this.paciente = pacienteSelecionado;
    },

    excluirPacienteSelecionado(pacienteSelecionado) {
      this.paciente = pacienteSelecionado;

      Paciente.excluir(this.paciente).then((resposta) => {
        console.log(resposta.data);
        console.log(pacienteSelecionado);
        this.paciente = {};
        alert("PACIENTE EXCLUÍDO COM SUCESSO!");
        this.listarTodosOsPacientes();
      });
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
body {
  background-color: whitesmoke;
}
</style>
