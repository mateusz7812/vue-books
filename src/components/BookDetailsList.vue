<template>
    <div class="container text-start">
        <div class="row p-4 my-4 card">
            <h3>Specification</h3>
            <p>Pages:  {{this.book.pages}}</p>
        </div>
        <div class="row my-4 p-4 card">
            <h3>Description</h3>
            {{this.book.description}}
        </div>
        <div class="row my-4 p-4 card">
            <div class="row">
                <div class="col-6">
                    <h3>Author</h3>
                    <p>First name: {{this.book?.author?.first_name}}</p>
                    <p>Last name: {{this.book?.author?.last_name}}</p>
                </div>
                <div class="col-6 text-end">
                    <img :src="this.book?.author?.photo_url == '' ? 'https://quillpublications.com/wp-content/uploads/2020/03/book-cover-placeholder.png' : this.book?.author?.photo_url" class="img-fluid rounded" alt="" 
                    style="
                    max-width: 200px;
                    max-heght: 200px; 
                    overflow: hidden;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    "> 
                </div>
            </div>
        </div>
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