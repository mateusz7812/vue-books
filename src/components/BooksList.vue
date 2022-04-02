<template>
  <div class="container">
    <div class="row text-center mt-4">
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4"
        v-for="b in books"
        :key="b?.id"
        >
        <router-link v-if="b" class="text-decoration-none text-reset" :to="'/books/' + b.id" >
          <slot><BookCard :book="b" style="cursor: pointer;" /></slot>
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
  components: { BookCard }
}
</script>
