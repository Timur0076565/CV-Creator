<template>
  <button
    class="base-button"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
    :class="dynamicClass"
    type="button"
  >
    <slot />
  </button>
</template>

<script>

export const BASE_BUTTON_VARIANTS = {
  grey: 'grey',
  disabled: 'disabled',
};

export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    dynamicClass() {
      return BASE_BUTTON_VARIANTS[this.variant] ?? '';
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.base-button {
  display: block;
  justify-content: center;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  transition: .3s;
  color: $white;
  background-color: $color-blue;
  cursor: pointer;
  align-items: center;
  font-size: 18px;
  padding: 12px;
  outline: none;
  border: none;

  &.grey {
    background-color: $color-grey;
    color: $main-color;
  }

  &.disabled {
    opacity: .5;
    border: none;
    pointer-events: none;
  }
}

</style>
