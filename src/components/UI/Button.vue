<template>
  <button :style="{background, color}" class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  props:{
    color:{
      type: String
    },
    background:{
      type:String
    },
    disable:{
      type:Boolean
    }
  }
}
</script>

<style scoped>
.button {
  border-radius: 50px;
  background:var(--button-bg);
  font-weight: 500;
  font-size: 14px;
  height: 48px;
  text-align: center;
  border: none;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>