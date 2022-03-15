<template>
  <form @submit.prevent>
    <h3>Create Post</h3>
    <Input v-model="post.title" placeholder="title" :type="'text'" />
    <Input v-model="post.body" placeholder="text" :type="'text'" />
    <!-- <button @click="createPost" class="btn">Create</button> -->
    <!-- All attributes would be sent to button component -->
    <CustomButton @click="createPost" class="button-create"
      >Create</CustomButton
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      //Komponenti yuxari gonderirik
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.button-create {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
