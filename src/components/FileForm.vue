<template>
  <div>
    <ul>
      <li v-for="file in fileList">
        <span>{{ file.name }}</span>

      </li>
    </ul>
    <input type="file" v-on:change="addFile">
  </div>
</template>

<script>
import {filesUpload, getFileList} from "@/service/api/FileService";
import router from "@/router";

export default {
  name: "FileForm",
  props: ["id","isSubmit"],
  data() {
    return {
      files: [],
      oldFiles:[]//변수 명 마음에 안들음
    }
  },
  created() {
    this.getFileList(this.id)
        .then(res=>{
          this.oldFiles = res.data;
        })
        .catch(err=>{
          alert(err);
        })
  },
  computed:{
    fileList: function(){
      return this.files.concat(this.oldFiles
          .map(item=>{
              item.name = item.fileName+"."+item.fileType
              return item;
              }
          ));
    }
  },
  watch: {
    "isSubmit": function (isSubmit) {
      if(!isSubmit) return false;
      filesUpload(this.files, this.id)
          .then(res => {
            console.log(res.data.data);
            router.push(`/post/${this.id}`);
          })
          .catch(err => {
            alert(err);
          })
    }
  },
  methods: {
    selectFile: function () {

    },
    addFile: function (event) {
      let fileList = event.target.files;
      this.files.push(fileList.item(0));
    },
    filesUpload,
    getFileList
  }
}
</script>

<style scoped>

</style>