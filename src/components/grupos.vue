<template>
  <div>
    <b-row>
      <b-col cols="3" class="text-left">
        <ul>
          <strong>Cursos Disponíveis</strong>
          <li v-for="c in cursos" :key="c.idCurso">
            <b-form-checkbox v-model="c.active" switch :value=true :unchecked-value=false>&nbsp;{{c.nomeCurso}}</b-form-checkbox>
          </li>
        </ul>
      </b-col>
      <b-col cols="9">
        <b-row class="text-center">
          <b-col cols="12" class="title">
            <h1>Grupos</h1>
          </b-col>
          <b-col cols="12" md="6" lg="6" class="page-wrapper" v-for="g in filteredGrupos" :key="g.id">
            <b-card :title="g.nomeDoGrupo" tag="article" class="mb-2">
              <b-card-text>
                {{g.descricao}}
              </b-card-text>
              <b-button :href="'/grupos/'+g.idGrupo" variant="primary">Acessar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12">&nbsp;</b-col>

      <go-back />
    </b-row>
  </div>
</template>

<script>
  import http from '@/services/http'

  export default {
    name: 'grupos',

    data() {
      return {
        grupos: [],
        cursos: [],
        filteredGrupos: []
      }
    },

    methods: {},

    watch: {
      cursos: {
        handler(cursos) {
          if (!cursos.filter(c => !!c.active).length) {
            this.filteredGrupos = this.grupos;
            return;
          }

          let grupos = [];
          cursos = this.cursos.filter(c => c.active).map(c => c.idCurso);

          console.log(cursos)

          this.grupos.forEach(g => {
            console.log(g.cursos)
            cursos.forEach(c => {
              if (g.cursos.includes(c) && !grupos.includes(g)) {
                grupos.push(g);
              }
            });
          });

          this.filteredGrupos = grupos;
        },
        deep: true
      }
    },

    mounted() {
      http.post('grupos/pesquisa', {}).then(response => {
        response.data.forEach(g => {
          g.cursos = g.grupoEstudoCurso.map(gec => gec.curso.idCurso);
        });
        this.grupos = response.data;
        this.filteredGrupos = response.data;
      });
      http.get('cursos').then(response => {
        this.cursos = response.data;
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-bottom: 2em;
  }

  ul {
    list-style-type: none;
  }

  li input {
    display: inline;
  }
</style>
