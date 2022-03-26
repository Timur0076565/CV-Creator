<template>
  <component
    v-if="activeStageComponent"
    :is="activeStageComponent"
    :personData="personData"
    :theme="theme"
  />
</template>

<script lang="ts">
import {THEMES_STAGES} from "~/assets/consts/themeStages";
import Vue from "vue";

const componentsMap = {
  [THEMES_STAGES.SIDE_LEFT]: () => import('../../../components/pageParts/previewParts/SideBarLeftResume.vue'),
  [THEMES_STAGES.SIDE_RIGHT]: () => import('../../../components/pageParts/previewParts/SideBarRightResume.vue'),
  [THEMES_STAGES.TOP]: () => import('../../../components/pageParts/previewParts/TopBarResume.vue'),
  [THEMES_STAGES.DARK]: () => import('../../../components/pageParts/previewParts/DarkResume.vue'),
};

export default Vue.extend({
  name: "CVComponent",
  props: {
    personData: {
      type: Object,
      required: true,
    },
    theme: {
      type: String,
      default: 'green'
    },
    activeStage: {
      type: String,
      default: THEMES_STAGES.SIDE_LEFT
    }
  },
  computed: {
    activeStageComponent(): any {
      return componentsMap[this.activeStage];
    },
  }
})
</script>
