<template>
  <div class="dialog" v-if="show" @click="closeDialog">
    <div class="dialog__content" @click.prevent.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vue-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:show", false);
    },
  },
});
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 15px 20px;
}
</style>
