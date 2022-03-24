<template>
  <div class="main-info-wrapper">
    <div class="title"><slot name="title" /></div>

    <slot />
  </div>
</template>

<script>
export default {
  name: "MainInfoWrapper"
}
</script>

<style lang="scss" scoped>
.main-info-wrapper {
  margin-bottom: 20px;

  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
