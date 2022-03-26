<template>
  <div class="upload-file">
    <input
      @change="selectFile"
      type="file"
      :accept="acceptList"
      ref="fileInput"
    >
    <button
      class="attach-file"
      type="button"
      @click="$refs.fileInput.click()"
    >
      <img
        class="image"
        :src="imageUrl"
        alt=""
      >
      <span
        v-if="image"
        @click.stop="deleteImage"
      > Delete image </span>
      <span v-else> Upload image </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
  model: {
    prop: 'value',
    event: 'onChange',
  },
  data() {
    return {
      acceptList: ['image/*'],
      image: ''
    };
  },
  props: {
    inputName: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    imageUrl() {
      return this.image || require('~/assets/images/user-placeholder.png');
    }
  },
  methods: {
    selectFile(event) {
      const [firstFile] = event.target.files;
      const reader = new FileReader();
      reader.addEventListener('load', this.imageLoaded);
      reader.readAsDataURL(firstFile);
    },
    imageLoaded(event) {
      this.image = event.target.result;
      this.$emit('onChange', this.image);
    },
    deleteImage() {
      this.image = ''
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app_variables';

.upload-file {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 460px;
  margin: 25px 0 15px 0;

  input {
    display: none;
  }

  .image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .file-name {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      margin-left: 10px;
    }

    span {
      font-size: 14px;
      font-style: normal;
      line-height: 14px;
    }
  }

  .attach-file {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: rgba($color-blue, .1);
    }

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    span {
      font-size: 16px;
      font-style: normal;
      line-height: 14px;
    }
  }
}

@media (max-width: $md) {
  .file-upload {
    flex-direction: column;

    .file-name {
      margin-bottom: 20px;
    }
  }
}
</style>
