<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert: ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;

      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>

  <teleport to="#dialog">
    <error-alert v-if="inputIsInvalid">
      <template #default>
        <h2>Input is invalid</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
      </template>
    </error-alert>
  </teleport>
</template>
