<template>
  <div class="post">
    <div>
      <h3>Post #{{ post.id }}</h3>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="postBtns">
      <vue-button @click="$router.push(`/posts/${post.id}`)">Open</vue-button>
      <vue-button @click="$emit('remove', post)">Remove</vue-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from "./types";

export default {
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.postBtns {
  display: flex;
  gap: 10px;
}
</style>
