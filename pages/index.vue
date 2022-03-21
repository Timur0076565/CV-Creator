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
        Export PDF
      </BaseButton>
    </div>

    <form
      v-else
      class="form"
      @submit.prevent="onSubmit"
    >
      <PersonalDetailsPart
        :formData="personData.details"
        :bgError="showWarning && isInvalidForm"
      />

      <div
        v-if="showWarning && isInvalidForm"
        class="error"
      >
        Personal details is required
      </div>

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
import IPersonalData, {IEducation, IEmploymentHistory} from "~/types/personalData";
import EducationPart from "~/components/pageParts/EducationPart.vue";
import SkillsPart from "~/components/pageParts/SkillsPart.vue";
import LinksPart from "~/components/pageParts/LinksPart.vue";
import LevelRadioButton from "~/components/base/LevelRadioButton.vue";

type IData = {
  selectedTheme: string,
  themes: Array<string>,
  personData: IPersonalData,
  showPDFFile: boolean,
  showWarning: boolean
}

@Component
export default Vue.extend({
  name: 'IndexPage',
  components: {
    LevelRadioButton,
    LinksPart,
    SkillsPart,
    EducationPart,
    BaseButton,
    CVFile,
    EmploymentHistoryPart,
    PersonalInfoParts,
    PersonalDetailsPart
  },
  data(): IData {
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
      },
      showPDFFile: false,
      showWarning: false,
    }
  },
  beforeMount() {
    this.saveDataFromLocalStirage()
  },
  computed: {
    isInvalidForm() {
      return ['', null, undefined].some((nullified) => Object.values(this.personData.details).includes(nullified));
    },
  },
  methods: {
    addNewEducationPartForm() {
      const newForm: IEducation = {
        school: '',
        degree: '',
        date: '',
        city: '',
        description: '',
      }

      this.personData.education.push(newForm)
    },
    addNewEmploymentHistoryForm() {
      const newForm: IEmploymentHistory = {
        jobTitle: '',
        employer: '',
        date: '',
        city: '',
        description: '',
      }

      this.personData.employmentHistory.push(newForm)
    },
    addNewForm() {
      const newForm: any = {
        name: '',
        href: '',
      }

      this.personData.links.push(newForm)
    },
    addSkill(skill: any) {
      this.personData.skills.push(skill)
    },
    changeSkill(index: number, level: string) {
      this.personData.skills[index].level = level
    },
    onSubmit() {
      if (this.isInvalidForm) {
        this.showWarning = true
        return
      }

      this.showPDFFile = true;

      localStorage.setItem('form-data', JSON.stringify(this.personData))
    },
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
    saveDataFromLocalStirage() {
      if (localStorage.getItem('form-data')) {
        this.personData = JSON.parse(localStorage.getItem('form-data'))
      }
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

  .error {
    color: red;
    text-align: center;
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
