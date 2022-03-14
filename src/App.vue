<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Js post", body: "JS description" },
        { id: 2, title: "Python post", body: "Python description" },
        { id: 3, title: "React post", body: "React description" },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((mainPost) => mainPost.id !== post.id);
    },
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
</style>
