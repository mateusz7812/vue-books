<template>
  <div class="container" style="padding: 80px 0;">
    <div class="row px-4">
      <div class="col-6">
       <h1 class="text-start">All Books</h1>
      </div>
      <div class="col-6">
        <router-link class="btn btn-lg btn-dark float-end" role="button" to="/books/new">Add Book</router-link>
      </div>
    </div>
    <BooksList :books="books"/>
  </div>
</template>

<script>
  import BooksList from '../components/BooksList.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'BooksPage',
    computed: mapState({
      books: state => state.books.all
    }),
    created () {
      this.$store.dispatch('books/fetchAllBooks')
    },
    components: { BooksList }
  }
</script>