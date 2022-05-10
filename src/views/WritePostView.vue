<template>
  <div>
    <main class="flex-container flex-container--column">
      <div>
        <input type="text" name="writer">
      </div>
      <div>
        <input type="password" name="password">
        <input type="password" name="passwordConfirm">
      </div>
      <div>
        <input type="text" name="title">
      </div>
      <div>
        <textarea name="postContent"/>
      </div>
      <div>
        <FileForm/>
      </div>
    </main>
    <footer>
      <button>취소</button>
      <button>저장</button>
    </footer>
  </div>
</template>

<script>
import FileForm from "@/components/FileForm"

export default {
  name: "PostCreate",
  components: {
    FileForm
  }
}
</script>

<style scoped>

</style>