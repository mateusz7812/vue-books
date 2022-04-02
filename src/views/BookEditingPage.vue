<template>
  <div class="container" style="padding: 80px 0;">
    <div class="row px-4">
      <div class="col-sm-6 col-xs-12">
        <h1 class="text-start">Book Editing</h1>
      </div>
      <div class="col-sm-6 co-xs-12">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <router-link class="btn btn-lg btn-dark" role="button" to="/books">Back</router-link>
        </div>
      </div>
    </div>
    <div class="row my-3">
      <BookForm class="col-4" v-model:book_prop.sync="book" :authors="authors" @submit.prevent="updateBook(book); this.$router.push('/books')"/>
      <BookCard class="col-3 mt-4" :book="book"/>
      <BookDetailsList class="col-5" :book="book" />
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue"
import BookForm from "../components/BookForm.vue"
import BookDetailsList from "../components/BookDetailsList.vue"
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'BookEditingPage',
  data() {
    return {
      book: {
        author_id: null,
        author_names: '',
        cover_url: '',
        description: '',
        pages: null,
        title: '',
      },
    }
  },
  components: {BookCard, BookDetailsList, BookForm},
  methods:{
    ...mapActions('books', {
      updateBook: "updateBook"
    })
  },
  created () {
    this.$store.dispatch('authors/getAllAuthors')
    this.book = {...this.book, ...this.getBookById(this.$route.params.id)}
    },
  computed: {
    ...mapGetters('books', {
      getBookById: 'getBookById'
    }),
    ...mapState({
      authors: state => state.authors.all
    })
  },
}
</script>