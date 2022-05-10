<template>
  <div>
    <main class="flex-container flex-container--column">
      <div>카테고리 {{ post.categoryId }}</div>
      <div>등록일시 {{ post.writeDt }}</div>
      <div>수정일시 {{ post.updateDt }}</div>
      <div>조회수 {{ post.viewCount }}</div>
      <div>작성자 <input type="text" name="writer" v-bind:value="post.writer"></div>
      <div>비밀번호 <input type="password" name="password"></div>
      <div>제목 <input type="text" name="title" v-bind:value="post.title"></div>
      <div>
        <textarea name="postContent">
            {{ post.postContent }}
        </textarea>
      </div>
      <FileList/>
    </main>
  </div>
</template>

<script>
export default {
  name: "PostUpdateView",
  data() {
    return {
      post: {
        writer: "",
        categoryId: "",
        writeDt: "",
        updateDt: "",
        title: "",
        postContent: ""
      }
    }
  }
}
</script>

<style scoped>

</style>