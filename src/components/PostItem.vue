<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.description }}</div>
    </div>
    <div class="postBtns">
      <Button>Remove</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from "./types";
import Button from "./UI/Button.vue";

export default {
  components: {
    Button,
  },
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
