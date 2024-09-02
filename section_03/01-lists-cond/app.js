const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    removeGoal(idx) {
      return this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
