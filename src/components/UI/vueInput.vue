<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "vueInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateInput(event: Event) {
      this.$emit(
        "update:modelValue",
        (event.target as HTMLInputElement)?.value
      );
    },
  },
});
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
