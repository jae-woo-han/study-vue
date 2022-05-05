<template>
<div>
  <header>게시판 - 보기</header>
  <main class="flex-container flex-container--column">
    <div class="flex-container">
      <div >작성자 {{post.writer}}</div>
      <div >등록일시 {{post.writeDt}}</div>
      <div >수정일시 {{post.updateDt}}</div>
    </div>

    <div class="flex-container">
      <div >{{post.title}}</div>
      <div >조회수 post.viewCount</div>
    </div>
    <div>
        <pre >
            {{post.postContent}}
        </pre>
    </div>
    <FileList/>
    <div>
      댓글
    </div>
  </main>
</div>
</template>

<script>
import Post from "@/components/Post";
import FileList from "@/components/FileList";
import CommentList from "@/components/CommentList";
import axios from "axios";

export default {
  name: "PostView",
  components:{
    Post,
    FileList,
    CommentList
  },
  data(){
    return {
      post:{}
    }
  },
  created() {
    axios.get(`http://localhost:30000/api${this.$route.path}`)
        .then(async res =>{
          this.post = await res.data;
        })
  }
}
</script>

<style scoped>

</style>