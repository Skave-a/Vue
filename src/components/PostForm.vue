<template>
  <form @submit.prevent>
    Create post:
    <vueInput v-focus v-model="post.title" type="text" placeholder="Title" />
    <vueInput
      v-model="post.description"
      type="text"
      placeholder="description"
    />
    <vue-button
      class="btn"
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Add post</vue-button
    >
  </form>
</template>

<script lang="ts">
import { defineComponent, DirectiveBinding } from "vue";

const focusDirective = {
  mounted(el: HTMLElement) {
    el.focus();
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value) {
      el.focus();
    }
  },
};

export default defineComponent({
  directives: {
    focus: focusDirective,
  },
  data() {
    return {
      post: {
        id: Date.now(),
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("create", this.post);
      this.post = {
        id: Date.now(),
        title: "",
        description: "",
      };
    },
  },
  watch: {
    post: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.form-control {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
