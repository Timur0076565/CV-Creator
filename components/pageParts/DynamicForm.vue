<template>
  <div class="employment-history-form">
    <h2>{{ title }}</h2>

    <div class="inputs_wrapper">
      <BaseInput
        class="base-input"
        v-model="formData.jobTitle"
      >
        Job Title
      </BaseInput>

      <BaseInput class="base-input">
        Employer
      </BaseInput>
    </div>

    <div class="inputs_wrapper">
      <BaseInput class="base-input">
        Start & End Date
      </BaseInput>

      <BaseInput class="base-input">
        City
      </BaseInput>
    </div>

    <BaseTextArea>
      Description
    </BaseTextArea>
  </div>
</template>

<script>
import BaseInput from "~/components/base/BaseInput";
import BaseTextArea from "~/components/base/BaseTextArea";
import {firstChartToUpperCase} from "~/helpers/helpers";

export default {
  name: "EmploymentHistoryForm",
  components: {BaseTextArea, BaseInput},
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return firstChartToUpperCase(this.formData.jobTitle) || '(Job title)'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.employment-history-form {
  border: 1px solid rgba($grey-main, .2);
  padding: 0 20px 20px;
  border-radius: 4px;
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

