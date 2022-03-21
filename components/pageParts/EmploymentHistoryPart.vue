<template>
  <div class="employment-history-part">
    <h2>Employment History</h2>

    <EmploymentHistoryForm
      v-for="(form, formIndex) in empForms"
      :key="formIndex"
      :formData="form"
    />

    <AddButton @click="addNewForm">
      Add one more employment
    </AddButton>
  </div>
</template>

<script>
import EmploymentHistoryForm from "~/components/pageParts/employmentHistoryParts/EmploymentHistoryForm";
import AddButton from "~/components/base/AddButton";

export default {
  name: "EmploymentHistoryPart",
  components: {AddButton, EmploymentHistoryForm},
  data() {
    return {
      empForms: [
        {
          jobTitle: '',
          employer: '',
          date: '',
          description: '',
        }
      ]
    }
  },
  methods: {
    addNewForm() {
      const newForm = {
        jobTitle: '',
        employer: '',
        date: '',
        description: '',
      }

      this.empForms.push(newForm)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app_variables';

.employment-history-part {
  margin-bottom: 30px;
}

</style>
