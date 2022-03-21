<template>
  <div class="personal-info-part">
    <h2>Personal info</h2>

    <BaseTextArea
      class="base-text-area"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import BaseTextArea from "~/components/base/BaseTextArea";
export default {
  name: "PersonalInfoParts",
  components: {BaseTextArea}
}
</script>

<style lang="scss" scoped>
.personal-info-part {
  display: flex;
  flex-direction: column;
}
</style>
