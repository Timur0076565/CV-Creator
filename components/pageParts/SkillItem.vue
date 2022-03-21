<template>
  <div class="skill-item">
    <BaseInput
      class="base-input"
      v-model="skill.name"
    >
      Skill
    </BaseInput>

    <SkillLevel class="skill-level" :level="skill.level" @onChangeLevel="changeLevel"/>
  </div>
</template>

<script lang="ts">
import BaseInput from "~/components/base/BaseInput.vue";
import LevelRadioButton from "~/components/base/LevelRadioButton.vue";
import SkillLevel from "~/components/pageParts/SkillLevel.vue";

export default {
  name: "SkillItem",
  components: {SkillLevel, LevelRadioButton, BaseInput},
  props: {
    skill: {
      type: Object,
      required: true,
    }
  },
  methods: {
    changeLevel(level: string): void {
      this.$emit('onChangeLevel', level)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba($grey-main, .2);
  padding: 10px;
  border-radius: 8px;

  .base-input {
    margin-right: 20px;
  }

  .base-input,
  .skill-level {
    flex-basis: 50%;
  }
}

</style>
