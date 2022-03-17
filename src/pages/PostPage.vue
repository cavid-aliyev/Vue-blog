<template>
  <div>
    <h1>Post Page</h1>
    <Input :type="'text'" v-model="searchQuery" placeholder="Search..." />
    <div class="app_btns">
      <CustomButton @click="showModal">Create post</CustomButton>
      <PostSelect v-model="selectedSort" :options="sortOptions" />
    </div>

    <PostModal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </PostModal>

    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <h2 v-else>Loading</h2>
    <div ref="observer" class="observer"></div>
    <!-- Pagination -->
    <!-- <div class="page__wrapper">
      <div
        v-for="pageNum in totalPages"
        :key="pageNum"
        class="page"
        :class="{
          current_page: page === pageNum,
        }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
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
      totalPages: 0,
      page: 1,
      limit: 10,
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
    // changePage(pageNum) {
    //   this.page = pageNum;
    //   // this.fetchPosts();
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        alert("error");
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert("error");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.posts < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    //   // should be equal name with data
    //   selectedSort(newValue) {
    //     newValue === "id"
    //       ? this.posts.sort((post1, post2) => post1.id - post2.id)
    //       : this.posts.sort((post1, post2) => {
    //           return post1[newValue]?.localeCompare(post2[newValue]);
    //         });
    //   },
  },
};
</script>

<style>
.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current_page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background-color: green;
}
</style>
