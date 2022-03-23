<template>
  <div class="details-list">
    <div class="title">details:</div>
    <div class="item">{{ details.phone }}</div>
    <div class="item">{{ details.email }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailsList",
  props: {
    details: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

.details-list {
  margin-bottom: 20px;

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .item {
    margin-left: 5px;
  }
}

</style>
