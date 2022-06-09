<template>
  <ul>
    <li v-for="file in fileList" @click="downloadFile(file)" v-bind:key="file.fileSeq">
      {{ file.fileName }}.{{ file.fileType }}
      <font-awesome-icon icon="fa-solid fa-xmark" @click="" v-if="isUpdate"/>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import {getFileList} from "@/service/api/FileService";

export default {
  name: "FileList",
  props:["isDownload","isUpdate"],
  data() {
    return {
      fileList: []
    }
  },
  created() {
    this.getFileList(this.$route.params.id)
        .then(res => {
          this.fileList = res.data;
        })
        .catch(err => {
          alert(err);
        })
  },
  methods: {
    getFileList,
    downloadFile: function (file) {
      axios.get(`http://localhost:30000/file/${file.fileSeq}`, {
        responseType: "blob"
      })
          .then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            const filename = file.fileName + "." + file.fileType;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
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