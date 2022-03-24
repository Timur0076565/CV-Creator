<template>
  <div class="side-bar-left-them">
    <div class="side-bar">
      <div class="avatar"></div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "SideBarLeftThem"
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/app_variables';

.side-bar-left-them {
  width: 70px;
  height: 100px;
  display: flex;
  border: 1px solid rgba($grey-main, .2);
  border-radius: 5px;
  background-color: $color-grey;
  overflow: hidden;

  .side-bar {
    flex-basis: 30%;
    background-color: $color-dark-grey;

    .avatar {
      border-radius: 50px;
      width: 8px;
      height: 8px;
      background-color: $color-grey;
      margin: 5px auto;
    }
  }

  .content {
    flex-basis: 70%;
  }
}

</style>
