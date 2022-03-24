<template>
  <div class="cv-info_block">
    <div class="title">
      <slot name="info"/>
    </div>

    <div class="date">
      <slot name="date"/>
    </div>

    <div class="description">
      <slot name="description"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVInfoBlock",
}
</script>

<style lang="scss" scoped>

.cv-info_block {
  .title {
    font-weight: bold;
  }

  .date {
    opacity: .8;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    margin: 2px 0;
  }
}

</style>
