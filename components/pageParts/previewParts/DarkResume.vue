<template>
  <div class="dark-resume" :class="backgroundColor">
    <div class="wrapper">
      <div class="details">
        <PersonData
          class="personal-data"
          :details="personData.details"
          :dark="true"
        />
      </div>

      <div class="main-info">
        <MainInfoWrapper v-if="personData.profile">
          <template #title>
            Profile
          </template>

          <div class="profile" v-html="personData.profile"/>
        </MainInfoWrapper>

        <MainInfoWrapper v-if="personData.employmentHistory.length">
          <template #title>
            Employment History
          </template>

          <CVInfoBlock
            v-for="emp in personData.employmentHistory"
            class="info-block"
          >
            <template #info>
              {{ info(emp.jobTitle, emp.employer, emp.city) }}
            </template>
            <template #date>{{ emp.date }}</template>
            <template #description>
              <div v-html="emp.description"/>
            </template>
          </CVInfoBlock>
        </MainInfoWrapper>

        <MainInfoWrapper v-if="personData.education.length">
          <template #title>
            Education
          </template>

          <CVInfoBlock
            v-for="emp in personData.education"
            class="info-block"
          >
            <template #info>
              {{ info(emp.degree, emp.school, emp.city) }}
            </template>
            <template #date>{{ emp.date }}</template>
            <template #description>
              <div v-html="emp.description"/>
            </template>
          </CVInfoBlock>
        </MainInfoWrapper>

        <SkillsList
          class="skills"
          v-if="personData.skills.length"
          :skills="personData.skills"
        />
      </div>

      <div class="footer">
        <DetailsList
          :details="personData.details"
        />

        <LinksList
          v-if="personData.links.length"
          :links="personData.links"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CVInfoBlock from "~/components/pageParts/previewParts/CVInfoBlock.vue";
import SkillsList from "~/components/pageParts/previewParts/SkillsList.vue";
import LinksList from "~/components/pageParts/previewParts/LinksList.vue";
import DetailsList from "~/components/pageParts/previewParts/DetailsList.vue";
import PersonData from "~/components/pageParts/previewParts/PersonData.vue";
import MainInfoWrapper from "~/components/pageParts/previewParts/MainInfoWrapper.vue";
import { COLORS } from "~/assets/consts/colors";

export default Vue.extend({
  name: "TopBarResume",
  components: {MainInfoWrapper, PersonData, DetailsList, LinksList, SkillsList, CVInfoBlock},
  props: {
    personData: {
      type: Object,
      required: true,
    },
    theme: {
      type: String,
      default: 'green'
    }
  },
  computed: {
    info(): Function {
      return (firstPart: string, secondPart: string, city: string): string => {
        return `${firstPart}, ${secondPart}, ${city}`
      }
    },
    backgroundColor(): string {
      return COLORS[this.theme]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.dark-resume {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  color: $white;
  padding: 15px;
  box-sizing: border-box;

  &.red {
    background-color:  $color-red;
  }
  &.orange {
    background-color:  $color-orange;
  }
  &.yellow {
    background-color:  $color-yellow;
  }
  &.green {
    background-color:  $color-green;
  }
  &.blue {
    background-color:  $color-blue;
  }
  &.violet {
    background-color:  $color-violet;
  }
  &.brown {
    background-color:  $color-brown;
  }
  &.grey {
    background-color: $color-dark-grey;
  }

  .wrapper {
    border: 1px solid $white;
    border-radius: 8px;
    min-height: 840px;

    .details {
      padding: 20px;
      color: $white;
      height: 140px;
      border-bottom: 1px solid $white;
    }

    .main-info {
      padding: 20px;
      border-bottom: 1px solid $white;

      .skills {
        max-width: 280px;
      }
    }

    .footer {
      padding: 20px;
    }
  }
}

</style>
