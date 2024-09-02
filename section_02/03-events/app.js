const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      confirmedName: "",
      // fullname: "",
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 5000);
      }
    },

    // // whenever the name changes, the wacther will be execute
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //     return;
    //   }
    //   this.fullname = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //     return;
    //   }
    //   this.fullname = this.name + " " + value;
    // },
  },

  computed: {
    fullname() {
      if (this.name === "" && this.lastName === "") return "";
      return this.name + " " + this.lastName;
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
