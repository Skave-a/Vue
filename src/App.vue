<template>
  <div class="app">
    <vue-navbar />
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import vueNavbar from "./components/vueNavbar.vue";
export default {
  components: {
    "vue-navbar": vueNavbar,
  },
};
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
