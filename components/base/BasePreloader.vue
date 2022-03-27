<template>
  <div class="base-preloader">
    <svg class="circular" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterLimit="10" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "BasePreloader"
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.base-preloader {
  width: 100vw;
  height: 100%;
  top: 0;
  position: fixed;
  background-color: $white;

  .circular {
    animation: rotate 2s linear infinite;
    height: 80px;
    transform-origin: center center;
    width: 80px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    .path {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
      stroke-linecap: round;
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 899, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100% {
  }
  0% {
    stroke: red;
  }
  40% {
    stroke: blue;
  }
  66% {
    stroke: green;
  }
  80% {
  }
  90% {
    stroke: yellow;
  }
}

</style>
