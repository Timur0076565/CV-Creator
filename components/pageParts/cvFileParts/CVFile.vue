<template>
  <div class="cv-file">
    <div class="details" :class="backgroundColor">
      <div class="person-data">
        <img
          class="avatar"
          :src="personData.details.avatar"
          alt="Avatar"
        >

        <h2 class="title">{{ name }}</h2>

        <div class="job"> {{ personData.details.jobTitle }} </div>
      </div>

      <div class="details-title">details</div>
      <div class="phone">{{ personData.details.phone }}</div>
      <div class="email">{{ personData.details.email }}</div>

      <div class="details-title">links</div>

      <ul class="list">
        <li v-for="(link, index) in personData.links" :key="index">
          <a class="link" :href="link.href">{{link.name}}</a>
        </li>
      </ul>

      <div class="details-title">skills</div>
      <ul class="list">
        <li
          v-for="(skill, index) in personData.skills"
          class="skill"
          :key="index"
        >
          <span>{{ skill.name }}</span>
          <span class="level" :style="{ width: `${skill.level * 20}%` }"/>
        </li>
      </ul>
    </div>

    <div class="main-info">
      <div class="main-info-title">Profile</div>
      <div class="profile">{{personData.profile}}</div>

      <div class="main-info-title">Employment History</div>
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

      <div class="main-info-title">Education</div>
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
    </div>
  </div>
</template>

<script lang="ts">
import CVInfoBlock from "~/components/pageParts/cvFileParts/CVInfoBlock.vue";
export default {
  name: "CVFile",
  components: {CVInfoBlock},
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
    name(): string {
      return `${this.personData.details.firstName}, ${this.personData.details.lastName}`
    },
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

    .person-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;

      .avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }

      .title {
        margin: 0;
      }

      .job {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:before {
          content: '----------------';
        }
      }
    }

    .details-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .email,
    .list {
      margin: 0 0 20px;
      padding: 0;
      list-style: none;

      a {
        color: $white;
      }

      .skill {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        font-size: 14px;

        .level {
          height: 4px;
          background-color: $white;
          border-radius: 2px;
          margin-top: 3px;
        }
      }
    }
  }

  .main-info {
    padding: 30px;
    background-color: $color-grey;
    flex-basis: 70%;

    .main-info-title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .profile,
    .info-block {
      margin-bottom: 20px;
    }
  }
}

</style>
