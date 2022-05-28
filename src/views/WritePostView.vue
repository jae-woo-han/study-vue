<template>
  <div>
    <main class="flex-container flex-container--column">
      <div>
        <select v-model="postForm.categoryId">
          <option value="0"></option>
          <option v-for="category in categoryList"
                  v-bind:key="category.categoryId"
                  v-bind:value="category.categoryId">
            {{ category.categoryName }}
          </option>
        </select>
      </div>
      <div>
        <input type="text" v-model:value="postForm.writer">
      </div>
      <div>
        <input type="password" v-model:value="postForm.password">
        <input type="password" v-model:value="postForm.passwordConfirm">
      </div>
      <div>
        <input type="text" v-model:value="postForm.title">
      </div>
      <div>
        <textarea v-model="postForm.postContent"/>
      </div>
      <div>
        <FileForm v-bind:id="postForm.postId" v-bind:is-submit="isSubmit"/>
      </div>
    </main>
    <footer>
      <button v-on:click="moveMainPage">취소</button>
      <button v-on:click="writePost">저장</button>
    </footer>
  </div>
</template>

<script>
import FileForm from "@/components/FileForm"
import {getCategoryList} from "@/service/api/BoardService";
import axios from "axios";
import router from "@/router";

export default {
  name: "PostCreate",
  components: {
    FileForm
  },
  data() {
    return {
      postForm: {
        postId: 0,
        categoryId: 0,
        title: "",
        postContent: "",
        writer: "",
        password: "",
        passwordConfirm: ""
      },
      files: [],
      categoryList: [],
      isSubmit:false
    }
  },
  created() {
    this.getCategoryList().then(res => {
      this.categoryList = res.data.data;
    })
  },
  methods: {
    getCategoryList,
    writePost: function () {
      axios.post("http://localhost:30000/api/post", this.postForm)
          .then(res => {
            const responseMessage = res.data.resultMessage;
            if (responseMessage === '성공') {
              const responseData = res.data.data;
              this.postForm.postId = responseData.postId;
              this.isSubmit = true;

            } else {
              alert(responseMessage);
            }
          })
          .catch(err => {
            alert(err);
          })
    },
    moveMainPage: function () {
      if (confirm('작성을 취소하시겠습니까')) {
        router.push("/board");
      } else {
        return false;
      }
    }
  }
}
</script>

<style scoped>

</style>