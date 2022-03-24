<template>
  <div class="default">
    <h1 class="title">CV Creator</h1>

    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/app_variables';

.default {
  display: flex;
  align-items: center;
  flex-direction: column;
  //margin: 30px auto;
  font-family: 'Karla', sans-serif;

  .title {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
  }
}

</style>
