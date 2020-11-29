<template>
   <div class="container">
          <h1>Novo Usúario</h1>
          <hr />
          <div class="form-todo form-group">
            <p>
              <input placeholder="Nome" type="text" name="usuario" class="form-control" v-model="name" />
            </p>
            <p>
              <input placeholder="Email" type="text" name="email"  class="form-control" v-model="email" />
            </p>
            <p>
              <input placeholder="Senha" type="text" name="senha" class="form-control" v-model="senha" />
            </p>
            <p>
              <textarea placeholder="Cursos Relacionados" name="cursos" class="form-control" v-model="cursos" />
            </p>    
            <button @click="Cadastrar" type="submit" class="btn btn-primary">Cadastrar</button>
          </div>
          <hr />
        </div>
</template>

<script>
     
    export default {

      data() {
        return {
          comments: [],
          name: '',
          email: '',
          senha:'',
          cursos:''
        }
      },
      methods: {
        Cadastrar() {
          if (this.name.trim() === '') {
            return;
          }
        
          this.comments.push({
            name: this.name,
            message: this.message
          });

          this.name = '';
          this.message = '';
        },
        removeComment(index) {
          this.comments.splice(index, 1);
        }
      },
      computed: {
        allComments() {
          return this.comments.map(comment => ({
            ...comment,
            name: comment.name.trim() === '' ? 'Anônimo' : comment.name
          }))
        }
      },
      watch: {
        comments(val) {
          console.log('val', val)
        }
      }
    }
</script>