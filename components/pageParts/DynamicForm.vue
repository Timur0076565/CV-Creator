<template>
  <div class="employment-history-form">
    <h2>{{ title }}</h2>

    <div class="inputs_wrapper">
      <BaseInput
        class="base-input"
        v-model="formData[titlesList[0][0]]"
      >
        {{ titlesList[0][1] }}
      </BaseInput>

      <BaseInput
        class="base-input"
        v-model="formData[titlesList[1][0]]"
      >
        {{ titlesList[1][1] }}
      </BaseInput>
    </div>

    <div class="inputs_wrapper">
      <BaseInput
        class="base-input"
        v-model="formData[titlesList[2][0]]"
      >
        {{ titlesList[2][1] }}
      </BaseInput>

      <BaseInput
        class="base-input"
        v-model="formData[titlesList[3][0]]"
      >
        {{ titlesList[3][1] }}
      </BaseInput>
    </div>

    <BaseTextArea v-model="formData[titlesList[4][0]]">
      {{ titlesList[4][1] }}
    </BaseTextArea>
  </div>
</template>

<script lang="ts">
import BaseInput from "~/components/base/BaseInput";
import BaseTextArea from "~/components/base/BaseTextArea";
import {firstChartToUpperCase} from "~/helpers/helpers";

export default {
  name: "DynamicForm",
  components: {BaseTextArea, BaseInput},
  props: {
    formData: {
      type: Object,
      required: true
    },
    titles: {
      type: Object,
      required: true
    },
  },
  computed: {
    title(): string {
      return firstChartToUpperCase(this.formData[this.titlesList[0][0]]) || `(${this.titlesList[0][1]})`
    },
    titlesList(): any {
      return Object.entries(this.titles)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.employment-history-form {
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
</style>

