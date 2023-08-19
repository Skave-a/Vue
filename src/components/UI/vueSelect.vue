<template>
  <select v-model="selectedValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Option } from "../types";

export default defineComponent({
  name: "vue-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array as () => Option[],
      default: () => [] as Option[],
    },
  },
  data() {
    return {
      selectedValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.selectedValue = newValue;
    },
  },
  methods: {
    changeOption(event: Event): void {
      const target = event.target as HTMLSelectElement;
      const newValue = target.value;
      this.selectedValue = newValue;
      this.$emit("update:modelValue", newValue);
    },
  },
});
</script>
