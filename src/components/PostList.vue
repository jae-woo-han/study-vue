<template>
  <main>
    <div>
      <span>게시글 수 : </span>
      <span >검색 게시글 수 넣을자리</span>
    </div>
    <div>
      <div class="flex-container flex-container--column">
        <div class="flex-container__row flex-container__row--header">
          <div class="flex-container__row-item--category">카테고리</div>
          <div class="flex-container__row-item--file"></div>
          <div class="flex-container__row-item--title">제목</div>
          <div class="flex-container__row-item--writer">작성자</div>
          <div class="flex-container__row-item--count">조회수</div>
          <div class="flex-container__row-item--date">등록일시</div>
          <div class="flex-container__row-item--date">수정일시</div>
        </div>

      </div>
    </div>
    <div>
      <div class="page-nav">
        <button >
          <i class="fa-solid fa-angles-left"></i>
        </button>
        <button >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div class="page-nav__list">
          <button></button>
        </div>
        <button>
          <i class="fa-solid fa-angle-right"></i>
        </button>
        <button>
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
    <div class="flex-container flex-container--align-right">
      <a >등록</a>
    </div>
  </main>
</template>

<script>
export default {
  name: "PostList"
}
</script>

<style scoped>

</style>