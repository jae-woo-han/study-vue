<template>
  <ul>
    <li v-on:click="selectFile()">
      <input type="file" name="file">
    </li>
  </ul>
</template>

<script>
export default {
  name: "FileForm",
  methods:{
    selectFile:function(){

    }
  }
}
</script>

<style scoped>

</style>