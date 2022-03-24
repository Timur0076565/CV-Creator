<template>
  <component
    v-if="activeStageComponent"
    :is="activeStageComponent"
    :personData="personData"
    :theme="theme"
  />
</template>

<script>
import {THEMES_STAGES} from "~/assets/consts/themeStages";

const componentsMap = {
  [THEMES_STAGES.SIDE_LEFT]: () => import('../../../components/pageParts/previewParts/SideBarLeftResume'),
  [THEMES_STAGES.SIDE_RIGHT]: () => import('../../../components/pageParts/previewParts/SideBarRightResume'),
  [THEMES_STAGES.TOP]: () => import('../../../components/pageParts/previewParts/TopBarResume'),
};

export default {
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
    activeStageComponent() {
      return componentsMap[this.activeStage];
    },
  }
}
</script>

<style scoped>

</style>
