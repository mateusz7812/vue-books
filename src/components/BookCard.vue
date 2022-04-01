<template>
    <div class="px-4 py-3 card m-auto" style="width: fit-content;height: fit-content;">
        <img :src="this.book.cover_url" class="img-fluid rounded" alt="" style="height: 300px;"> 
        <h4 class="my-3 font-weight-bold">{{ this.book.title }}</h4>
        <p class="grey-text">
        {{ this.book.author_names }}
        </p>
    </div>
</template>

<script>
export default {
  props: {
      book: {
          type: Object
      }
  },
  created: function () {
    console.log("test" + this.book)
  }
}
</script>