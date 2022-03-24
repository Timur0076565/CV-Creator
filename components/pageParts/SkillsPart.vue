<template>
  <div class="skills-part">
    <h2>Skills</h2>

    <div class="tags">
      <BaseTag
        v-for="(skill, index) in skillsVariants"
        class="base-tag"
        :key="index"
        @click.once="addSkill(skill)"
      >
        {{ skill.name }}
      </BaseTag>
    </div>

    <SkillItem
      v-for="(skill, index) in skills"
      class="skill-item"
      :key="index"
      :skill="skill"
      @onChangeLevel="(level) => changeLevel(index, level)"
    />

    <AddButton @click="createNewSkill">
      Add one more skill
    </AddButton>
  </div>
</template>

<script lang="ts">
import BaseTag from "~/components/base/BaseTag.vue";
import SkillItem from "~/components/pageParts/SkillItem.vue";
import ISkills from "~/types/skills";
import AddButton from "~/components/base/AddButton.vue";
import Vue from "vue";

type IData = {
  skillsVariants: {
    name: string
    level: string
  }[]
}

export default Vue.extend({
  name: "SkillsPart",
  components: {AddButton, SkillItem, BaseTag},
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  },
  data(): IData {
    return {
      skillsVariants: [
        {
          name: 'JavaScript',
          level: '1',
        },
        {
          name: 'TypeScript',
          level: '1',
        },
        {
          name: 'Vue',
          level: '1',
        },
        {
          name: 'Nuxt',
          level: '1',
        },
        {
          name: 'React',
          level: '1',
        },
        {
          name: 'Redux',
          level: '1',
        },
        {
          name: 'Git',
          level: '1',
        },
        {
          name: 'Node',
          level: '1',
        },
        {
          name: 'HTML',
          level: '1',
        },
        {
          name: 'CSS',
          level: '1',
        },
        {
          name: 'SASS',
          level: '1',
        },
        {
          name: 'LESS',
          level: '1',
        }
      ],
    }
  },
  methods: {
    addSkill(skill: ISkills): void {
      this.$emit('onAddSkill', skill)
    },
    changeLevel(index: number, level: string): void {
      this.$emit('onChangeSkill', index, level)
    },
    createNewSkill(): void {
      // const hasTheSameProperty = this.skillsVariants.some(item => item.name === skill)
      //
      // if (hasTheSameProperty) {
      //   return
      // }
      //
      // const newSkill: ISkills = {
      //   name: skill,
      //   level: '1'
      // }
      //
      // this.skillsVariants.push(newSkill)
      const newSkill: ISkills = {
        name: '',
        level: '1',
      }

      this.$emit('onAddSkill', newSkill)
    }
  }
})
</script>

<style lang="scss" scoped>

.skills-part {
  .tags {
    display: flex;
    flex-wrap: wrap;

    .base-tag {
      margin: 0 12px 12px 0;
      white-space: nowrap;
    }
  }

  .skill-item {
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 15px;
    }
  }
}

</style>
