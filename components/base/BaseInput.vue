<template>
  <FieldWrapper class="base-input">
    <template #label>
      <slot />
    </template>

    <template #field>
      <div class="input_wrapper">
        <input
          class="input-field"
          v-bind="$attrs"
          v-on="$listeners"
          @input="onInput"
          @keypress="numericOnly"
          :value="value"
        >
      </div>
    </template>
  </FieldWrapper>
</template>

<script>
import FieldWrapper from "~/components/base/FieldWrapper";

export default {
  name: 'BaseInput',
  components: {FieldWrapper},
  model: {
    prop: 'value',
    event: 'onChange',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    onInput(event) {
      this.$emit('onChange', event.target.value);
    },
    numericOnly(event) {
      if (this.type === 'number') {
        const charCode = event.which || event.keyCode;
        if (charCode < 46 || charCode > 57) {
          event.preventDefault();
        }
      }

      this.$emit('keypress', event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.base-input {
  .input_wrapper {
    position: relative;
    display: flex;
    padding-left: 8px;
    border: none;
    background: $color-grey;
    color: $main-color;
    border-radius: 8px;
    align-items: center;

    .input-field {
      height: 40px;
      padding-left: 10px;
      font-size: 14px;
      line-height: 16px;
      width: 100%;
      background: inherit;
      color: $main-color;
      border: none;
      border-radius: 8px;
      outline: none;

      &::placeholder {
        opacity: 0.3;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:active,
      &:-webkit-autofill:focus {
        background-color: $white !important;
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }

    .right-icon {
      margin-right: 10px;
      cursor: pointer;
    }
  }
}

@media (max-width: $sm) {
  .base-input {
    .input_wrapper {
      .input-field {
        font-size: 16px;
      }
    }
  }
}
</style>

