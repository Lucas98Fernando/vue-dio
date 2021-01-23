<template>
  <div id="app">
    <!-- A diretiva v-model é utilizada para two way data bind -->
    <input type="text" v-model="text" />
    <p>Texto: {{ text }}</p>
    <p>API: {{ apiResponse }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      apiResponse: "Start",
      text: "",
    };
  },
  methods: {
    simulateApi(response, time) {
      return new Promise((res) => {
        setTimeout(() => {
          this.apiResponse = response;
          console.log("api response");
        }, 1000 * time);
      });
    },
    // Metódo que chama a função fetchApi quando o tamanho de valores no input for maior que 3
    // callApi(newValue, oldValue) {
    //   if (newValue.length > 3) {
    //     this.fetchApi(Math.random());
    //   }
    // },
    // Função assícrona
    async fetchApi(value, time) {
      await this.simulateApi(value, time);
    },
    callApi(newValue, oldValue) {
      console.log(val, old);
      this.fetchApi("Call", 1);
    },
  },
  // Propriedade fornecidade pelo Vue, para configuração do componente, é um objeto também
  // Monitorando o atributo text do data
  // Recomendado para chamada de API's ou manipulação do DOM
  watch: {
    // Sempre que houver uma mudança no estado do text, a função fetchApi será chamada, gerando um valor randômico
    // ------------------------------------------------------
    // text(newValue, oldValue) {
    //   this.fetchApi(Math.random());
    // },
    // -------------------------------------------------------
    // Chama da função callApi para ser monitorada
    // text: "callApi",
    // ------------------------------------------------------
    // text: {
    //   // O immediate atribue um valor inicial quando uma determinada função é chamada
    //   immediate: true,
    //   handler(newValue, oldValue) {
    //     this.fetchApi(Math.random());
    //   },
    // },
    // -----------------------------------------------------
    text: [
      "callApi",
      function handler2(val, old) {
        console.log(val, old);
        this.fetchApi("Handler 2", 2);
      },
      {
        handler: function handler3(val, old) {
          console.log(val, old);
          this.fetchApi("Handler 3", 3);
        },
      },
    ],
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
}
</style>
