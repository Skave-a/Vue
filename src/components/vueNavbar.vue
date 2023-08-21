<template>
  <div class="navbar">
    <h3>Vue 3</h3>
    <div class="navbar__btns">
      <vue-button @click="$router.push('/posts')">Posts</vue-button>
      <vue-button @click="$router.push('/about')">About</vue-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.navbar {
  height: 50px;
  background: lightblue;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
  display: flex;
  gap: 10px;
}
</style>
