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
  font-family: 'Karla', sans-serif;

  .title {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
    width: 250px;
    border-bottom: 2px solid rgba($grey-main, .2);
  }
}

@media (max-width: $sm) {
  .default {
    .title {
      font-size: 35px;
      border-bottom: none;
      margin-bottom: 10px;
    }
  }
}

</style>
