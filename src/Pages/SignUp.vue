<template>
  <div class="sign__wrapper">
    <Title class="signUp">Sign Up</Title>
    <Form @submit="signUp" class="form__block">
      <LabelInput
          :modelValue="fullName"
          @update:modelValue="fullName = $event"
          label-text="Full name"
          placeholder="Enter name"
          class="fullName"
          :errorText="errorName"
      />
      <LabelInput
          :modelValue="email"
          type="email"
          @update:modelValue="email = $event"
          label-text="Email"
          placeholder="Enter email"
          class="email"
          :errorText="errorEmail"
      />
      <LabelInput
          :modelValue="password"
          @update:modelValue="password = $event"
          label-text="Password"
          placeholder="Enter password"
          type="password"
          :isPassword="true"
          class="password"
          info="Password must contain 8+ symbols, 1 special and 2 capital letters"
      />
      <LabelInput
          :modelValue="repeatPassword"
          @update:modelValue="repeatPassword = $event"
          label-text="Repeat password"
          placeholder="Enter password"
          type="password"
          :isPassword="true"
          class="repeat__password"
      />
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
  data(){
    return {
      fullName:'',
      errorName:'',
      email:'',
      errorEmail:'',
      password:'',
      errorPassword:'',
      repeatPassword:'',
      errorRepeatPassword:''
    }
  },
  methods:{
    signUp(){
      if(this.fullName.length<2){
        this.errorName = 'name must be longer than 1 character'
      }
      if(!this.email.includes('@') || !this.email.endsWith('.ru') && !this.email.endsWith('.com')){
        this.errorEmail = 'Enter valid email'
      }

      // this.errorEmail = '';
    }
  }
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