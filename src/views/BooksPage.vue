<template>
  <div class="container">
    <div class="row"  style="padding-top: 7vh;">
      <div class="col-6">
       <h1 class="text-start">All Books</h1>
      </div>
      <div class="col-6">
        <router-link class="btn btn-lg btn-dark float-end" role="button" to="/books/new">Add Book</router-link>
      </div>

    </div>
    <BooksList/>
  </div>
</template>

<script>
import BooksList from '../components/BooksList.vue'
export default {
  name: 'BooksPage',
  components: { BooksList }
}
</script>