const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      if (this.counter <= 0) return;
      this.counter--;
    },
  },
});

app.mount("#events");
