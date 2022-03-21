<template>
  <button
    class="base-button"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
    :class="{disabled}"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
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

  &.disabled {
    opacity: .5;
    border: none;
    pointer-events: none;
  }
}

</style>
