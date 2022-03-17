<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <CustomButton @click="$router.push('/posts')">Posts</CustomButton>
      <CustomButton style="margin-left: 20px" @click="$router.push('/about')"
        >About</CustomButton
      >
      <CustomButton style="margin-left: 20px" @click="$router.push('/store')"
        >store</CustomButton
      >
      <CustomButton
        style="margin-left: 20px"
        @click="$router.push('/composition')"
        >Composition</CustomButton
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
