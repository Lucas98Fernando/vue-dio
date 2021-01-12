<!-- Bloco do HTML do componente -->
<template>
  <!-- O @on serve para "ouvir" algum tipo de evento -->
  <button @click="clique">O botão Vue foi clicado {{ count }} vezes</button>
</template>

<!-- Utilizado para importar plugins, outros componentes ou a configuração do componente em questão. Geralmente irá retonar um objeto -->
<script>
export default {
  // Nome para identificação, para facilitar na depuração de possíveis erros
  name: "ButtonVue",

  // É o estado do componente
  data() {
    return {
      count: 0,
    };
  },

  // Funções e métodos do componente
  methods: {
    clique() {
      // Incrementando a quantidade de clique no botão localizado dentro do template
      this.count++;
    },
  },
};
</script>

<!-- Bloco de estilização, pode ser utilizado vários tipos de linguagens de estilos, ex: CSS, SCSS, LESS, etc -->
<style lang="css">
</style>