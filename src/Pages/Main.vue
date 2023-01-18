<template>
  <Title class="main__title">
    Hello, John Doe!
  </Title>
  <WomanMain class="woman"/>
</template>

<script>
import Title from "../components/Title.vue";
import WomanMain from "../components/UI/ImgSvg/WomanMain.vue";
export default {
  name: "Main",
  components: {WomanMain, Title}
}
</script>

<style scoped>

.main__title {
  margin-top: 85px;
}

</style>