<template>
  <div>
    <form action="" method="get" id="searchForm">
      등록일
      <input type="date" name="fromDt">
      <input type="date" name="toDt">
      <select name="categoryId">
        <option value="0"></option>
        <option v-for="category in categoryList"
                v-bind:key="category.categoryId"
                v-bind:value="category.categoryId">
          {{category.categoryName}}
        </option>
      </select>
      <input type="text" name="searchMessage">
      <input type="hidden" name="start" id="start" value="0">
      <input type="submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchForm",
  data(){
    return{
      categoryList:[]
    }
  },
  created() {
    axios.get('http://localhost:30000/api/category')
        .then(async res=>{
          this.categoryList = await res.data;
        })
        .catch(err=>{
          alert(err);
        })
  }
}
</script>

<style scoped>

</style>