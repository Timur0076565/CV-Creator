<template>
  <form
    class="cv-creator"
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
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalDetailsPart from "~/components/pageParts/PersonalDetailsPart.vue";
import PersonalInfoParts from "~/components/pageParts/PersonalInfoParts.vue";
import EmploymentHistoryPart from "~/components/pageParts/EmploymentHistoryPart.vue";
import CVFile from "~/components/pageParts/previewParts/SideBarLeftResume.vue";
import BaseButton from "~/components/base/BaseButton.vue";
import IPersonalData, {IEducation, IEmploymentHistory, ILinks} from "~/types/personalData";
import EducationPart from "~/components/pageParts/EducationPart.vue";
import SkillsPart from "~/components/pageParts/SkillsPart.vue";
import LinksPart from "~/components/pageParts/LinksPart.vue";
import LevelRadioButton from "~/components/base/LevelRadioButton.vue";

declare module 'vue/types/vue' {
  interface Vue {
    selectedTheme: string,
    themes: Array<string>,
    personData: IPersonalData,
    showWarning: boolean
  }
}


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
  data() {
    return {
      selectedTheme: 'green',
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
      showWarning: false,
    }
  },
  computed: {
    isInvalidForm(): boolean {
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
      const newForm: ILinks = {
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

      localStorage.setItem('form-data', JSON.stringify(this.personData))

      this.$router.push({name: 'preview'})
    },
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/app_variables';

.cv-creator {
  max-width: $md;

  .error {
    color: red;
    text-align: center;
  }

  .base-button {
    max-width: 200px;
    margin: 20px auto 0;
  }
}
</style>
