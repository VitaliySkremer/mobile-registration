<template>
  <p v-if="!signIn" class="sign">
    Already have an account?
    <router-link class="link" to="/signIn">Sign In</router-link>
  </p>
  <p v-else class="sign">
    Don’t have an account yet?
    <router-link class="link" to="/signUp">Sign Up</router-link>
  </p>
</template>

<script>
export default {
  props:{
    signIn:{
      type: Boolean
    }
  }
}
</script>

<style scoped>
.sign {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--sign-question);
  text-align: center;
  max-width: 190px;
}

.link {
  text-decoration: underline;
}
</style>