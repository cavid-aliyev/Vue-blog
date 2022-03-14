<template>
  <div v-if="posts.length > 0">
    <h3>Post Lists:</h3>
    <PostItem
      @remove="$emit('remove', post)"
      v-for="post in posts"
      :key="post"
      :post="post"
    />
  </div>
  <h2 v-else style="color: red">Empty List</h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
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
