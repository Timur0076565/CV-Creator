<template>
  <div class="cv-file">
    <div class="details">
      <h2>{{ personData.name }}</h2>

      <div class="details-title">details</div>
      <div class="phone">{{ personData.phone }}</div>
      <div class="email">{{ personData.email }}</div>

      <div class="details-title">links</div>

      <ul>
        <li v-for="link in personData.links">
          <a class="link" :href="link.href">{{link.name}}</a>
        </li>
      </ul>

      <div class="details-title">skills</div>
      <ul>
        <li v-for="skill in personData.skills">
          <span>{{ skill.name }}</span>
          <span>{{ skill.level }}</span>
        </li>
      </ul>
    </div>

    <div class="main-info">
      <div class="main-info-title">Profile</div>
      <div class="profile">{{personData.profile}}</div>

      <div class="main-info-title">Employment History</div>
      <div class="info_block">
        <div class="info_block-title">
          {{ personData.employmentHistory.info }}
        </div>

        <div class="info_block-date">
          {{ personData.employmentHistory.date }}
        </div>

        <div class="info_block-description">
          {{ personData.employmentHistory.description }}
        </div>
      </div>

      <div class="main-info-title">Education</div>
      <div class="info_block">
        <div class="info_block-title">
          {{ personData.education.info }}
        </div>

        <div class="info_block-date">
          {{ personData.education.date }}
        </div>

        <div class="info_block-description">
          {{ personData.education.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cvFile",
  props: {
    personData: Object,
    required: true,
  }
}
</script>

<style scoped>

</style>
