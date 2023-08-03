<template>
  <div class="app">
    <h1>Posts</h1>
    <vue-button @click="fetchPosts">fetch</vue-button>
    <vue-button @click="showDialog" style="margin: 15px 0">Add Post</vue-button>
    <vue-dialog v-model:show="dialogVisible"
      ><post-form @create="addPost"
    /></vue-dialog>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { Post } from "./components/types";
import VueDialog from "./components/UI/vueDialog.vue";
import VueButton from "./components/UI/vueButton.vue";
import axios from "axios";

export default defineComponent({
  components: {
    PostList,
    PostForm,
    VueDialog,
    VueButton,
  },
  data() {
    return {
      posts: [] as Post[],
      dialogVisible: false,
    };
  },
  methods: {
    addPost(post: Post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post: Post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = res.data;
      } catch (e) {
        console.log(e);
      }
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
