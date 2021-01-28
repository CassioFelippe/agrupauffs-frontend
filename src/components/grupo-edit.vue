<template>
  <div class="container">
    <h1>Grupo {{grupo.nomeDoGrupo}}</h1>
    <b-row>
      <b-col cols="12">
        <b-form-input placeholder="Nome" type="text" v-model="grupo.nomeDoGrupo" />
      </b-col>
      <b-col cols="12">
        <b-textarea placeholder="Nome" v-model="grupo.descricao" />
      </b-col>
      <b-col cols="12">
        <b-form-checkbox v-model="grupo.privado" switch :value=true :unchecked-value=false>&nbsp;Privado</b-form-checkbox>
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
        comments: [],
        grupo: {
          idGrupo: null,
          nomeDoGrupo: null,
          descricao: null,
          privado: false,
          data: new Date()
        },
        required: ['nomeDoGrupo', 'descricao']
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
      }
    },

    mounted() {
      http.get(`/grupos/id/${this.$route.params.id}`).then(response => {
        this.grupo = response.data;
      });
    }
  };
</script>