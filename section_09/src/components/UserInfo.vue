<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<template>
  <section>
    <base-card>
      <div>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
