<template>
  <div class="links-part">
    <h2>Links</h2>

    <LinkForm
      v-for="(form, formIndex) in formData"
      :key="formIndex"
      :formData="form"
    />

    <AddButton @click="addNewForm">
      Add one more link
    </AddButton>
  </div>
</template>

<script lang="ts">
import AddButton from "~/components/base/AddButton";
import LinkForm from "~/components/pageParts/LinkForm.vue";
export default {
  name: "LinksPart",
  components: {LinkForm, AddButton},
  props: {
    formData: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    addNewForm(): void {
      this.$emit('onAddNewForm')
    }
  }
}
</script>

<style scoped>

</style>
