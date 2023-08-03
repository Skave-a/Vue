<template>
  <div class="app">
    <h1>Posts</h1>
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

export default defineComponent({
  components: {
    PostList,
    PostForm,
    VueDialog,
    VueButton,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Post of js", description: "js js" },
        { id: 2, title: "Post of ts", description: "ts ts" },
        { id: 3, title: "Post of php", description: "php php" },
      ],
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
