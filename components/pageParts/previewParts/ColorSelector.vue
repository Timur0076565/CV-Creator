<template>
  <div class="color-selector">
    <div class="title">
      Choose background
    </div>

    <div class="colors">
      <ColorRadioButton
        v-for="color in colors"
        :key="color"
        @change="$emit('input', color)"
        :modelValue="selectedColor"
        :value="color"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ColorRadioButton from "~/components/base/ColorRadioButton.vue";

export default Vue.extend({
  name: "ColorSelector",
  components: {ColorRadioButton},
  data() {
    return {
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'grey',
        'brown',
        'violet'
      ],
    }
  },
  props: {
    selectedColor: {
      type: String,
      default: 'green'
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.color-selector {
  width: 100%;
  max-width: 150px;
  border: 1px solid rgba($grey-main, .2);
  border-radius: 5px;
  padding: 10px;

  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .colors {
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 30px 30px;
    grid-template-areas: none;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: $x-sm) {
  .color-selector {
    .colors {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

</style>
