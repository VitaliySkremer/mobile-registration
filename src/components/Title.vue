<template>
  <h2 class="title">
    <slot/>
  </h2>
</template>

<script>
export default {

}
</script>

<style scoped>

.title {
  color: var(--title-color);
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.02em;
  max-width: 220px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>