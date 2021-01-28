<template>
  <div class="container">
    <b-row class="text-center">
      <b-col cols="12" class="title">
        <h1>{{model.nomeDoGrupo}}</h1>
      </b-col>
      <b-col cols="12" class="page-wrapper text-left">
        <b-col cols="12">
          <h3>Cursos</h3>
        </b-col>
        <b-col cols="12">
          <ul>
            <li v-for="(g, i) in model.grupoEstudoCurso" :key="'cur'+i">
              {{g.curso.nomeCurso}}
            </li>
          </ul>
        </b-col>
        <b-col cols="12">
          <h3>Horários</h3>
        </b-col>
        <b-col cols="12">
          <ul>
            <li v-for="(g, i) in model.grupoEstudoHorario" :key="'hor'+i">
              {{parseDate(g.dataDeCriacaoDoRegistro)}} TODO isso aqui é a hora de criação, usar hora marcada
            </li>
          </ul>
        </b-col>
        <b-col cols="12">
          <h3>Membros</h3>
        </b-col>
        <b-col cols="12">
          <ul>
            <li v-for="(g, i) in model.grupoEstudoUsuario" :key="'usu'+i">
              {{g.usuario.nome}} <b-badge v-if="g.administrador" variant="dark">admin</b-badge>
            </li>
          </ul>
        </b-col>
      </b-col>

      <go-back />
    </b-row>
  </div>
</template>

<script>
  import http from '@/services/http'

  export default {
    name: 'grupo',

    data() {
      return {
        model: {}
      }
    },

    methods: {
      parseDate(date) {
        let parsed = new Date(Date.parse(date)),
        day = parsed.getDate(),
        month = parsed.getMonth(),
        year = parsed.getFullYear(),
        time = date.split('T')[1],
        hour = time.split(':')[0],
        minute = time.split(':')[1];

        return `${day < 10 ? '0'+day : day}/${month < 10 ? '0'+(month+1) : month+1}/${year} ${hour}h${minute}`;
      }
    },

    mounted() {
      http.get(`/grupos/id/${this.$route.params.id}`).then(response => {
        this.model = response.data;
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-bottom: 2em;
  }

  .badge {
    margin-left: .5em;
  }
</style>
