<template>
  <!-- bind value from props to input's value -->
  <input :value="modelValue" @input="updateInput" class="input" :type="type" />
</template>

<script>
export default {
  name: "Input",

  props: {
    modelValue: [String, Number],
    type: {
      required: true,
    },
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
