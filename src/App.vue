<template>
  <div class="app">
    <h1>Posts</h1>
    <div class="add__btns">
      <vue-button @click="showDialog">Add Post</vue-button>
      <vue-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <vue-dialog v-model:show="dialogVisible">
      <post-form @create="addPost" />
    </vue-dialog>
    <post-list
      v-if="!isPostsLoading"
      :posts="sortedPosts"
      @remove="removePost"
    />
    <h2 v-else>Loading...</h2>
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
  data: function () {
    return {
      posts: [] as Post[],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { name: "По возрастанию", value: "title" },
        { name: "По описанию", value: "body" },
        { name: "По id", value: "id" },
      ],
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
        this.isPostsLoading = true;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = res.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts(): Post[] {
      const newValue = this.selectedSort;
      return [...this.posts].sort((post1, post2) => {
        const postF = post1[newValue];
        const postS = post2[newValue];
        if (typeof postF === "string" && typeof postS === "string") {
          return postF?.localeCompare(postS);
        } else {
          return post1.id - post2.id;
        }
      });
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
.add__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
