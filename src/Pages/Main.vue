<template>
  <Title class="main__title">
    Hello, {{store.authUser.name}}!
  </Title>
  <WomanMain class="woman"/>
</template>

<script>
import Title from "../components/Title.vue";
import WomanMain from "../components/UI/ImgSvg/WomanMain.vue";
import {useUsersStore} from "../Store/Users.js";

export default {
  name: "Main",
  components: {WomanMain, Title},
  setup(){
    const store = useUsersStore()
    return{
      store
    }
  }
}
</script>

<style scoped>

.main__title {
  margin-top: 85px;
}

</style>