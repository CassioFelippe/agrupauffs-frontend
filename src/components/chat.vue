<template>
  <b-container class="floating-chat">
    <b-row>
      <b-col cols="12" class="history-messages">
        <b-table :items="messages" :fields="['text']" striped></b-table>
      </b-col>
      
      <b-col cols="12" sm="12" md="3" lg="3">&nbsp;</b-col>
    </b-row>
  </b-container>
</template>

<script>
  class Message {
    constructor(data) {
      let date = new Date();
      this.id = `${data['author']}_${date}`;
      this.author = null;
      this.text = null;
      this.date = date;

      for (let item in data) {
        this[item] = data[item];
      }
    }

    getDate() {
      let date = this.date,
      day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
      month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth(),
      year = date.getFullYear();


      if (date) {
        return `${day}/${month}/${year}`;
      } else {
        return '';
      }
    }
  }
  export default {
    name: 'chat',

    data() {
      return {
        messages: [
          new Message({author: 'system', text: 'Bem-vindo (a) ao chat!'}),
          new Message({author: 'system', text: 'Bem-vindo (a) ao chat!'}),
          new Message({author: 'system', text: 'Bem-vindo (a) ao chat!'}),
          new Message({author: 'system', text: 'Bem-vindo (a) ao chat!'}),
          new Message({author: 'system', text: 'Bem-vindo (a) ao chat!'}),
          new Message({author: 'system', text: 'Bem-vindo (a) ao chat!'}),
          new Message({author: 'system', text: 'Bem-vindo (a) ao chat!'})
        ]
      }
    },

    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.floating-chat {
    border-left: 1px black solid;
  }
</style>
