<template>
  <div class="app">
    <post-form @create="addPost" />
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { Post } from "./components/types";

export default defineComponent({
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Post of js", description: "js js" },
        { id: 2, title: "Post of ts", description: "ts ts" },
        { id: 3, title: "Post of php", description: "php php" },
      ],
    };
  },
  methods: {
    addPost(post: Post) {
      this.posts.push(post);
    },
    removePost(post: Post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
