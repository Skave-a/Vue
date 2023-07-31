<template>
  <div>
    <h3>List of Posts</h3>
    <post-item v-for="post in posts" :key="post.id" :post="post" />
  </div>
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
