<template>
  <div id="app">
    <h1>Props e Diretivas</h1>
    <h2>v-bind, v-if, v-show</h2>
    <!-- A diretiva v-if, serve para exibir ou ocultar um elemento, porém, ele remove permanentemente -->
    <!-- É possível utilizar encadeamento de if, else if e else -->
    <!-- <p v-if="state === 'loading'">Carregando</p>
    <p v-else-if="state === 'error'">Erro</p>
    <p v-else-if="message.length === '0'">Nenhum dado encontrado</p>
    <p v-else>{{ message }}</p> -->
    <!------------------------------------------------------------------------------------------->
    <!-- A diretiva v-show, também serve para exibir ou ocultar um elemento, porém, essa ação acontece através do css -->
    <!-- <p v-show="true">Diretivas v-show</p> -->
    <!------------------------------------------------------------------------------------------>
    <!-- É possível utilizar um shorthand para a diretiva v-bind, substituindo ele por apenas : (dois pontos) -->
    <!-- Ex:  <a :href="url">Site</a> -->
    <a v-bind:href="url">Site</a>
    <!-- É possível criar classes dinâmicas com arrays -->
    <!-- <h1 class="test" :class="[red, blue, green]">Diretiva v-bind</h1> -->
    <!-- É possível criar condicionais com o v-bind dentro de um elemeto do html -->
    <!-- <h1
      class="test"
      :class="{
        red: showRed,
        blue: !showRed,
      }"
    >
      Diretiva v-bind
    </h1> -->
    <!-- É possível concatenar arrays e condicionais dentro de um elemento do html -->
    <!-- <h1 :class="[red, {blue: showBlue}]">Diretivas v-bind</h1> -->
    <h1 style="font-size: 10px" :style="{ color: 'red', fontSize: '60px' }">
      Diretivas v-bind Style
    </h1>
    <h1 style="font-size: 10px" :style="style">Diretivas v-bind Style</h1>
    <h1 style="font-size: 10px" :style="[color, fontSize]">
      Diretivas v-bind Style
    </h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      // state: 0,
      // message: [{ Hello: "world" }],
      // url: "www.google.com",
      // red: "red",
      // blue: "blue",
      // green: "green",
      // showRed: false,
      // showBlue: true,
      // style: { color: "red", fontSize: "60px" },
      color: { color: "red" },
      fontSize: { fontSize: "50px" },
    };
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
