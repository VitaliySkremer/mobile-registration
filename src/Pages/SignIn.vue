<template>
  <div class="sign__wrapper">
    <Title class="signIn">Sign In</Title>
    <Form class="form">
      <LabelInput
          :modelValue="email"
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
          :errorText="errorPassword"
      />
      <Button @click="signIn" color="white" class="button__signIn">Sign In</Button>
    </Form>
    <SignQuestion :sign-in="true"/>
    <Alert text="Wrong email or password" color="white" :active="activeAlert" @closeAlert="closeAlert"/>
  </div>
</template>

<script>
import SignQuestion from "../components/SignQuestion.vue";
import Title from "../components/Title.vue";
import Form from "../components/UI/Form.vue";
import Button from "../components/UI/Button.vue";
import LabelInput from "../components/UI/LabelInput.vue";
import Alert from "../components/UI/Alert.vue";
import {useUsersStore} from "../Store/Users.js";

export default {
  name: "SignIn",
  components: {Alert, LabelInput, Button, Form, Title, SignQuestion},
  setup(){
    const store = useUsersStore();
    return{
      store
    }
  },
  data(){
    return{
      email:'',
      errorEmail:'',
      password:'',
      errorPassword:'',
      activeAlert: false
    }
  },
  methods:{
    signIn(){
      this.errorEmail = '';
      this.errorPassword = '';
      if(!this.email){
        this.errorEmail = 'Enter the email';
      }
      if(!this.password){
        this.errorPassword = 'Enter the password';
      }

      const findUser = this.store.users.find(user=> user.email === this.email);
      if(findUser === undefined || findUser.password !== this.password){
        this.errorEmail = ' ';
        this.errorPassword = ' ';
      }

      if(!this.errorEmail && !this.errorPassword){
        this.store.setAuthUser(findUser);
        this.$router.push('/main');
      }else {
        this.activeAlert = true;
      }
    },
    closeAlert(){
      this.activeAlert = false;
    },
  },
  watch:{
    email(){
      this.closeAlert();
    },
    password(){
      this.closeAlert();
    }
  }
}
</script>

<style scoped>

.signIn {
  margin-bottom: 17px;
}

.form {
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