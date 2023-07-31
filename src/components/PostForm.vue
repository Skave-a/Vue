<template>
  <form @submit.prevent>
    Create post:
    <input
      v-model="post.title"
      class="form-control"
      type="text"
      placeholder="title"
    />
    <input
      v-model="post.description"
      class="form-control"
      type="text"
      placeholder="description"
    />
    <vue-button
      class="btn"
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Add post</vue-button
    >
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      post: {
        id: Date.now(),
        title: "",
        description: "",
      },
    };
  },
  methods: {
    inputTitle(event: Event) {
      const target = event.target as HTMLInputElement;
      this.post.title = target.value;
    },
    inputDescription(event: Event) {
      const target = event.target as HTMLInputElement;
      this.post.description = target.value;
    },
    createPost() {
      this.$emit("create", this.post);
      this.post = {
        id: Date.now(),
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.form-control {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
