<template>
  <div class="skills-list">
    <div class="title">skills</div>

    <ul class="list">
      <li
        v-for="(skill, index) in skills"
        class="skill"
        :key="index"
      >
        <span>{{ skill.name }}</span>
        <span class="level" :style="{ width: `${skill.level * 20}%` }"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillsList",
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.skills-list {
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .list {
    margin: 0 0 20px 5px;
    padding: 0;
    list-style: none;

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
</style>
