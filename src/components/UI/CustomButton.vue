<template>
  <button class="btn">
    <!-- Equal to children -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
