<template>
  <h1>Ciclos de Vida no Vue JS</h1>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {};
  },
  beforeDestroy() {
    console.log("Before Destroyed Title");
  },
  destroyed() {
    console.log("Destoyed Title");
  },
  //   // O ciclo de vida beforeCreate() não tem acesso aos dados reativos do componente
  //   beforeCreate() {
  //     console.log("Before Create Title");
  //     console.log(this.hello);
  //   },
  //   // Geralmente utilizamos chamadas de API's no ciclo de vida created()
  //   created() {
  //     console.log("Created Title");
  //     console.log(this.hello);
  //   },
  //   // O ciclo de vida beforeMount() não possui acesso ao template HTML quando ele é iniciado
  //   beforeMount() {
  //     console.log("Before Mount Title");
  //     console.log(this.$el);
  //   },
  //   // O ciclo de vida mounted() tem acesso ao template HTML, diante disso, ele é capaz de renderizar os elementos
  //   mounted() {
  //     console.log("Mounted Title");
  //     console.log(this.$el);
  //   },
};
</script>