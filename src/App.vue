<template>
  <div class="app">
    <h1>Post Page</h1>
    <div class="app_btns">
      <CustomButton @click="showModal" class="modal-btn"
        >Create post</CustomButton
      >
      <PostSelect />
    </div>

    <PostModal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </PostModal>

    <PostList :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
    <h2 v-else>Loading</h2>
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostsLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((mainPost) => mainPost.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (error) {
        alert("error");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
  max-width: 50%;
  margin: 0 auto;
}

.app_btns {
  display: flex;
  justify-content: space-between;
}

.modal-btn {
  margin: 15px 0;
}
</style>
