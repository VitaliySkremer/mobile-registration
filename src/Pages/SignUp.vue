<template>
  <div class="sign__wrapper">
    <SignQuestion :sign-in="false"/>
  </div>
</template>

<script>
import SignQuestion from "../components/SignQuestion.vue";
export default {
  name: "SignUp",
  components: {SignQuestion}
}
</script>

<style scoped>

</style>