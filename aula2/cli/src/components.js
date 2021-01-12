// Criação de componentes de maneira global
import Vue from 'vue';

// Criação de templates através de Strings
Vue.component('ButtonString', {
  template: ' <button @click="clique">O botão String foi clicado {{ count }} vezes</button>',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clique() {
      // Incrementando a quantidade de clique no botão localizado dentro do template
      this.count++;
    },
  },
})

// Criação de templates através do Template String
Vue.component('ButtonTemplate', {
  template: `<button @click="clique">
  O botão Template String foi clicado {{ count }} vezes
  </button>`,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clique() {
      // Incrementando a quantidade de clique no botão localizado dentro do template
      this.count++;
    },
  },
})

// Criação de templates através do X-Template
Vue.component('ButtonXTemplate', {
  template: '#button-x-template',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clique() {
      // Incrementando a quantidade de clique no botão localizado dentro do template
      this.count++;
    },
  },
})

// Criação de um template Inline 
Vue.component('ButtonInline', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clique() {
      // Incrementando a quantidade de clique no botão localizado dentro do template
      this.count++;
    },
  },
})

// Criação de template através Render
Vue.component('ButtonRender', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clique() {
      // Incrementando a quantidade de clique no botão localizado dentro do template
      this.count++;
    },
  },
  render(createElement) {
    return createElement(
      // Tag do componente
      'button', {
        // Qual listeners serão utilizados
        on: {
          click: this.clique
        }
      },
      [
        `O botão Render foi clicado ${this.count} vezes`
      ]
    );
  },
})

// Criação de template através do JSX
Vue.component('ButtonJSX', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clique() {
      // Incrementando a quantidade de clique no botão localizado dentro do template
      this.count++;
    },
  },
  render() {
      return (
        <button onclick={this.clique}>O botão JSX foi clicado {this.count } vezes</button>
      )
  }
})
