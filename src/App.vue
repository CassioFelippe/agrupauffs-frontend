<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  body {
    margin: 3.5em 5% 10% 5%;
  }

  input {
    margin-bottom: 1.5em;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
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
  
  /* mobile */
  @media only screen and (hover: none) and (pointer: coarse) {
    body {
      margin: 10% 5% 10% 5% !important;
    }

    .route-icon {
      /*display: none;*/
    }
  }
</style>
