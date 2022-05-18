<template>
  <div class="board">
    <header>게시판 - 목록</header>
    <div>
        등록일
        <input type="date" name="fromDt" v-bind:value="searchData.fromDt">
        <input type="date" name="toDt" v-bind:value="searchData.toDt">
        <select name="categoryId" v-model="searchData.categoryId">
          <option value="0"></option>
          <option v-for="category in categoryList"
                  v-bind:key="category.categoryId"
                  v-bind:value="category.categoryId">
            {{ category.categoryName }}
          </option>
        </select>
        <input type="text" name="searchMessage" v-bind:value="searchData.searchMessage">
        <input type="button" v-on:click="getPaging" value="검색">
    </div>
    <PostList v-bind:paging="paging" v-bind:search-data="searchData"/>
    <div class="flex-container flex-container--align-right">
      <router-link to="/write">등록</router-link>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import axios from "axios";
import {getCategoryList} from "@/service/api/BoardService";

export default {
  name: "BoardView",
  components: {
    PostList
  },
  data() {
    return {
      postList: [],
      paging: {},
      searchData: {
        fromDt:"",
        toDt:"",
        categoryId:"",
        searchMessage:""
      },
      categoryList:[]
    }
  },
  created() {
    this.getCategoryList().then(res=>{
      this.categoryList = res.data.data;
    }),
    this.getPaging()
  },
  methods:{
    getPaging: function(){
      axios.get("http://localhost:30000/api/page",{
        params:this.searchData
      })
          .then( res => {
            this.paging =  res.data.data;
          })
          .catch(err => {
            alert(err+" /api/page");
          })
    },
    getCategoryList
  }
}
</script>

<style scoped>

</style>