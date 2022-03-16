<template>
  <div class="app">
    <h1>Post Page</h1>
    <Input v-model="searchQuery" />
    <div class="app_btns">
      <CustomButton @click="showModal">Create post</CustomButton>
      <PostSelect v-model="selectedSort" :options="sortOptions" />
    </div>

    <PostModal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </PostModal>

    <PostList
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
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
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By descr" },
      ],
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
  },
  // watch: {
  //   // should be equal name with data
  //   selectedSort(newValue) {
  //     newValue === "id"
  //       ? this.posts.sort((post1, post2) => post1.id - post2.id)
  //       : this.posts.sort((post1, post2) => {
  //           return post1[newValue]?.localeCompare(post2[newValue]);
  //         });
  //   },
  // },
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
  margin: 15px 0;
}
</style>
