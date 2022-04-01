<template>
  <div class="container">
    <div class="row text-center mt-4">
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4"
        v-for="b in books"
        :key="b.id"
        >
        <router-link class="text-decoration-none text-reset" :to="'/books/' + b.id" >
          <slot><BookCard :book="b"/></slot>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue'
import { mapState } from 'vuex'
export default {
  computed: mapState({
    books: state => state.books.all
  }),
  created () {
    this.$store.dispatch('books/getAllBooks')
  },
  components: { BookCard }
}
</script>

<style>
.card{
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
      transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}

.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

</style>