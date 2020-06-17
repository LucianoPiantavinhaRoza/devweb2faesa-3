<template>
  <div class="container">
    <ul class="nav p-2 border bg-secondary text-white">
      <h6>Adicionar um novo paciente</h6>
    </ul>
    <form
      class="form-inline justify-content-center border"
      @submit.prevent="adicionarNovoPaciente"
    >
      <!-- <div class="form-group m-2">
            <label for="id"><h6>ID</h6></label>
            <input type="number" class="form-control m-2" id="pessoa_id" v-model="paciente.id">
      </div>-->
      <div class="form-group m-2">
        <label for="nome">
          <h6>Nome</h6>
        </label>
        <input
          type="text"
          class="form-control m-2"
          id="pessoa_nome"
          name="pessoa_nome"
          required
          v-model="paciente.nome"
        />
      </div>
      <div class="form-group m-2">
        <label for="endereco">
          <h6>Endereço</h6>
        </label>
        <input
          type="text"
          class="form-control m-2"
          id="pessoa_endereco"
          name="pessoa_endereco"
          required
          v-model="paciente.endereco"
        />
      </div>
      <div class="form-group m-2">
        <label for="celular">
          <h6>Celular</h6>
        </label>
        <input
          type="text"
          class="form-control m-2"
          id="pessoa_celular"
          name="pessoa_celular"
          placeholder="(00) 000-000000"
          required
          v-model="paciente.celular"
        />
      </div>
      <div class="form-group m-2">
        <label for="peso">
          <h6>Peso</h6>
        </label>
        <input
          type="text"
          class="form-control m-2"
          id="pessoa_peso"
          name="pessoa_peso"
          placeholder="00,00"
          required
          v-model="paciente.peso"
        />
      </div>
      <div class="form-group m-2">
        <label for="altura">
          <h6>Altura</h6>
        </label>
        <input
          type="text"
          class="form-control m-2"
          id="pessoa_altura"
          name="pessoa_altura"
          placeholder="0,00"
          required
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
          id="pessoa_problemas_saude"
          name="pessoa_problemas_saude"
          required
          v-model="paciente.problemas_saude"
        />
      </div>
      <div class="form-group m-2">
        <button type="submit" class="btn btn-primary form-control m-2">
          Adicionar
        </button>
        <!-- @click="inserirPaciente" -->
      </div>
    </form>
  </div>
</template>

<script>
import PacienteWS from "../services/config";
export default {
  name: "adicionarPaciente",
  data() {
    return {
      paciente: {
        id: "",
        nome: "",
        endereco: "",
        celular: "",
        peso: "",
        altura: "",
        problemas_saude: "",
      },
    };
  },
  methods: {
    inserirPaciente() {
      let dadosPacientes = {
        nome: this.paciente.nome,
        email: this.paciente.endereco,
        email: this.paciente.celular,
        email: this.paciente.peso,
        email: this.paciente.altura,
        email: this.paciente.problemas_saude,
      };

      PacienteWS.criarPaciente(dadosPaciente).then((response) => {
        this.paciente.id = response.data.id;
        this.paciente.nome = response.data.nome;
        this.paciente.endereco = response.data.endereco;
        this.paciente.celular = response.data.celular;
        this.paciente.peso = response.data.peso;
        this.paciente.altura = response.data.altura;
        this.paciente.problemas_saude = response.data.problemas_saude;
        console.log(this.paciente);
      });
    },
  },
};
</script>
