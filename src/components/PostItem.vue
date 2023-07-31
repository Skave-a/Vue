<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.description }}</div>
    </div>
    <div class="postBtns">
      <vue-button>Remove</vue-button>
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
</style>
