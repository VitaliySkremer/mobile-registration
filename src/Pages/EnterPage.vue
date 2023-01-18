<template>
  <Title class="enter__title">
    Ready for a great User experience?
  </Title>
  <p class="enter__description">
    Bring your media to the next level!
  </p>
  <div class="buttons__block">
    <Button @click="signUp" background="white" color="black" class="signUp">
        Sign Up
    </Button>
    <Button @click="signIn">
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8H12.17L8.29 11.88C7.9 12.27 7.9 12.91 8.29 13.3C8.68 13.69 9.31 13.69 9.7 13.3L15.29 7.71C15.68 7.32 15.68 6.69 15.29 6.3L9.71 0.700001C9.32 0.310001 8.69 0.310001 8.3 0.700001C7.91 1.09 7.91 1.72 8.3 2.11L12.17 6H1C0.45 6 0 6.45 0 7C0 7.55 0.45 8 1 8Z" fill="white"/>
      </svg>
    </Button>
  </div>
  <Woman class="woman"/>
</template>

<script>
import Title from "../components/Title.vue";
import Button from "../components/UI/Button.vue";
import Woman from "../components/UI/ImgSvg/Woman.vue";
export default {
  components:{
    Title,
    Button,
    Woman
  },
  methods:{
    signIn(){
      this.$router.push('/signIn')
    },
    signUp(){
      this.$router.push('/signUp')
    }
  }
}
</script>

<style scoped>

.enter__title {
  margin-bottom: 17px;
}

.enter__description{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: var(--description-color);
  margin-bottom: 27px;
  max-width: 220px;
  text-align: center;
}

.buttons__block {
  display: flex;
}

.signUp {
  margin-right: 16px;
  width: 120px;
}
</style>