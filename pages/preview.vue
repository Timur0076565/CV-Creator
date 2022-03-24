<template>
  <div class="preview">
    <div class="wrapper">
      <div class="themes">
        <ColorSelector
          v-model="selectedTheme"
          :selectedColor="selectedTheme"
        />

        <ThemeSelector
          v-model="selectedView"
          :activeStage="selectedView"
        />
      </div>

      <CVComponent
        class="cv-file"
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

export default Vue.extend({
  name: "preview",
  components: {
    ThemeSelector,
    CVComponent,
    ColorSelector,
    ColorRadioButton,
    BaseButton,
    SideBarLeftResume
  },
  data() {
    return {
      selectedTheme: 'green',
      selectedView: THEMES_STAGES.SIDE_LEFT,
    }
  },
  computed: {
    personData(): IPersonalData {
      return JSON.parse(localStorage.getItem('form-data') || '{}')
    }
  },
  methods: {
    exportPDF() {
      const doc = new jsPDF('p', 'pt', 'A4');
      const source: any = window.document.querySelector('.cv-file')
      const { details } = this.personData

      doc.html(source, {
        callback: function (doc) {
          doc.save(`${details.firstName} ${details.lastName}.pdf`);
        }
      });
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

  .wrapper {
    display: flex;

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
      }
    }
  }
}

</style>
