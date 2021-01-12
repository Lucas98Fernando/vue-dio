<template>
  <div id="app">
    <h1>Digital Innovation One</h1>
    <h2>Criação de componentes no Vue JS</h2>
    <!-- Chamada dos componente dentro do template -->
    <ButtonVue></ButtonVue>
    <ButtonString></ButtonString>
    <ButtonTemplate></ButtonTemplate>
    <ButtonXTemplate></ButtonXTemplate>
    <ButtonInline inline-template>
      <!-- O @on serve para "ouvir" algum tipo de evento -->
      <button @click="clique">
        O botão Inline foi clicado {{ count }} vezes
      </button>
    </ButtonInline>
    <ButtonRender></ButtonRender>
    <ButtonJSX></ButtonJSX>
  </div>
</template>

<script>
// Importando o componente ButtonVue / A boa prática é criar uma pasta para agrupar todos os componentes da aplicação
import ButtonVue from "./ButtonVue.vue";

export default {
  name: "App",
  components: {
    ButtonVue,
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
}
</style>
