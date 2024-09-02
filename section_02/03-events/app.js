const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log("reduce num", num, typeof num);
      if (this.counter <= num) {
        this.counter = 0;
        return;
      }
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
