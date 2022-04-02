<template>
    <div class="container">
      <div class="row" style="padding-top: 80px;">
        <div class="col-sm-6 col-xs-12">
          <h1 class="text-start">Book Details</h1>
        </div>
        <div class="col-sm-6 co-xs-12">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <router-link class="btn btn-lg btn-dark" role="button" to="/books">Back</router-link>
            <router-link class="btn btn-lg btn-dark" role="button" :to='"/books/" + this.$route.params.id + "/edit"'>Edit</router-link>
            <router-link v-on:click.prevent="deleteById(this.$route.params.id)" class="btn btn-lg btn-dark" role="button" to="/books">Delete</router-link>
          </div>
        </div>
      </div>
      <div class="row" style="padding-top: 3vh;">
        <div class="col-lg-5 col-sm-12 pt-5">
          <BookCard class="book-card" :book="this.getBookById(this.$route.params.id)"/>
        </div>
        <div class="col-lg-7 col-sm-12">
          <BookDetailsList class="my-3" :book="this.getBookById(this.$route.params.id)"/>
        </div>
      </div>
    </div>
</template>

<script>
import BookCard from '../components/BookCard.vue'
import BookDetailsList from '../components/BookDetailsList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BookDetailsPage',
  computed: {
    ...mapGetters('books', {
      getBookById: 'getBookById'
    })
  },
  created () {
    this.$store.dispatch('books/fetchBookById', this.$route.params.id)
  },
  methods:{
    ...mapActions('books', {
      deleteById: "deleteBookById"
    })
  },
  components: { BookCard, BookDetailsList }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.book-card{
  transform: scale(1.2);
  margin: 30px;
}

.book-card:hover{
  transform: scale(1.25);
}

</style>