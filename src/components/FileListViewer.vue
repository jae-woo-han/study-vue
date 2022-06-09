<template>
  <ul>
    <li v-for="file in fileList" @click="downloadFile(file)" v-bind:key="file.key">
      {{ file.name }}
      <font-awesome-icon icon="fa-solid fa-xmark" @click="removeFile(file.key)" v-if="isUpdate"/>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "FileListViewer",
  props:["isDownload","isUpdate","fileList"],
  methods: {
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
    },
    removeFile(key){
        this.$emit("removeFile",key);
    }
  }
}
</script>

<style scoped>

</style>