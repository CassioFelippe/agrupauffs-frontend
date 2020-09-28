<template>
  <div class="hello">
    <h1>{{message}}</h1>

    <h3 class="sub-title">-- Descrição da aplicação aqui... --</h3>

    <b-row>
      <b-col cols="12" sm="12" md="3" lg="3">&nbsp;</b-col>

      <b-col cols="12" sm="12" md="6" lg="6" class="login-buttons">
        <b-button block variant="primary">
          Login
        </b-button>
        <b-button block variant="primary">
          Cadastrar
        </b-button>
      </b-col>
      
      <b-col cols="12" sm="12" md="3" lg="3">&nbsp;</b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'home',

    props: {
      message: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- #1C4229 uffs dark green -->
<!-- #289640 uffs green -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .sub-title {
    font-style: italic;
    font-weight: lighter;
  }

  .login-buttons {
    margin-top: 2em;
  }
</style>
