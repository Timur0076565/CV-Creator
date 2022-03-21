<template>
  <div class="personal-details-part">
    <h2>Personal Details</h2>

    <div class="inputs_wrapper">
      <BaseInput class="base-input" v-model="formData.jobTitle">
        Job Title
      </BaseInput>

      <UploadFile v-model="formData.avatar"/>
    </div>

    <div class="inputs_wrapper">
      <BaseInput class="base-input" v-model="formData.firstName">
        First name
      </BaseInput>

      <BaseInput class="base-input" v-model="formData.lastName">
        Last name
      </BaseInput>
    </div>

    <div class="inputs_wrapper">
      <BaseInput class="base-input" v-model="formData.email">
        E-mail
      </BaseInput>

      <BaseInput class="base-input" v-model="formData.phone">
        Phone
      </BaseInput>
    </div>
  </div>
</template>

<script lang="ts">
import UploadFile from "~/components/base/UploadFile.vue";
import BaseInput from "~/components/base/BaseInput.vue";

export default {
  name: "PersonalDetailsPart",
  components: {BaseInput, UploadFile},
  props: {
    formData: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>

.personal-details-part {
  margin-bottom: 30px;

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
