<template>
  <div class="theme-selector">
    <div class="title">
      Choose theme
    </div>

    <div class="themes">
      <ThemeRadioButton
        v-for="theme in themes"
        :key="theme"
        @change="$emit('input', theme)"
        :modelValue="activeStage"
        :value="theme"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ThemeRadioButton from "~/components/base/ThemeRadioButton.vue";
import {THEMES_STAGES} from "~/assets/consts/themeStages";

export default Vue.extend({
  name: "ThemeSelector",
  components: {ThemeRadioButton},
  data() {
    return {
      themes: [
        THEMES_STAGES.SIDE_LEFT,
        THEMES_STAGES.SIDE_RIGHT,
        THEMES_STAGES.TOP,
        THEMES_STAGES.DARK,
      ],
    }
  },
  props: {
    activeStage: {
      type: String,
      default: THEMES_STAGES.SIDE_LEFT
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.theme-selector {
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

  .themes {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
