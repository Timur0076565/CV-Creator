<template>
  <FieldWrapper class="base-text-area">
    <template #label>
      <slot />
    </template>

    <template #field>
      <textarea
        class="base-text-area-field"
        @input="onChange"
        :placeholder="placeholder"
        :value="value"
      />
    </template>
  </FieldWrapper>
</template>

<script>

import FieldWrapper from "~/components/base/FieldWrapper";
export default {
  name: 'BaseTextArea',
  components: {FieldWrapper},
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.base-text-area {
  .base-text-area-field {
    height: auto;
    min-height: 150px;
    padding: 16px;
    border: none;
    background: $color-grey;
    color: $main-color;
    border-radius: 8px;
    resize: none;
    outline: none;
  }
}

@media (max-width: $sm) {
  .base-text-area {
    .base-text-area-field {
      font-size: 16px;
    }
  }
}
</style>

