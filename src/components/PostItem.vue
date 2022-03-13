<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Descr: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <CustomButton>Delete</CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from "./UI/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
