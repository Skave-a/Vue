<template>
  <div v-show="posts.length > 0">
    <h3>List of Posts</h3>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="handleRemove(post)"
      />
    </transition-group>
  </div>
  <h3
    v-show="posts.length === 0"
    style="text-align: center; margin-top: 50px; color: red"
  >
    There are no posts
  </h3>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "./types";
import PostItem from "./PostItem.vue";

export default defineComponent({
  components: {
    PostItem,
  },
  emits: ["remove"],
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
  methods: {
    handleRemove(post: Post) {
      this.$emit("remove", post);
    },
  },
});
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s;
}
</style>
