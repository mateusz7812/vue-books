<template>
  <header>
    <div
      class="text-center bg-image"
      style="
        background-image: url('https://assets.weforum.org/article/image/responsive_big_webp_JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.webp');
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="mask" style="height: 100%; background-color: rgba(0, 0, 0, 0.3); text-shadow: 0 0 20px black;">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white w-50">
            <h1 class="mb-3 display-1 text-lg-start ms-lg-5">Library</h1>
            <blockquote class="blockquote my-5">
              <p class="h3 mb-3">A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.</p>
              <footer class="text-light blockquote-footer text-end">William Styron in <cite title="Source Title">Letters</cite></footer>
            </blockquote>
            <router-link class="btn btn-outline-light btn-lg" role="button" to="/books">Books</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>