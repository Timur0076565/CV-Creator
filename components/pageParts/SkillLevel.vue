<template>
  <FieldWrapper class="skill-level">
    <template #label>
      {{ label }}
    </template>

    <template #field>
      <div class="levels">
        <LevelRadioButton
          v-for="level in levels"
          :key="level"
          v-model="activeLevel"
          @change="changeLevel"
          :value="level"
        />
      </div>
    </template>
  </FieldWrapper>
</template>

<script lang="ts">
import LevelRadioButton from "~/components/base/LevelRadioButton";
import FieldWrapper from "~/components/base/FieldWrapper.vue";

const labels = {
  '1': 'Novice',
  '2': 'Beginner',
  '3': 'Skillful',
  '4': 'Experienced',
  '5': 'Expert',
}
export default {
  name: "SkillLevel",
  components: {FieldWrapper, LevelRadioButton},
  props: {
    level: {
      type: String,
      default: '1',
    }
  },
  data() {
    return {
      activeLevel: this.level,
      levels: ['1','2','3','4','5']
    }
  },
  computed: {
    label(): string {
      return labels[this.activeLevel]
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

.skill-level {
  .levels {
    display: flex;
    align-items: center;
  }
}

</style>
