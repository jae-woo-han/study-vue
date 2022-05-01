<template>
  <div class="board">
    <header>게시판 - 목록</header>
    <SearchForm msg="Welcome to Your Vue.js App"/>
    <PostList />
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";
import PostList from "@/components/PostList";

export default {
  name: "BoardView",
  components:{
    SearchForm,
    PostList
  }
}
</script>

<style scoped>

</style>