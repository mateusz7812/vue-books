<template>
    <div class="px-4 py-3 card mx-auto" style="width: 270px; height: fit-content;">
        <img :src="this.book.cover_url == '' ? 'https://quillpublications.com/wp-content/uploads/2020/03/book-cover-placeholder.png' : this.book.cover_url" class="img-fluid rounded" alt="" 
        style="
          height: 300px; 
          overflow: hidden;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          "> 
        <h4 class="my-3 font-weight-bold">{{ this.book.title == '' ? "Title" : this.book.title}}</h4>
        <p class="grey-text">
        {{ this.book.author_names == '' ? "Author" : this.book.author_names }}
        </p>
    </div>
</template>

<script>
export default {
  props: {
      book: {
          type: Object
      }
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.card{
  border-radius: 4px;
  background-color: $primary-color;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding: 14px 80px 18px 36px;
}

.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

</style>