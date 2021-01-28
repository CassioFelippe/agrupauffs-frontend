<template>
  <div class="container">
    <h1>Grupo {{grupo.nomeDoGrupo}}</h1>
    <b-row>
      <b-col cols="12">
        <label>Nome</label>
        <b-form-input placeholder="Nome" type="text" v-model="grupo.nomeDoGrupo" />
      </b-col>
      
      <b-col cols="12">
        <label>Descrição</label>
        <b-textarea placeholder="Nome" v-model="grupo.descricao" />
      </b-col>
      
      <b-col cols="12">
        <b-form-checkbox v-model="grupo.privado" switch :value=true :unchecked-value=false><strong>&nbsp;Privado</strong></b-form-checkbox>
      </b-col>
      
      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="12">
        <h1>Cursos</h1>
      </b-col>

      <b-col cols="6">
        <label>Adicionados</label>
        <ul class="text-left">
          <li v-for="c in grupo.grupoEstudoCurso" :key="c.idCurso">
            <b-button @click="remove(c.curso)" variant="danger" size="sm">
              <font-awesome-icon icon="minus" />
            </b-button>
            &nbsp;{{c.curso.nomeCurso}}
          </li>
        </ul>
      </b-col>

      <b-col cols="6">
        <label>Disponíveis</label>
        <ul class="text-right">
          <li v-for="c in cursos" :key="c.idCurso">
            {{c.nomeCurso}}&nbsp;
            <b-button @click="add(c)" variant="primary" size="sm">
              <font-awesome-icon icon="plus" />
            </b-button>
          </li>
        </ul>
      </b-col>

      <b-col cols="12">&nbsp;</b-col>
      
      <b-col cols="12" class="text-center">
        <button @click="save" type="submit" class="btn btn-primary">Salvar</button>
      </b-col>

      <go-back />
    </b-row>
  </div>
</template>

<script>
  import http from '@/services/http'

  export default {
    name: 'grupo-new',

    data() {
      return {
        grupo: {
          idGrupo: null,
          nomeDoGrupo: null,
          descricao: null,
          privado: false,
          data: new Date(),
          grupoEstudoCurso: []
        },
        required: ['nomeDoGrupo', 'descricao'],
        cursos: []
      }
    },

    methods: {
      save() {
        // validação campos não preenchidos
        for (let i = 0; i < this.required.length; i++) {
          let field = this.required[i];
          
          if (!this.grupo[field]) {
            alert(`Favor inserir ${field}.`);
            return false;
          }
        }

        http.post('grupos/editar', this.grupo).then(() => {
          this.redirect('/grupos');
        })
      },
      
      add(curso) {
        this.grupo.grupoEstudoCurso.push({curso});
        this.cursos = this.cursos.filter(c => c.idCurso !== curso.idCurso);
      },
      
      remove(curso) {
        this.grupo.grupoEstudoCurso = this.grupo.grupoEstudoCurso.filter(c => c.curso.idCurso !== curso.idCurso);
        this.cursos.push(curso);
      }
    },

    mounted() {
      http.get(`/grupos/id/${this.$route.params.id}`).then(response => {
        this.grupo = response.data;

        http.get(`/cursos`).then(cursos => {
          cursos.data.forEach(c => {
            if (!this.grupo.grupoEstudoCurso.map(gec => gec.curso.idCurso).includes(c.idCurso)){
              this.cursos.push(c);
            }
          });
        });
      });

    }
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: .25em;
  }
</style>