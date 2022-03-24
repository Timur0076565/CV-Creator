<template>
  <div class="side-bar-right-them">
    <div class="content">
      <div class="avatar"></div>
    </div>
    <div class="side-bar"></div>
  </div>
</template>

<script>
export default {
  name: "SideBarRightThem"
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/app_variables';

.side-bar-right-them {
  width: 70px;
  height: 100px;
  display: flex;
  border: 1px solid rgba($grey-main, .2);
  border-radius: 5px;
  background-color: $color-grey;
  overflow: hidden;

  .content {
    flex-basis: 65%;

    .avatar {
      border-radius: 50px;
      width: 8px;
      height: 8px;
      background-color: $color-dark-grey;
      margin: 5px auto;
    }
  }

  .side-bar {
    flex-basis: 35%;
    background-color: $color-dark-grey;
  }
}

</style>
