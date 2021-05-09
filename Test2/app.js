const app = Vue.createApp({
  data() {
    return { 
      enterValue: '',
      lists: []
     };
  },
  methods: {
    addTodo() {
      this.lists.push(this.enterValue);
      this.enterValue='';
    }
  }
});

app.mount('#Todo-App');