<template>
  <ul>
    <li v-on:click="selectFile()">
      <input type="file" name="file" v-on:change="">
    </li>
  </ul>
</template>

<script>
import {filesUpload} from "@/service/api/fileService";

export default {
  name: "FileForm",
  data(){
    return {
      files:[]
    }
  },
  methods:{
    selectFile:function(){

    },

    filesUpload

  }
}
</script>

<style scoped>

</style>