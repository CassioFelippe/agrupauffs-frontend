<template>
  <div>
    <b-row class="text-center">
      <b-col cols="12" class="title">
        <h1>Grupos</h1>
      </b-col>
      <b-col cols="12" md="6" lg="6" class="page-wrapper" v-for="g in grupos" :key="g.id">
        <b-card :title="g.nomeDoGrupo" tag="article" class="mb-2">
          <b-card-text>
            {{g.descricao}}
          </b-card-text>
          <b-button :href="'/grupos/'+g.idGrupo" variant="primary">Acessar</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  import http from '@/services/http'

  export default {
    name: 'grupos',

    data() {
      return {
        grupos: []
      }
    },

    methods: {
    },

    mounted() {
      http.post('grupos/pesquisa', {}).then(response => {
        this.grupos = response.data
      })
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-bottom: 2em;
  }
</style>
