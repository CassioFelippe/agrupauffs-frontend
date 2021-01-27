<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col cols="12" class="route-icon">
        <font-awesome-icon icon="user" />
        <h1>Login</h1>
      </b-col>

      <b-col cols="12" sm="12" md="6" lg="4" class="login-inputs">
        <label>Usuário</label>
        <b-form-input type="text" />
        
        <label>Senha</label>
        <b-form-input type="password" />

        <b-button @click="login" variant="primary">
          Entrar
        </b-button>
      </b-col>

      <b-col cols="12" class="text-left">
        <b-col cols="1">
          <b-button @click="goback" class="btn btn-primary">
            <font-awesome-icon icon="long-arrow-alt-left" />
          </b-button>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'login',

    mounted() {},

    methods: {
      login() {
        this.redirect('/grupos');
      }
    }
  };
</script>

<style scoped>
  svg.fa-user {
    color: green;
    font-size: 10em;
    margin-bottom: 0.1em;
  }

  .login-inputs {
    margin-top: 2em;
  }

  button {
    width: 100%;
    margin-top: 1em;
  }
</style>
