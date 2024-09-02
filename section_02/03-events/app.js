const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },

  computed: {
    fullname() {
      if (this.name === "") return "";
      return this.name + " " + "lastName";
    },
  },

  methods: {
    outputFullName() {
      if (this.name === "") return "";
      return this.name + " " + "lastName";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("Submitted!");
    },

    setName(event) {
      this.name = event.target.value;
    },

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
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
