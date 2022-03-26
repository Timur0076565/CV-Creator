<template>
  <label class="theme-radio-button">
    <input
      class="input"
      @change="$emit('change', $event.target.value)"
      :checked="isChecked"
      :value="value"
      type="radio"
    >

    <div class="fake">
      <component
        v-if="activeStageComponent"
        :is="activeStageComponent"
      />
    </div>
  </label>
</template>

<script lang="ts">

import {THEMES_STAGES} from "~/assets/consts/themeStages";

const componentsMap: any = {
  [THEMES_STAGES.SIDE_LEFT]: () => import('../../components/pageParts/previewParts/themes/SideBarLeftThem.vue'),
  [THEMES_STAGES.SIDE_RIGHT]: () => import('../../components/pageParts/previewParts/themes/SideBarRightThem.vue'),
  [THEMES_STAGES.TOP]: () => import('../../components/pageParts/previewParts/themes/TopBarTheme.vue'),
  [THEMES_STAGES.DARK]: () => import('../../components/pageParts/previewParts/themes/DarkTheme.vue'),
};


export default {
  name: "ThemeRadioButton",
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      required: false,
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    isChecked(): boolean {
      return this.modelValue === this.value;
    },
    activeStageComponent(): string {
      return componentsMap[this.value];
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.theme-radio-button {
  box-sizing: border-box;
  .input {
    display: none;
  }

  .fake {
    border-radius: 3px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .input:checked + .fake {
    transform: scale(1.1);
    transition: .3s;
  }
}

</style>
