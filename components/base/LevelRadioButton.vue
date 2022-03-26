<template>
  <label class="level-radio-button">
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

export default Vue.extend({
  name: "LevelRadioButton",
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
      const colors: any = {
        '1': 'red',
        '2': 'orange',
        '3': 'yellow',
        '4': 'green',
        '5': 'blue',
      }

      return colors[this.modelValue]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.level-radio-button {
  width: 100%;

  .input {
    display: none;
  }

  .fake {
    height: 40px;
    border-radius: 3px;
    background-color: rgba($color-blue, .1);
    cursor: pointer;
    transition: background-color 0.15s ease 0s;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 30px;
      background-color: rgba($color-blue, .3);
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &:first-of-type {
    .fake {
      &:after {
        display: none;
      }
    }
  }

  .input:checked + .fake {
    &.red {
      background-color: rgba($color-red, .5);
    }
    &.orange {
      background-color: rgba($color-orange, .5);
    }
    &.yellow {
      background-color: rgba($color-yellow, .5);
    }
    &.green {
      background-color: rgba($color-green, .5);
    }
    &.blue {
      background-color: rgba($color-blue, .5);
    }
  }
}

</style>
