<template>
  <button class="btn">
    <!-- Equal to children -->
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
