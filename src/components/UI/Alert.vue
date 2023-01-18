<template>
  <div :style="{background, color}" :class="['alert',active? 'view__alert' :'']">
    <div class="alert_wrapper">
      <p>{{text}}</p>
      <button @click="closeAlert" class="close__button">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 0.758309C10.925 0.433309 10.4 0.433309 10.075 0.758309L5.99998 4.82498L1.92498 0.749976C1.59998 0.424976 1.07498 0.424976 0.749976 0.749976C0.424976 1.07498 0.424976 1.59998 0.749976 1.92498L4.82498 5.99998L0.749976 10.075C0.424976 10.4 0.424976 10.925 0.749976 11.25C1.07498 11.575 1.59998 11.575 1.92498 11.25L5.99998 7.17497L10.075 11.25C10.4 11.575 10.925 11.575 11.25 11.25C11.575 10.925 11.575 10.4 11.25 10.075L7.17497 5.99998L11.25 1.92498C11.5666 1.60831 11.5666 1.07498 11.25 0.758309Z" fill="white"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props:{
    text:{
      type:String
    },
    color:{
      type: String
    },
    background:{
      type:String
    },
    active:{
      type:Boolean
    }
  },
  methods:{
    closeAlert(){
      this.$emit('closeAlert');
    }
  }
}
</script>

<style lang="scss" scoped>

.alert{
  background: var(--error-color);
  position: fixed;
  bottom: 17px;
  min-width: 275px;
  border-radius: 50px;
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 15px 0 45px;
  transform: translateY(200px);
  opacity: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  &_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

.close__button {
  outline: none;
  border: none;
  background-color: transparent;
}

.view__alert {
  transform: none;
  opacity: 1;
  animation: test .5s 1 ease-in-out;
}

@keyframes test {
  0%{
    transform: translate(0,200px);
  }
  20%{
    transform: translate(-10px,0);
  }
  40%{
    transform: translate(10px,0);
  }
  60%{
    transform: translate(-10px,0);
  }
  80%{
    transform: translate(10px,0);
  }
  100%{
    transform: none;
  }
}

</style>