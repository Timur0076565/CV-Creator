<template>
  <div class="cv-info_block">
    <div class="info_block-title">
      <slot name="info"/>
    </div>

    <div class="info_block-date">
      <slot name="date"/>
    </div>

    <div class="info_block-description">
      <slot name="description"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVInfoBlock",
}
</script>

<style scoped>

</style>
