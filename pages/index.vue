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
      <span v-if="!isDetailsCompleted">Personal details is required</span>
      <span v-else-if="!isEmailCorrect">Email is incorrect</span>
      <span v-else-if="!isPhoneCorrect">Phone number must be 12 characters</span>
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

interface IData {
  selectedTheme: string,
  personData: IPersonalData,
  showWarning: boolean
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
  data(): IData {
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
    isEmailCorrect(): boolean {
      return this.testEmail(this.personData.details.email)
    },
    isPhoneCorrect(): boolean {
      return this.personData.details.phone.length === 19;
    },
    isDetailsCompleted(): boolean {
      return !['', null, undefined].some((nullified) => Object.values(this.personData.details).includes(nullified));
    },
    isInvalidForm(): boolean {
      return [false].some((nullified) => Object.values({details: this.isDetailsCompleted, email: this.isEmailCorrect, phone: this.isPhoneCorrect}).includes(nullified));
    },
  },
  methods: {
    testEmail(value: string): boolean {
      const validationEmail = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/;
      return validationEmail.test(value);
    },
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
    changeSkill(index: number, level: string): void {
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
