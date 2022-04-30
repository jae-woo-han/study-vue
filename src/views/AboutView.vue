<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{post}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AboutView',
  data(){
    return{
      post:{}
    }
  },
  created() {
    axios.get('http://localhost:30000/api/board')
        .then(async res=>{
          const resData = await res.data
          console.log(resData)
          this.post = resData;
        })
        .catch()
  }
}
</script>