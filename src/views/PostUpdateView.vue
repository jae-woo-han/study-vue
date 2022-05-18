<template>
  <div>
    <main class="flex-container flex-container--column">
      <div>카테고리 {{ post.categoryId }}</div>
      <div>등록일시 {{ post.writeDt }}</div>
      <div>수정일시 {{ post.updateDt }}</div>
      <div>조회수 {{ post.viewCount }}</div>
      <div>작성자 <input type="text" name="writer" v-model:value="post.writer"></div>
      <div>비밀번호 <input type="password" name="password" v-model:value="form.password"></div>
      <div>제목 <input type="text" name="title" v-model:value="post.title"></div>
      <div>
        <textarea name="postContent" v-model="post.postContent">
        </textarea>
      </div>
    </main>
    <footer>
      <button>취소</button>
      <button v-on:click="updatePost">저장</button>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "PostUpdateView",
  data() {
    return {
      post: {
        postId: 0,
        writer: "",
        categoryId: "",
        writeDt: "",
        updateDt: "",
        title: "",
        postContent: "",
        viewCount: 0
      },
      form:{
        postId:"",
        writer:"",
        password:"",
        title:"",
        postContent:""
      }
    }
  },
  created() {
    this.getPathParam()
  },
  methods: {
    updatePost: function () {
      this.form.postId = this.post.postId;
      this.form.writer = this.post.writer;
      this.form.title = this.post.title;
      this.form.postContent = this.post.postContent;

      axios.put(`http://localhost:30000/api/post`, this.form)
          .then(res => {
            router.push(`/post/${res.data.postId}`);
          })
          .catch(err => {
            alert(err);
          })
    },
    getPathParam: function () {
      const routeParams = this.$route.params;
      const postId = routeParams.id;
      if (postId != null) {
        this.post.postId = postId;
        this.getPost(postId)
      }
    },
    getPost: function(postId){
      axios.get(`http://localhost:30000/api/post/${postId}`)
          .then( res =>{
            this.post =  res.data;
          })
    }
  }
}
</script>

<style scoped>

</style>