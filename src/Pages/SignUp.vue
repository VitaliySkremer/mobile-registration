<template>
  <div class="sign__wrapper">
    <Title class="signUp">Sign Up</Title>
    <Form class="form__block">
      <LabelInput label-text="Full name" placeholder="Enter name" class="fullName"/>
      <LabelInput label-text="Email" placeholder="Enter email" class="email"/>
      <LabelInput label-text="Password" placeholder="Enter password" type="password" :isPassword="true" class="password" info="Password must contain 8+ symbols, 1 special and 2 capital letters"/>
      <LabelInput label-text="Repeat password" placeholder="Enter password" type="password" :isPassword="true" class="repeat__password"/>
      <Button color="white" class="button__signUp">Sign Up</Button>
    </Form>
    <SignQuestion :sign-in="false"/>
  </div>
</template>

<script>
import SignQuestion from "../components/SignQuestion.vue";
import Title from "../components/Title.vue";
import Form from "../components/UI/Form.vue";
import LabelInput from "../components/UI/LabelInput.vue";
import Button from "../components/UI/Button.vue";
export default {
  name: "SignUp",
  components: {Button, LabelInput, Form, Title, SignQuestion},
}
</script>

<style lang="scss" scoped>

.signUp {
  margin-bottom: 17px;
}

.button__signUp {
  width: 100%;
}

.fullName,
.email,
.password {
  margin-bottom: 4px;
}

.repeat__password{
  margin-bottom: 19px;
}

.form__block{
  margin-bottom: 20px;
}

</style>