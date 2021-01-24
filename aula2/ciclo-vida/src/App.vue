<template>
  <div id="app">
    <!-- <button @click="count++">Incrementar</button> -->
    <!-- <p>{{ count }}</p> -->

    <!-- A diretiva v-if serve para condicionais -->
    <Title v-if="mostrarEsconder" />
    <button @click="mostrarEsconder = false">Esconder</button>
  </div>
</template>

<script>
// Importando o componente Title
import Title from "./Title.vue";

export default {
  name: "App",
  // Referenciando o componente Title para ser utilizado
  components: {
    Title,
  },
  data() {
    return {
      hello: "World",
      count: 0,
      mostrarEsconder: true,
    };
  },
  // O ciclo de vida beforeCreate() não tem acesso aos dados reativos do componente, ou seja, ele não consegue acessar os valores da variável hello
  beforeCreate() {
    console.log("Before Create App");
    console.log(this.hello);
  },
  // Contudo, o ciclo de vida created() já consegue acessar os valores da variável hello
  // Geralmente utilizamos chamadas de API's no ciclo de vida created()
  created() {
    console.log("Created App");
    console.log(this.hello);
  },
  // O ciclo de vida beforeMount() não possui acesso ao template HTML quando ele é iniciado
  beforeMount() {
    console.log("Before Mount App");
    console.log(this.$el);
  },
  // O ciclo de vida mounted() tem acesso ao template HTML, diante disso, ele é capaz de renderizar os elementos
  mounted() {
    console.log("Mounted App");
    console.log(this.$el);
  },
  // Monitora alterações no DOM
  // beforeUpdate() é difrente do watch e computed
  beforeUpdate() {
    console.log("Before Update App");
    console.log(this.count);
  },
  // Monitora alterações no DOM
  // updated() é difrente do watch e computed
  updated() {
    console.log("Updated App");
    console.log(this.count);
  },
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #2c3e50;
}
</style>
