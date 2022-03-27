<template>
  <div class="preview">
    <div class="wrapper">
      <div class="themes">
        <ColorSelector
          class="color-selector"
          v-model="selectedTheme"
          :selectedColor="selectedTheme"
        />

        <ThemeSelector
          class="theme-selector"
          v-model="selectedView"
          :activeStage="selectedView"
        />
      </div>

      <CVComponent
        class="cv-file-preview"
        :personData="personData"
        :theme="selectedTheme"
        :activeStage="selectedView"
      ></CVComponent>

      <BasePreloader v-if="showWhenExport"/>

      <CVComponent
        v-show="showWhenExport"
        class="cv-file-export"
        :personData="personData"
        :theme="selectedTheme"
        :activeStage="selectedView"
      ></CVComponent>
    </div>

    <div class="buttons_wrapper">
      <BaseButton class="base-button" @click="createNewCV" variant="grey">
        Create new CV
      </BaseButton>

      <BaseButton class="base-button" @click="exportPDF">
        Export PDF
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBarLeftResume from "~/components/pageParts/previewParts/SideBarLeftResume.vue";
import BaseButton from "~/components/base/BaseButton.vue";
import {jsPDF} from "jspdf";
import IPersonalData from "~/types/personalData";
import ColorRadioButton from "~/components/base/ColorRadioButton.vue";
import ColorSelector from "~/components/pageParts/previewParts/ColorSelector.vue";
import CVComponent from "~/components/pageParts/previewParts/CVComponent.vue";
import ThemeSelector from "~/components/pageParts/previewParts/ThemeSelector.vue";
import {THEMES_STAGES} from "~/assets/consts/themeStages";
import BasePreloader from "~/components/base/BasePreloader.vue";

interface IData {
  selectedTheme: string,
  selectedView: any,
  showWhenExport: boolean,
}

export default Vue.extend({
  name: "preview",
  components: {
    BasePreloader,
    ThemeSelector,
    CVComponent,
    ColorSelector,
    ColorRadioButton,
    BaseButton,
    SideBarLeftResume
  },
  data(): IData {
    return {
      selectedTheme: 'green',
      selectedView: THEMES_STAGES.SIDE_LEFT,
      showWhenExport: false,
    }
  },
  computed: {
    personData(): IPersonalData {
      return JSON.parse(localStorage.getItem('form-data') || '{}')
    }
  },
  methods: {
    async exportPDF() {
      const doc = new jsPDF('p', 'pt', 'A4');
      const source: any = window.document.querySelector('.cv-file-export')
      const { details } = this.personData

      this.showWhenExport = true

      await doc.html(source, {
        callback: function (doc) {
          doc.save(`${details.firstName} ${details.lastName}.pdf`);
        }
      })

      this.showWhenExport = false
    },
    createNewCV() {
      localStorage.removeItem('form-data')
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/app_variables';

.preview {
  padding: 0 20px;
  width: 100%;

  .cv-file-export {
    width: 600px;
    height: 840px;
    position: absolute;
    visibility: hidden;
  }

  .wrapper {
    display: flex;
    overflow: hidden;
    position: relative;

    .themes {
      position: absolute;
    }
  }

  .buttons_wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .base-button {
      max-width: 200px;
      margin: 0;

      &:first-of-type {
        margin-right: 15px;
      }
    }
  }
}

@media (max-width: $lg) {
  .preview {
    .wrapper {
      flex-direction: column;

      .themes {
        position: static;
        margin-bottom: 20px;
        display: flex;
      }
    }
  }
}

@media (max-width: $sm) {
  .preview {
    .wrapper {
      .themes {
        justify-content: space-between;
      }
    }
  }
}

</style>
