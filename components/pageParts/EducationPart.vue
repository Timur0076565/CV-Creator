<template>
  <div class="employment-history-part">
    <h2>Education</h2>

    <DynamicForm
      v-for="(form, formIndex) in formData"
      :key="formIndex"
      :formData="form"
      :titles="titles"
    />

    <AddButton @click="addNewForm" type="button">
      Add one more education
    </AddButton>
  </div>
</template>

<script>
import DynamicForm from "~/components/pageParts/DynamicForm";
import AddButton from "~/components/base/AddButton";

export default {
  name: "EducationPart",
  components: {AddButton, DynamicForm},
  props: {
    formData: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      titles: {
        school: 'School',
        degree: 'Degree',
        date: 'Start & End Date',
        city: 'City',
        description: 'Description',
      }
    }
  },
  methods: {
    addNewForm() {
      this.$emit('onAddNewForm')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.employment-history-part {
  margin-bottom: 30px;
}

</style>
