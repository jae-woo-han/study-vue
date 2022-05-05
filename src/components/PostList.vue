<template>
  <main>
    <div>
      <span>게시글 수 : {{paging.totalCount}}</span>
    </div>
    <div>
      <div class="flex-container flex-container--column">
        <div class="flex-container__row flex-container__row--header">
          <div class="flex-container__row-item--category">카테고리</div>
          <div class="flex-container__row-item--file"></div>
          <div class="flex-container__row-item--title">제목</div>
          <div class="flex-container__row-item--writer">작성자</div>
          <div class="flex-container__row-item--count">조회수</div>
          <div class="flex-container__row-item--date">등록일시</div>
          <div class="flex-container__row-item--date">수정일시</div>
        </div>
        <div class="flex-container__row" v-for="post in postList">
          <div class="flex-container__row-item--category">{{post.categoryName}}</div>
          <div class="flex-container__row-item--file">{{post.fileCount}}</div>
          <router-link v-bind:to="`/post/${post.postId}`"  class="flex-container__row-item--title">{{post.title}}</router-link>
          <div class="flex-container__row-item--writer">{{post.writer}}</div>
          <div class="flex-container__row-item--count">post.viewCount</div>
          <div class="flex-container__row-item--date">{{post.writeDt}}</div>
          <div class="flex-container__row-item--date">{{post.updateDt}}</div>
        </div>
      </div>
    </div>
    <div>
      <div class="page-nav">
        <button v-on:click="movePage(1)">
          <font-awesome-icon icon="fa-solid fa-angles-left" />
        </button>
        <button v-on:click="movePage(1)">
          <font-awesome-icon icon="fa-solid fa-angle-left"/>
        </button>
        <div class="page-nav__list">
          <button
              v-for="num in paging.totalPage"
              v-on:click="movePage(num)"
          >{{num}}</button>
        </div>
        <button v-on:click="movePage(paging.totalPage)">
          <font-awesome-icon icon="fa-solid fa-angle-right"></font-awesome-icon>
        </button>
        <button v-on:click="movePage(paging.totalPage)">
          <font-awesome-icon icon="fa-solid fa-angles-right"></font-awesome-icon>
        </button>
      </div>
    </div>
    <div class="flex-container flex-container--align-right">
      <a >등록</a>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "PostList",
  props:['paging','searchData'],
  data(){
    return{
      postList:[]
    }
  },
  created() {
    this.movePage(1)
  },
  methods:{
    movePage: function (pageNum){
      axios.get(`http://localhost:30000/api/page/${pageNum}`)
          .then(async res=>{
            this.postList = await res.data;
          })
          .catch(err => {
            alert(err);
          })
    }
  }
}
</script>

<style scoped>

</style>