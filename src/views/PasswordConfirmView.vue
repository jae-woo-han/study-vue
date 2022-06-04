<template>
  <main>
    <input type="password" v-model="passwordConfirm">
    <button v-on:click="pageMove(`/post/${$route.params.id}`)">취소</button>
    <button v-on:click="passwordCheck()">확인</button>
  </main>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "PasswordConfirmView",
  data(){
    return{
      passwordConfirm:""
    }
  },
  methods:{
    pageMove:function(path){
      router.push(path);
    },
    passwordCheck:function(){
      //TODO : password는 form data parameter로 넘어가게 변경
      axios.post(`http://localhost:30000/api/check/password/${this.$route.params.id}`,
          {passwordConfirm:this.passwordConfirm})
          .then(res=>{
            if(res.data){
              const methodParam = this.$route.params.method;
              (methodParam === 'update'?
                  this.pageMove(`/update/${this.$route.params.id}`):
                  this.deletePost());
            }else{
              alert("비밀번호가 다릅니다.");
            }
          })
          .catch(err =>{
            alert(err);
          })
    },
    deletePost:function(){
      axios.delete(`http://localhost:30000/api/post/${this.$route.params.id}`)
          .then(res =>{
            if(res.data){
              alert("삭제 성공");
              router.push("/board")
            }else{
              alert("삭제 실패");
            }
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