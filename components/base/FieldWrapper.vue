<template>
  <div class="field-wrapper">
    <label class="label">
      <slot name="label"/>
    </label>

    <slot name="field"/>
  </div>
</template>

<script>

export default {
  name: 'FieldWrapper',
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.field-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .label {
    font-size: 14px;
    color: $grey-main;
    margin-bottom: 6px;
  }
}

</style>
