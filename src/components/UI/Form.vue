<template>
  <form @submit.prevent class="form" novalidate>
    <slot/>
  </form>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped>

.form {
  border-radius: 40px;
  padding: 23px;
  background-color: var(--form-bg);
  width: 100%;
}

</style>