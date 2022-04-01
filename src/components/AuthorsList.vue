<template>
  <ul>
    <li
      v-for="author in authors"
      :key="author.id">
      {{ author.first_name }} {{ author.last_name }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    authors: state => state.authors.all
  }),
  created () {
    this.$store.dispatch('authors/getAllAuthors')
  }
}
</script>