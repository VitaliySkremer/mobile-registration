<template>
  <div class="label">
    <div class="info__block">
      <span class="label_span">{{labelText}}</span>
      <tippy v-if="info" :content="info">
        <i>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <path d="M6.13983 0.166687C2.92324 0.166687 0.306499 2.78342 0.306499 6.00002C0.306499 9.21662 2.92324 11.8334 6.13983 11.8334C9.35643 11.8334 11.9732 9.21662 11.9732 6.00002C11.9732 2.78342 9.35643 0.166687 6.13983 0.166687ZM5.89678 9.4028C5.49428 9.4028 5.16761 9.07613 5.16761 8.67363C5.16761 8.27113 5.49428 7.94447 5.89678 7.94447C6.29928 7.94447 6.62594 8.27113 6.62594 8.67363C6.62594 9.07613 6.29928 9.4028 5.89678 9.4028ZM7.9924 5.08953C7.84219 5.33016 7.55685 5.60044 7.13587 5.90085C6.45483 6.40446 6.47331 6.51627 6.47331 6.97224H5.27893C5.27893 6.61592 5.27115 6.34224 5.46365 6.00926C5.58664 5.79585 5.81219 5.56884 6.13983 5.3287C6.5331 5.04773 6.91518 4.77697 6.91518 4.30544C6.91518 3.86356 6.53699 3.70606 6.09511 3.70606C5.64449 3.70606 5.13067 3.85335 4.55365 4.14794L4.06219 3.16113C5.11074 2.57342 6.76546 2.30752 7.67011 3.04398C8.33414 3.58502 8.33803 4.53634 7.9924 5.08953Z" fill="#1E1A3E"/>
            </g>
          </svg>
        </i>
      </tippy>
    </div>
    <div class="input__container">
      <input
          :value="modelValue"
          @input="(event) => $emit('update:modelValue', event.target.value)"
          :type="passwordFieldType"
          class="input"
          :placeholder="placeholder"
          :style="errorText? {backgroundColor:'var(--error-bg-color)'} :''"
      >
      <i @click="showPassword" v-if="isPassword" class="hide">
        <svg v-if="passwordFieldType==='password'" width="20" height="20" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1398 0.333336C5.97317 0.333336 2.41484 2.925 0.973175 6.58334C2.41484 10.2417 5.97317 12.8333 10.1398 12.8333C14.3065 12.8333 17.8648 10.2417 19.3065 6.58334C17.8648 2.925 14.3065 0.333336 10.1398 0.333336ZM10.1398 10.75C7.83984 10.75 5.97317 8.88334 5.97317 6.58334C5.97317 4.28334 7.83984 2.41667 10.1398 2.41667C12.4398 2.41667 14.3065 4.28334 14.3065 6.58334C14.3065 8.88334 12.4398 10.75 10.1398 10.75ZM10.1398 4.08334C8.75651 4.08334 7.63984 5.2 7.63984 6.58334C7.63984 7.96667 8.75651 9.08334 10.1398 9.08334C11.5232 9.08334 12.6398 7.96667 12.6398 6.58334C12.6398 5.2 11.5232 4.08334 10.1398 4.08334Z" fill="#181C43"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1399 3.41668C12.4399 3.41668 14.3065 5.28335 14.3065 7.58335C14.3065 8.00835 14.2232 8.41668 14.1065 8.80001L16.6565 11.35C17.8149 10.325 18.7315 9.04168 19.3065 7.57501C17.8649 3.92501 14.3065 1.33335 10.1399 1.33335C9.08152 1.33335 8.06485 1.50001 7.10652 1.80835L8.91485 3.61668C9.30652 3.50001 9.71485 3.41668 10.1399 3.41668ZM2.39818 0.633337C2.07318 0.958337 2.07318 1.48334 2.39818 1.80834L4.03984 3.45C2.68984 4.525 1.61484 5.94167 0.973175 7.58334C2.41484 11.2417 5.97318 13.8333 10.1398 13.8333C11.4065 13.8333 12.6148 13.5833 13.7315 13.15L15.9982 15.4167C16.3232 15.7417 16.8482 15.7417 17.1732 15.4167C17.4982 15.0917 17.4982 14.5667 17.1732 14.2417L3.58151 0.633337C3.25651 0.308337 2.72318 0.308337 2.39818 0.633337ZM10.1399 11.75C7.83986 11.75 5.97319 9.88334 5.97319 7.58334C5.97319 6.94167 6.12319 6.33334 6.38152 5.8L7.68986 7.10834C7.66486 7.25834 7.63986 7.41667 7.63986 7.58334C7.63986 8.96667 8.75652 10.0833 10.1399 10.0833C10.3065 10.0833 10.4565 10.0583 10.6149 10.025L11.9232 11.3333C11.3815 11.6 10.7815 11.75 10.1399 11.75ZM12.6149 7.30835C12.4899 6.14168 11.5732 5.23335 10.4149 5.10835L12.6149 7.30835Z" fill="#181C43"/>
        </svg>
      </i>
    </div>
    <span class="label_error">{{errorText}}</span>
  </div>
</template>

<script>
export default {
  props:{
    labelText:{
      type:String
    },
    placeholder:{
      type: String
    },
    type:{
      type:String
    },
    errorText:{
      type:String
    },
    isPassword:{
      type:Boolean
    },
    info:{
      type:String
    },
    modelValue:{
      type: String
    },
  },
  data(){
    return{
      password:'',
      passwordFieldType:this.type
    }
  },
  methods:{
    showPassword(){
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text': 'password';
    }
  }
}
</script>

<style lang="scss" scoped>

.label {
  min-height: 80px;
  display: flex;
  flex-direction: column;
  position: relative;
  &_span{
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-color);
  }

  &_error {
    padding-left: 18px;
    color: var(--error-color);
    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
  }
}

.info__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
}

.input__container {
  width: 100%;
  position: relative;
}

.input {
  height: 36px;
  outline: none;
  padding: 0 18px;
  background-color: var(--input-bg);
  width: 100%;
  border-radius: 50px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color);
  &:hover {
    background-color: var(--input-hover-bg);
  }
  &:focus {
    background-color: var(--input-active-bg);
  }
}

.hide {
  position: absolute;
  right: 15px;
  top: 8px;
}

</style>