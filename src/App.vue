<template>
  <div class="container">
<!--    <MainPage/>-->
    <router-view/>
  </div>
</template>

<script>
import MainPage from "./Pages/MainPage.vue";

export default {
  components:{
    MainPage
  }
}

</script>

<style scoped>


</style>
