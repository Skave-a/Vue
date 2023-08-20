<template>
  <div class="page__wrapper">
    <div
      v-for="pageNum in totalPages"
      :key="pageNum"
      class="page"
      :class="{ 'curent-page': pageNum === page }"
      @click="changePage(pageNum)"
    >
      {{ pageNum }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    totalPages: {
      type: Number,
    },
    page: {
      type: Number,
    },
  },
  methods: {
    changePage(newPage: number) {
      this.$emit("update:page", newPage);
    },
  },
});
</script>

<style>
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
</style>
