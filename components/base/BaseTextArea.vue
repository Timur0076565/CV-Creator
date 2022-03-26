<template>
  <FieldWrapper class="base-text-area">
    <template #label>
      <slot />
    </template>

    <template #field>
      <quillEditor
        class="quill-editor"
        v-bind="$attrs"
        v-on="$listeners"
        :options="editorOption"
        :value="value"
      >
      </quillEditor>
    </template>
  </FieldWrapper>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import FieldWrapper from "~/components/base/FieldWrapper";
export default {
  name: 'BaseTextArea',
  components: {FieldWrapper, quillEditor},
  data() {
    return {
      editorOption: {
        theme: 'snow'
      }
    }
  },
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
  .quill-editor {
    height: auto;
    min-height: 150px;
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

