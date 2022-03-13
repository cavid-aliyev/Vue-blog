<template>
  <div>
    <h3>Post Lists:</h3>
    <Post v-for="post in posts" :key="post" :post="post" />
  </div>
</template>

<script>
import Post from "./PostItem.vue";
export default {
  components: {
    Post,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
