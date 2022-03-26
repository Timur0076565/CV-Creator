<template>
  <div class="dark-theme">
    <div class="side-bar">
      <div class="avatar"></div>
    </div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "DarkTheme"
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/app_variables';

.dark-theme {
  width: 70px;
  height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: $color-dark-grey;
  overflow: hidden;

  .side-bar,
  .content,
  .footer {
    height: 35%;
    border-bottom: 1px solid rgba($grey-main, .2);

    .avatar {
      border-radius: 50px;
      width: 12px;
      height: 12px;
      background-color: $color-grey;
      margin: 5px;
    }
  }

  .content {
    height: 55%;
  }

  .footer {
    height: 30%;
  }
}

</style>
