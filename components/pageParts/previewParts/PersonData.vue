<template>
  <div
    class="person-data"
    :class="{ dark }"
  >
    <img
      class="avatar"
      :src="details.avatar"
      alt="Avatar"
    >

    <h2 class="title">{{ name }}</h2>
    <div class="job"> {{ details.jobTitle }} </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PersonData",
  props: {
    details: {
      type: Object,
      default: () => ({})
    },
    dark: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    name(): string {
      return `${this.details.firstName}, ${this.details.lastName}`
    },
  }
})
</script>

<style lang="scss" scoped>

.person-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 5px;
  }

  .title {
    margin: 0;
    font-size: 22px;
  }

  .job {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:before {
      content: '----------------';
    }
  }

  &.dark {
    flex-direction: row;
    flex-wrap: wrap;

    .avatar {
      width: 110px;
      height: 110px;
    }

    .title {
      margin-left: 20px;
      font-size: 40px;
    }

    .job {
      flex-basis: 100%;
      align-items: flex-start;

      &:before {
        content: '---------------------';
      }
    }
  }
}

</style>
