<template>
<div>
    <div class="var-input-group">
      <input 
        class="var-input-group__input"
        :placeholder="placeholder"
        autocomplete="off"
        @input="maskedInput"
        :name="name"
        :type="type"
      >
      <span class="var-input-group__addon">
          <i :class="parseIcon"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VarInput',
  data() {
    return {
      inputValue: ''
    }
  },
  props: {
    icon: {
      type: String,
      default: 'times'
    },
    placeholder: {
      type: String,
      default: 'Login'
    },
    inputVal: {
      type: Function
    },
    name: {
      type: String,
      default: 'input'
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    parseIcon() {
      return 'fa fa-' + this.icon
    }
  },
  methods: {
    maskedInput(e) {
      this.inputValue = e.target.value
      this.$emit('inputVal', this.inputValue, this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.var-input-group {
  position: relative;
  margin-bottom: 15px;
  display: flex;
  width: 100%;
  &__addon {
    padding: 15px 0 15px 19px;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    border: none;
    border-radius: 30px;
    display: flex;
    align-items: center;
    position: absolute;
  }
  &__input {
    width: 300px;
    padding: 15px 15px 15px 40px;
    background-color: transparent;
    border: 1px solid #E3E3E3;
    border-radius: 30px;
    color: rgba(255, 255, 255, 0.8);
    line-height: normal;
    font-size: 0.8571em;
    -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -webkit-box-shadow: none;
    box-shadow: none;
    &:focus {
      border: 1px solid #f96332;
      -webkit-box-shadow: none;
      box-shadow: none;
      outline: 0 !important;
      color: rgba(255, 255, 255, 0.8);
    }
    &::-webkit-input-placeholder  {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
