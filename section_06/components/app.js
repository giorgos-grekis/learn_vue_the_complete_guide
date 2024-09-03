const app = Vue.createApp({
  data() {
    return {
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
});

app.component("friend-contact", {
  template: `<li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
</li>
`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "cisu",
        name: "Cisu Moeg",
        phone: "6949999999",
        email: "cisu@email.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
