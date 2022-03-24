<template>
  <div class="links-list">
    <div class="title">links</div>

    <ul class="list">
      <li v-for="(link, index) in links" :key="index">
        <a class="link" :href="link.href">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LinksList",
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.links-list {
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .list {
    margin: 0 0 20px 5px;
    padding: 0;
    list-style: none;

    a {
      color: $white;
    }
  }
}
</style>
