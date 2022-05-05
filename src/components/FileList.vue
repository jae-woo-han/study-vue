<template>
  <ul>
    <li v-for="file in fileList" v-on:click="downloadFile(file)">
      {{file.fileName}}.{{file.fileType}}
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "FileList",
  data(){
    return {
      fileList:[]
    }
  },
  created() {
    this.getFileList()
  },
  methods:{
    getFileList:function(){
      axios.get(`http://localhost:30000/api${this.$route.path}/file`)
          .then(async res =>{
            this.fileList = await res.data;
          })
          .catch(err =>{
            alert(err);
          })
    },
    downloadFile:function(file){
      axios.get(`http://localhost:30000/file/${file.fileSeq}`,{
            responseType:"blob"
          })
          .then(async res =>{
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            const filename = file.fileName+"."+file.fileType;
            link.setAttribute('download',filename);
            document.body.appendChild(link);
            link.click();
          })
          .catch(err =>{
            alert(err);
          })
    }
  }
}
</script>

<style scoped>

</style>