<template>
  <div v-show="posts.length > 0">
    <h3>List of Posts</h3>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <h3
    v-show="posts.length === 0"
    style="text-align: center; margin-top: 50px; color: red"
  >
    There are no posts
  </h3>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Post } from "./types";
import PostItem from "./PostItem.vue";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
};
</script>
