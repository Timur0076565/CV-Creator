<template>
  <div class="cv-file">
    <div class="details" :class="backgroundColor">
      <PersonData
        :details="personData.details"
      />

      <DetailsList
        :details="personData.details"
      />

      <LinksList
        v-if="personData.links.length"
        :links="personData.links"
      />

      <SkillsList
        v-if="personData.skills.length"
        :skills="personData.skills"
      />
    </div>

    <div class="main-info">
      <MainInfoWrapper v-if="personData.profile">
        <template #title>
          Profile
        </template>

        <div class="profile">{{personData.profile}}</div>
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
          <template #description>{{ emp.description }}</template>
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
          <template #description>{{ emp.description }}</template>
        </CVInfoBlock>
      </MainInfoWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import CVInfoBlock from "~/components/pageParts/cvFileParts/CVInfoBlock.vue";
import SkillsList from "~/components/pageParts/cvFileParts/SkillsList.vue";
import LinksList from "~/components/pageParts/cvFileParts/LinksList.vue";
import DetailsList from "~/components/pageParts/cvFileParts/DetailsList.vue";
import PersonData from "~/components/pageParts/cvFileParts/PersonData.vue";
import MainInfoWrapper from "~/components/pageParts/cvFileParts/MainInfoWrapper.vue";

export default {
  name: "CVFile",
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
      const colors = {
        red: 'red',
        orange: 'orange',
        yellow: 'yellow',
        green: 'green',
        blue: 'blue',
      }

      return colors[this.theme]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.cv-file {
  display: flex;
  overflow: hidden;
  //height: 877px;
  //max-width: 620px;
  height: 842px;
  max-width: 600px;
  margin: 0 auto;

  .details {
    padding: 30px;
    color: $white;
    flex-basis: 30%;

    &.red {
      background-color: red;
    }
    &.orange {
      background-color: orange;
    }
    &.yellow {
      background-color: yellow;
    }
    &.green {
      background-color: $color-green;
    }
    &.blue {
      background-color: $color-blue;
    }
  }

  .main-info {
    padding: 30px;
    background-color: $color-grey;
    flex-basis: 70%;
  }
}

</style>
