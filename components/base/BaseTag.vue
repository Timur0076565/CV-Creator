<template>
  <button
    class="base-tag"
    type="button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="name">
      <slot />
    </span>

    <span class="plus">+</span>
  </button>
</template>

<script>
export default {
  name: "BaseTag"
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.base-tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: $color-grey;
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    background-color: rgba($color-blue, .1);
    transition: background-color 0.15s ease 0s;

    .plus {
      color: $color-blue;
    }
  }

  .name,
  .plus {
    font-size: 16px;
    font-weight: bold;
    color: $main-color;
  }

  .plus {
    font-size: 20px;
    line-height: 0;
    margin-left: 10px;
  }
}

</style>
