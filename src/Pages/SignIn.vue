<template>
  <div class="sign__wrapper">
    <Title class="signIn">Sign In</Title>
    <Form class="form__block">
      <LabelInput label-text="Email" placeholder="Enter email" class="email"/>
      <LabelInput label-text="Password" placeholder="Enter password" type="password" :isPassword="true" class="password"/>
      <Button color="white" class="button__signIn">Sign In</Button>
    </Form>
    <SignQuestion :sign-in="true"/>
  </div>
</template>

<script>
import SignQuestion from "../components/SignQuestion.vue";
import Title from "../components/Title.vue";
import Form from "../components/UI/Form.vue";
import Button from "../components/UI/Button.vue";
import LabelInput from "../components/UI/LabelInput.vue";
export default {
  name: "SignIn",
  components: {LabelInput, Button, Form, Title, SignQuestion}
}
</script>

<style scoped>

.signIn {
  margin-bottom: 17px;
}

.form__block {
  margin-bottom: 20px;
}

.button__signIn {
  width: 100%;
}

.email {
  margin-bottom: 4px;
}

.password {
  margin-bottom: 19px;
}


</style>