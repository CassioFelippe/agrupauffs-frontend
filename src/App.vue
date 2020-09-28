<template>
  <div id="app">
    <img alt="Logo UFFS" src="./assets/logo.png">

    <home message="Bem vindos(as) ao Agrupa UFFS!" />
  </div>
</template>

<script>
  export default {
    name: 'App'
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

  .btn.btn-primary {
    border-color: darkgreen;
    background-color: green;
  }

  .btn.btn-primary:hover,
  .btn.btn-primary:focus {
    border-color: darkgreen !important;
    background-color: darkgreen !important;
    box-shadow: 0 0 0 0.2rem rgba(0, 128, 0, 0.2) !important;
  }
</style>
