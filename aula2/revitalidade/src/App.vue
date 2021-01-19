<template>
  <div id="app">
    <button @click="count.a++">Clique</button>
    <p>{{ count }}</p>
    <!-- <p>{{ $count }}</p>
    <p>{{ _count }}</p> -->

    <!-- Se for preciso realmente utilizar o $ ou _ no início da variável, é recomendado utilizar o $data. Conforme o exemplo abaixo:
    <p>{{ $data.$count }}</p>
    <p>{{ $data._count }}</p>-->
  </div>
</template>

<script>
export default {
  name: "App",
  // O data é sempre em formato de função
  data() {
    return {
      count: {
        x: 0,
      },

      // Evitar criar variáveis com $ ou _ no início, para evitar conflitos com propriedades padrões do Vue
      //   $count: 2,
      //   _count: 4,
    };
  },
  // Instância Vue para um componente
  mounted() {
    // console.log(this);
    // console.log(this.count);
    // this.count = 2;

    // Variável montada
    this.y = 5;
    this.$set(this.count, "y", 5);

    // Adicionando vários atributos ao mesmo tempo
    this.count = { ...this.count, ...{ a: 1, b: 3 } };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
