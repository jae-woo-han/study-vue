<template>
  <div>
    <main class="flex-container flex-container--column">
      <div>카테고리 {{ post.categoryId }}</div>
      <div>등록일시 {{ post.writeDt }}</div>
      <div>수정일시 {{ post.updateDt }}</div>
      <div>조회수 {{ post.viewCount }}</div>
      <div>작성자 <input type="text" v-model="post.writer"></div>
      <div>비밀번호 <input type="password" v-model="form.password"></div>
      <div>제목 <input type="text" v-model="post.title"></div>
      <div>
        <textarea v-model="post.postContent">
        </textarea>
      </div>
      <div>
        <FileListViewer 
            v-bind:is-download="isDownload" 
            v-bind:is-update="isUpdate" 
            v-bind:file-list="fileList"
            v-on:removeFile="removeFile"
            />
        <FileInput
            v-on:appendFile="appendFile"
            />
      </div>
    </main>
    <footer>
      <button v-on:click="movePostPage">취소</button>
      <button v-on:click="updatePost">저장</button>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import {filesUpload, getFileList} from "@/service/api/FileService";
import FileForm from "@/components/FileForm";
import FileListViewer from "@/components/FileListViewer";
import FileInput from "@/components/FileInput";

export default {
  name: "PostUpdateView",
  components: {
    FileForm,
    FileListViewer,
    FileInput
  },
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
      },
      isSubmit:false,
      isUpdate:true,
      isDownload:false,
      fileList:[],
      newFileList:[],
      existingFileList:[]
    }
  },
  created() {
    this.getPathParam(),
    this.getFileList(this.id)
        .then(res=>{
          this.existingFileList = res.data
            .map(item=>{
              item.name = item.fileName+"."+item.fileType;
              return item;
            });
        })
        .catch(err=>{
          alert(err);
        })
  },
  methods: {
    updatePost: function () {
      this.form.postId = this.post.postId;
      this.form.writer = this.post.writer;
      this.form.title = this.post.title;
      this.form.postContent = this.post.postContent;

      axios.put(`http://localhost:30000/api/post`, this.form)
          .then(res => {
            //router.push(`/post/${res.data.postId}`);
            this.isSubmit = true;
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
            this.post =  res.data.data;
          })
    },
    movePostPage: function () {
      if (confirm('작성을 취소하시겠습니까')) {
        router.push(`/post/${this.post.postId}`);
      } else {
        return false;
      }
    },
    //해당 파일 삭제
    removeFile:function(file){
      //fileList 초기화
      this.fileList = this.fileList.filter(item => item.name !== file.name);
      //신규/기존 파일인지 분기
      if(file.isNew){
        //신규 : newFileList에서 삭제
        this.newFileList = this.newFileList.filter(item=> item.name !== file.name);
      }else{
        //기존 : existingFileList의 해당 요소에 deleted=true로 설정
        this.existingFileList = this.existingFileList
          .map(item=>{
            if(item.name===file.name){
              item.deleted=true;
            }
            return item;
        })
      }
      this.createFileList();
    },
    //fileList 만들어주는 함수(compute에 써야하는지는 확인 필요)
    createFileList:function(){

    },
    //신규 파일 추가
    appendFile:function(file){
      this.newFileList.push(file);
      this.createFileList();
    },
    filesUpload,
    getFileList
  }
}
</script>

<style scoped>

</style>