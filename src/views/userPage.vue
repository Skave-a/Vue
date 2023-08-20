<template>
  <div>
    <h1>Posts</h1>
    <vue-input v-model="searchQuery" placeholder="Search" />
    <div class="add__btns">
      <vue-button @click="showDialog">Add Post</vue-button>
      <vue-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <vue-dialog v-model:show="dialogVisible">
      <post-form @create="addPost" />
    </vue-dialog>
    <post-list
      v-if="!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <h2 v-else>Loading...</h2>
    <div class="observer" ref="observer"></div>
    <!-- <post-pagination
      :totalPages="totalPages"
      :page="page"
      @update:page="changePage"
    /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { Post } from "@/components/types";
// import PostPagination from "./components/PostPagination.vue";
import axios from "axios";

export default defineComponent({
  components: {
    PostList,
    PostForm,
    // VueDialog,
    // VueButton,
    // PostPagination,
  },
  data: function () {
    return {
      posts: [] as Post[],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.posts = res.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.posts = [...this.posts, ...res.data];
      } catch (e) {
        console.log(e);
      }
    },
    // changePage(newPage: number) {
    //   this.page = newPage;
    // },
  },
  mounted() {
    this.fetchPosts();
    console.log(this.$refs.observer);
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      console.log("observer", observer);
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer as Element);
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
    sortedAndSearchedPosts(): Post[] {
      return this.sortedPosts.filter((post) =>
        post.title
          .toLocaleLowerCase()
          .includes(this.searchQuery.toLocaleLowerCase())
      );
    },
  },
  // watch: {
  //   page() {
  //     this.fetchPosts();
  //   },
  // },
});
</script>

<style>
.add__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
  gap: 10px;
}
.page {
  border: 1px solid teal;
  padding: 10px;
}
.curent-page {
  border: 4px solid teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>
