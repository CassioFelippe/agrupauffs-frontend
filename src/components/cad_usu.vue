<template>
  <div class="container">
    <h1>Novo Usuário</h1>
    <div class="form-todo form-group">
      <p>
        <input placeholder="Nome" type="text" name="usuario" class="form-control" v-model="usuario.nome" />
      </p>
      <p>
        <input placeholder="Login" type="text" name="login"  class="form-control" v-model="usuario.login" />
      </p>
      <p>
        <input placeholder="Email" type="email" name="email"  class="form-control" v-model="usuario.email" />
      </p>
      <p>
        <input placeholder="Senha" type="password" name="senha" class="form-control" v-model="usuario.senha" />
      </p>
      <p>
        <input placeholder="Confirmação Senha" type="password" name="confirmacao-senha" class="form-control" v-model="usuario.confirmacaoSenha" />
      </p>
      <p>
        <textarea placeholder="Cursos Relacionados" name="cursos" class="form-control" v-model="usuario.cursos" />
      </p>

      <button @click="create" type="submit" class="btn btn-primary">Cadastrar</button>

      <b-col cols="12" class="text-left">
        <b-col cols="3">
          <b-button @click="goback" class="btn btn-primary">
            <font-awesome-icon icon="long-arrow-alt-left" />
          </b-button>
        </b-col>
      </b-col>
    </div>
  </div>
</template>

<script>
  import http from '@/services/http'

  export default {

    data() {
      return {
        comments: [],
        usuario: {
          nome: null,
          login: null,
          email: null,
          senha: null,
          confirmacaoSenha: null,
          cursos: null
        },
        required: ['nome', 'email', 'senha', 'confirmacaoSenha']
      }
    },
    methods: {
      create() {
        // validação campos não preenchidos
        for (let i = 0; i < this.required.length; i++) {
          let field = this.required[i];
          
          if (field === 'email' && !this.validateEmail(this.usuario[field])) {
            alert(`Favor inserir email no formato correto.`);
            return false;
          }
          
          if (field === 'confirmacaoSenha' && this.usuario.confirmacaoSenha !== this.usuario.senha) {
            alert(`As senhas não coincidem.`);
            return false;
          }

          if (!this.usuario[field]) {
            alert(`Favor inserir ${field}.`);
            return false;
          }
        }
      
        this.comments.push({
          nome: this.nome,
          message: this.message
        });

        this.nome = '';
        this.message = '';

        http.post('usuarios', this.usuario).then(response => {
          console.log(response)
          this.redirect('login');
        })

      },

      removeComment(index) {
        this.comments.splice(index, 1);
      }
    },
    computed: {
      allComments() {
        return this.comments.map(comment => ({
          ...comment,
          name: comment.nome.trim() === '' ? 'Anônimo' : comment.nome
        }))
      }
    },
    watch: {
      comments(val) {
        console.log('val', val)
      }
    },

    mounted() {
      // TODO remove it
      this.usuario = {
        nome: 'Cassio',
        login: 'cassio.felippe',
        email: 'cassioluis12@gmail.com',
        senha: '123',
        confirmacaoSenha: '123',
        cursos: 'Ciência da Computação'
      }
    }
  };
</script>