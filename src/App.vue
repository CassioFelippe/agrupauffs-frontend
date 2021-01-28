<template>
  <div id="app">
    <b-col cols="12" class="agrupa-header">
      <b-col cols="4" class="text-left">
        <b-button @click="redirect('/')" class="btn btn-primary">
          <font-awesome-icon icon="home" />&nbsp;HOME
        </b-button>
      </b-col>
    </b-col>

    <b-col cols="12" class="agrupa-body">
      <router-view />
    </b-col>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  html {
    margin: 0;
    display: block;
    position: relative;
    min-height: 100%;
  }

  html::after {
    content: "";
    background-image: url(../public/uffs-background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  input, textarea {
    margin-bottom: 1.5em;
  }

  a {
    color: #299640;
  }

  a:hover {
    color: #1C4328;
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

  .agrupa-header {
    background-color: #5C9A6B;
    height: 4em;
    padding: .75em .75em .75em .75em;
  }

  .agrupa-body {
    margin: 3.5em 0 5% 0;
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
