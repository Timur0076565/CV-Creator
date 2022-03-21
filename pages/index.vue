<template>
  <div class="cv-creator">
    <h1 class="title">CV Creator</h1>

    <div
      v-if="showPDFFile"
      class="cv-file_wrapper"
    >
<!--      <div class="themes">-->
<!--        <LevelRadioButton-->
<!--          v-for="theme in themes"-->
<!--          :key="theme"-->
<!--          v-model="selectedTheme"-->
<!--          :value="theme"-->
<!--        />-->
<!--      </div>-->

      <CVFile
        class="cv-file"
        :personData="personData"
        :theme="selectedTheme"
      ></CVFile>

      <BaseButton class="base-button" @click="exportPDF">
        exportPDF
      </BaseButton>
    </div>

    <form
      v-else
      class="form"
      @submit.prevent="onSubmit"
    >
      <PersonalDetailsPart :formData="personData.details"/>

      <PersonalInfoParts v-model="personData.profile"/>

      <EmploymentHistoryPart @onAddNewForm="addNewEmploymentHistoryForm" :formData="personData.employmentHistory"/>

      <EducationPart @onAddNewForm="addNewEducationPartForm" :formData="personData.education"/>

      <LinksPart
        @onAddNewForm="addNewForm"
        :formData="personData.links"
      />

      <SkillsPart
        :skills="personData.skills"
        @onAddSkill="addSkill"
        @onChangeSkill="changeSkill"
      />

      <BaseButton class="base-button" type="submit">
        Create CV
      </BaseButton>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { jsPDF } from "jspdf";
import PersonalDetailsPart from "~/components/pageParts/PersonalDetailsPart.vue";
import PersonalInfoParts from "~/components/pageParts/PersonalInfoParts.vue";
import EmploymentHistoryPart from "~/components/pageParts/EmploymentHistoryPart.vue";
import CVFile from "~/components/pageParts/cvFileParts/CVFile.vue";
import BaseButton from "~/components/base/BaseButton.vue";
import IPersonalData from "~/types/personalData";
import EducationPart from "~/components/pageParts/EducationPart.vue";
import SkillsPart from "~/components/pageParts/SkillsPart.vue";
import LinksPart from "~/components/pageParts/LinksPart.vue";
import LevelRadioButton from "~/components/base/LevelRadioButton.vue";

@Component

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LevelRadioButton,
    LinksPart,
    SkillsPart,
    EducationPart, BaseButton, CVFile, EmploymentHistoryPart, PersonalInfoParts, PersonalDetailsPart},
  data() {
    return {
      selectedTheme: 'green',
      themes: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
      ],
      personData: {
        details: {
          avatar: '',
          jobTitle: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        },
        links: [],
        skills: [],
        profile: '',
        employmentHistory: [],
        education: [],
      } as IPersonalData,
      showPDFFile: false as boolean,
    }
  },
  methods: {
    addNewEducationPartForm(): void {
      const newForm: any = {
        school: '',
        degree: '',
        date: '',
        city: '',
        description: '',
      }

      this.personData.education.push(newForm)
    },
    addNewEmploymentHistoryForm(): void {
      const newForm: any = {
        jobTitle: '',
        employer: '',
        date: '',
        city: '',
        description: '',
      }

      this.personData.employmentHistory.push(newForm)
    },
    addNewForm(): void {
      const newForm: any = {
        name: '',
        href: '',
      }

      this.personData.links.push(newForm)
    },
    addSkill(skill: any): void {
      this.personData.skills.push(skill)
    },
    changeSkill(index: number, level: string): void {
      this.personData.skills[index].level = level
    },
    onSubmit(): void {
      this.showPDFFile = true;
    },
    exportPDF(): void {
      const doc = new jsPDF('p', 'pt', 'A4');
      const source: any = window.document.querySelector('.cv-file')
      const { details } = this.personData

      doc.html(source, {
        callback: function (doc) {
          doc.save(`${details.firstName} ${details.lastName}.pdf`);
        }
      });
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/app_variables';

.cv-creator {
  margin: 30px auto;
  max-width: $md;
  font-family: 'Karla';

  .themes {
    display: flex;
  }

  .title {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
  }

  .base-button {
    max-width: 200px;
    margin: 20px auto 0;
  }
}
</style>
