<template>
  <button
    class="add-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    + <slot />
  </button>
</template>

<script>
export default {
  name: "AddButton"
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.add-button {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 15px;
  width: 100%;
  border-radius: 4px;
  background-color: transparent;
  color: $color-blue;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background-color 0.15s ease 0s;

  &:hover {
    background-color: rgba($color-blue, .1);
  }
}

</style>
