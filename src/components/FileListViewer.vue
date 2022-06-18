<template>
  <ul>
    <li v-for="file in fileList" @click="downloadFile(file)" v-bind:key="file.name">
      {{ file.name }}
      <font-awesome-icon icon="fa-solid fa-xmark" @click="removeFile(file)" v-if="enableUpdate"/>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "FileListViewer",
  //prefix 'enable'
  props:["enableDownload","enableUpdate","fileList"],
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
    removeFile(file){
      this.$emit("removeFile",file);
    }
  }
}
</script>

<style scoped>

</style>