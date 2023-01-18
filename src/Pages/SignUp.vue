<template>
  <div class="sign__wrapper">
    <Title class="signUp">Sign Up</Title>
    <Form @submit="signUp" class="form">
      <LabelInput
          :modelValue="fullName"
          @update:modelValue="fullName = $event"
          labelText="Full name"
          placeholder="Enter name"
          class="fullName"
          :errorText="errorName"
      />
      <LabelInput
          :modelValue="email"
          type="email"
          @update:modelValue="email = $event"
          labelText="Email"
          placeholder="Enter email"
          class="email"
          :errorText="errorEmail"
      />
      <LabelInput
          :modelValue="password"
          @update:modelValue="password = $event"
          labelText="Password"
          placeholder="Enter password"
          type="password"
          :isPassword="true"
          class="password"
          info="Password must contain 8+ symbols, 1 special and 2 capital letters"
          :errorText="errorPassword"
      />
      <LabelInput
          :modelValue="repeatPassword"
          @update:modelValue="repeatPassword = $event"
          labelText="Repeat password"
          placeholder="Enter password"
          type="password"
          :isPassword="true"
          class="repeat__password"
          :errorText="errorRepeatPassword"
      />
      <Button color="white" class="button__signUp">Sign Up</Button>
    </Form>
    <SignQuestion :sign-in="false"/>
    <Alert text="A user with such an email is already registered" color="white" :active="activeAlert" @closeAlert="closeAlert"/>
  </div>
</template>

<script>
import SignQuestion from "../components/SignQuestion.vue";
import Title from "../components/Title.vue";
import Form from "../components/UI/Form.vue";
import LabelInput from "../components/UI/LabelInput.vue";
import Button from "../components/UI/Button.vue";
import {useUsersStore} from "../Store/Users.js";
import Alert from "../components/UI/Alert.vue";

export default {
  name: "SignUp",
  components: {Alert, Button, LabelInput, Form, Title, SignQuestion},
  setup(){
    const store = useUsersStore();
    return {
      store
    }
  },
  data(){
    return {
      fullName:'',
      errorName:'',
      email:'',
      errorEmail:'',
      password:'',
      errorPassword:'',
      repeatPassword:'',
      errorRepeatPassword:'',
      activeAlert: false
    }
  },
  methods:{
    signUp(){
      this.errorName = '';
      this.errorEmail = '';
      this.errorPassword = '';
      this.errorRepeatPassword = '';

      if(this.fullName.length<2){
        this.errorName = 'name must be longer than 1 character';
      }
      if(!this.email.includes('@') || !this.email.endsWith('.ru') && !this.email.endsWith('.com')){
        this.errorEmail = 'Enter valid email';
      }
      if(this.password.length<8 || !/((.*[A-Z].*){2,})((.*[!@#$%&?_^:*+="].*)+)/.test(this.password)){
        this.errorPassword = 'Enter valid password';
      }
      if(this.password !== this.repeatPassword || !this.repeatPassword){
        this.errorRepeatPassword = 'Passwords must match';
      }

      const findUser = this.store.users.find(user=> user.email === this.email)
      if(findUser){
        this.errorEmail = ' ';
        this.activeAlert = true;
      }

      if(!this.errorName && !this.errorEmail && !this.errorPassword && !this.errorRepeatPassword){
        const authUser = {
          name:this.fullName,
          email:this.email,
          password:this.password
        };
        this.store.addUsers(authUser);
        this.store.setAuthUser(authUser);
        this.$router.push('/main');
      }
    },

    closeAlert(){
      this.activeAlert = false;
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

.form {
  margin-bottom: 20px;
}

</style>