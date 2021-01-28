<template>
  <div class="container">
    <h1>Novo Grupo</h1>
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
        <button @click="create" type="submit" class="btn btn-primary">Cadastrar</button>
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
          nomeDoGrupo: null,
          descricao: null,
          privado: false,
          data: new Date()
        },
        required: ['nomeDoGrupo', 'descricao']
      }
    },
    methods: {
      create() {
        // validação campos não preenchidos
        for (let i = 0; i < this.required.length; i++) {
          let field = this.required[i];
          
          if (!this.grupo[field]) {
            alert(`Favor inserir ${field}.`);
            return false;
          }
        }

        http.post('grupos/criar', this.grupo).then(() => {
          this.redirect('/grupos');
        })
      }
    },

    mounted() {
      // TODO remove it
      this.grupo = {
        nomeDoGrupo: 'Teste '+new Date(),
        descricao: 'grupo de teste para criação de grupos',
        privado: false,
        data: new Date()
      }
    }
  };
</script>