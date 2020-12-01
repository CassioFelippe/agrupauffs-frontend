<template>
  <div>
    <b-row class="text-center">
      <b-col :cols="display_chat ? 9 : 11" class="page-wrapper">
        <img alt="Logo UFFS" src="@/assets/logo.png">
        
        <h1>{{message}}</h1>

        <!-- TODO adicionar descrição -->
        <h3 class="sub-title">-- Descrição da aplicação aqui --</h3>
        <b-row class="text-center">
          <b-col cols="12" sm="12" md="3" lg="3">&nbsp;</b-col>

          <b-col cols="12" sm="12" md="6" lg="6" class="login-buttons">
            <b-button block variant="primary" @click="to('login')">
              Login
            </b-button>
            <b-button block variant="primary" @click="to('cad_usu')">
              Cadastrar
            </b-button>
          </b-col>
          
          <b-col cols="12" sm="12" md="3" lg="3">&nbsp;</b-col>
        </b-row>
      </b-col>

      <b-col :cols="display_chat ? 3 : 1" class="chat-wrapper">
        <legend>
          <a @click="toggle_chat">{{chat_icon}}&nbsp;Chat</a>
        </legend>
        <chat class="chat" :hidden="!display_chat" />
      </b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    name: 'home',

    data() {
      return {
        message: 'Bem vindos(as) ao Agrupa UFFS!',
        display_chat: true
      }
    },

    methods: {
      toggle_chat: function() {
        this.display_chat = !this.display_chat;
      }
    },

    computed: {
      chat_icon: function() {
        return this.display_chat ? '>' : '<';
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sub-title {
    font-style: italic;
    font-weight: lighter;
  }

  .login-buttons {
    margin-top: 2em;
  }

  img {
    margin-bottom: 2em;
  }
</style>
