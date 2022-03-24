<template>
  <FieldWrapper class="skill-level">
    <template #label>
      <span :class="label">{{ labelLevel }}</span>
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
// import LevelRadioButton from "~/components/base/LevelRadioButton";
// import FieldWrapper from "~/components/base/FieldWrapper.vue";
// import {firstChartToUpperCase} from "~/helpers/helpers";
//
// const labels = {
//   '1': 'novice',
//   '2': 'beginner',
//   '3': 'skillful',
//   '4': 'experienced',
//   '5': 'expert',
// }
// export default {
//   name: "SkillLevel",
//   components: {FieldWrapper, LevelRadioButton},
//   props: {
//     level: {
//       type: String,
//       default: '1',
//     }
//   },
//   data() {
//     return {
//       activeLevel: this.level,
//       levels: ['1','2','3','4','5']
//     }
//   },
//   computed: {
//     label(): string {
//       return labels[this.activeLevel]
//     },
//     labelLevel() {
//       return firstChartToUpperCase(this.label)
//     }
//   },
//   methods: {
//     changeLevel(level: string): void {
//       this.$emit('onChangeLevel', level)
//     }
//   }
// }

import DefineComponent from 'vue'
import LevelRadioButton from "~/components/base/LevelRadioButton.vue";
import FieldWrapper from "~/components/base/FieldWrapper.vue";
import {firstChartToUpperCase} from "~/helpers/helpers";

import Vue from 'vue';

const labels: any = {
  '1': 'novice',
  '2': 'beginner',
  '3': 'skillful',
  '4': 'experienced',
  '5': 'expert',
}

export default Vue.extend({
  name: "SkillLevel",
  components: {FieldWrapper, LevelRadioButton},
  props: {
    level: {
      type: String,
      default: '1'
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
    },
    labelLevel(): string {
      return firstChartToUpperCase(this.label)
    }
  },
  methods: {
    changeLevel(level: string): void {
      this.$emit('onChangeLevel', level)
    }
  }
})
</script>


<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.skill-level {
  .levels {
    display: flex;
    align-items: center;
  }

  .novice {
    color: $color-red;
  }
  .beginner {
    color: $color-orange;
  }
  .skillful {
    color: $color-yellow;
  }
  .experienced {
    color: $color-green;
  }
  .expert {
    color: $color-blue;
  }
}

</style>
