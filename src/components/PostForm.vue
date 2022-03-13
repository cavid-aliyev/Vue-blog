<template>
  <form @submit.prevent>
    <input v-model="post.title" class="input" type="text" placeholder="title" />
    <input v-model="post.body" class="input" type="text" placeholder="text" />
    <!-- <button @click="createPost" class="btn">Create</button> -->
    <!-- All attributes would be sent to button component -->
    <CustomButton class="button-create">Create</CustomButton>
  </form>
</template>

<script>
import CustomButton from "./UI/CustomButton";
export default {
  components: {
    CustomButton,
  },
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
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.button-create {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
