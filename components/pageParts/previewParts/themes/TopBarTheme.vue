<template>
  <div class="side-bar-right-them">
    <div class="side-bar">
      <div class="avatar"></div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "TopBarTheme"
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/app_variables';

.side-bar-right-them {
  width: 70px;
  height: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba($grey-main, .2);
  border-radius: 5px;
  background-color: $color-grey;
  overflow: hidden;

  .side-bar {
    background-color: $color-dark-grey;
    height: 30px;

    .avatar {
      border-radius: 50px;
      width: 8px;
      height: 8px;
      background-color: $color-grey;
      margin: 5px auto;
    }
  }
}

</style>
