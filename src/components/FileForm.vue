<template>
  <div>
    <ul>
      <li v-for="file in files">
        <span>{{file.name}}</span>
        <button v-on:click="selectFile()">파일 선택</button>
      </li>
    </ul>
    <input type="file" name="file" v-on:change="addFile">
  </div>
</template>

<script>
import {filesUpload} from "@/service/api/fileService";
import router from "@/router";

export default {
  name: "FileForm",
  props:["postId"],
  data(){
    return {
      files:[]
    }
  },
  watch:{
    "postId": function(postId){
      filesUpload(this.files, postId)
          .then(res =>{
            console.log(res.data.data);
            router.push(`/post/${postId}`);
          })
          .catch(err=>{
            alert(err);
          })
    }
  },
  methods:{
    selectFile:function(){

    },
    addFile:function(event){
      let fileList = event.target.files;
      this.files.push(fileList.item(0));
    },
    filesUpload
  }
}
</script>

<style scoped>

</style>