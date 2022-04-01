<template>
  <h1>Authors Page</h1>
  <div>
    <AuthorsList/>
  </div>
</template>

<script>
import AuthorsList from '../components/AuthorsList.vue'
export default {
  name: 'AuthorsPage',
  components: { AuthorsList}
}
</script>