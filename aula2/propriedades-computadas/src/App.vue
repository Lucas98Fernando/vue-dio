<template>
  <div id="app">
    <!-- Passando o valor 2 por parâmetro para incrementar na função -->
    <!-- <button @click="incrementar(2)">Clique aqui</button> -->
    <!-- <p>{{ count }}</p> -->

    <button @click="fullNameObj = 'Darth Vader'">Mudar nome</button>

    <!-- Função sendo invocada -->
    <!-- <p>{{ fullName() }}</p> -->

    <!-- Função computed sendo referenciada -->
    <!-- <p>{{ fullNameComputed }}</p> -->
    <p>{{ fullNameObj }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      firstName: "Lucas",
      lastName: "Fernando",
    };
  },
  // Parecidas com métodos em partes
  // Não precisam ser invocados, apenas referenciados
  // São baseadas em cache, ou seja, só são alteradas quando suas dependências mudam
  // O computed é recomendado para ganho de performance, quando uma determinada função tem seus valores constantes e precisam ser executados inúmeras vezes
  computed: {
    fullNameComputed() {
      //   return Math.random();
      return `${this.firstName} ${this.lastName}`;
    },
    fullNameObj: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
		// Desestruturação do value recebido por prâmetro ao clique do botão mudar nome
		// O split serve pra criar um "breakpoint" nos valores recebidos por parâmetro
        const [first, last] = value.split(" ");
        this.firstName = first;
        this.lastName = last;
      },
    },
  },
  // Funções para serem instânciadas em vários outros componentes
  // Nos métodos não pode utilizar arrow functions => {}
  // Métodos precisam ser chamados / invocados
  methods: {
    incrementar(value) {
      this.count += value;
    },
    // Função que concatena as variáveis firstName e lastName
    fullName() {
      //   return Math.random();
      return `${this.firstName} ${this.lastName}`;
    },
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
