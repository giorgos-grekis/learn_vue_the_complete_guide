const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "cisu",
          name: "Cisu Moeg",
          phone: "6949999999",
          email: "cisu@email.com",
        },
        {
          id: "john",
          name: "John Doe",
          phone: "6979999999",
          email: "johndoe@email.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
