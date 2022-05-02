<template>
  <div class="board">
    <header>게시판 - 목록</header>
    <SearchForm v-bind:search-data="searchData"/>
    <PostList v-bind:paging="paging" v-bind:post-list="postList"/>
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
  },
  data(){
    return{
      postList:[],
      paging:{},
      searchData:{}
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>