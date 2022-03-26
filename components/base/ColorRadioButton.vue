<template>
  <label class="color-radio-button">
    <input
      class="input"
      @change="$emit('change', $event.target.value)"
      :checked="isChecked"
      :value="value"
      type="radio"
    >

    <div
      class="fake"
      :class="currentColor"
    />
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import {COLORS} from "~/assets/consts/colors";

export default Vue.extend({
  name: "ColorRadioButton",
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      required: false,
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    isChecked(): boolean {
      return this.modelValue === this.value;
    },
    currentColor(): string {
      return COLORS[this.value]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.color-radio-button {
  width: 100%;

  .input {
    display: none;
  }

  .fake {
    height: 30px;
    border-radius: 3px;
    background-color: rgba($color-blue, .1);
    cursor: pointer;
    transition: background-color 0.15s ease 0s;
    box-sizing: border-box;

    &.red {
      background-color:  $color-red;
    }
    &.orange {
      background-color:  $color-orange;
    }
    &.yellow {
      background-color:  $color-yellow;
    }
    &.green {
      background-color:  $color-green;
    }
    &.blue {
      background-color:  $color-blue;
    }
    &.violet {
      background-color:  $color-violet;
    }
    &.brown {
      background-color:  $color-brown;
    }
    &.grey {
      background-color: $color-dark-grey;
    }
  }

  .input:checked + .fake {
    transform: scale(1.1);
    transition: .3s;
  }
}

</style>
