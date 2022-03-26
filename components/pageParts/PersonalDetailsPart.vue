<template>
  <div class="personal-details-part" :class="{'bg-error': bgError}">
    <h2>Personal Details<span class="required">*</span></h2>

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
      <BaseInput class="base-input" v-model="formData.email" type="email">
        E-mail
      </BaseInput>

      <BaseInput
        class="base-input"
        v-model="formData.phone"
        v-mask="config"
        placeholder="+ 380 ("
      >
        Phone
      </BaseInput>
    </div>
  </div>
</template>

<script lang="ts">
import UploadFile from "~/components/base/UploadFile.vue";
import BaseInput from "~/components/base/BaseInput.vue";


type configType = {
  mask: string
  masked: boolean
  prefill: boolean
}

export default {
  name: "PersonalDetailsPart",
  components: {BaseInput, UploadFile},
  props: {
    formData: {
      type: Object,
      required: true,
    },
    bgError: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    config(): configType {
      return {
        mask: '+380 (##) ###-##-##',
        masked: true,
        prefill: true,
      };
    },
  },
}
</script>

<style lang="scss" scoped>

.personal-details-part {
  margin-bottom: 30px;

  &.bg-error {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      padding: 20px;
      background-color: rgba(red, 0.3);
      border-radius: 8px;
      z-index: -1;
    }
  }

  .required {
    color: red;
  }

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
