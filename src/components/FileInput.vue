<template>
    <input type="file" v-on:change="appendFile">
</template>

<script>
//파일 추가 컴포넌트
//부모 컴포넌트의 appendFile 함수로 파일 객체를 보냄
export default{
    name:"FileInput",
    methods:{
      appendFile: function (event) {
        let fileList = event.target.files;
        this.$emit("appendFile",fileList.item(0));
      }
    }
}
</script>