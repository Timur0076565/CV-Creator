<template>
  <div class="link-form">
    <h2>{{ title }}</h2>

    <div class="inputs_wrapper">
      <BaseInput
        class="base-input"
        v-model="formData.name"
      >
        Label
      </BaseInput>

      <BaseInput
        class="base-input"
        v-model="formData.href"
        type="url"
        pattern="https://.*"
        placeholder="https://example.com"
      >
        Link
      </BaseInput>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseInput from "~/components/base/BaseInput.vue";
import {firstChartToUpperCase} from "~/helpers/helpers";

export default Vue.extend({
  name: "LinkForm",
  components: {BaseInput},
  props: {
    formData: {
      type: Object,
      required: true
    },
  },
  computed: {
    title(): string {
      return firstChartToUpperCase(this.formData.name) || '(Link label)'
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.link-form {
  border: 1px solid rgba($grey-main, .2);
  padding: 0 20px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  .inputs_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .base-input {
      &:first-of-type {
        margin-right: 30px;
      }
    }
  }
}

@media (max-width: $sm) {
  .link-form {
    .inputs_wrapper {
      flex-direction: column;

      .base-input {
        &:first-of-type {
          margin-right: 0;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>

