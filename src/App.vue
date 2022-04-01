<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="">Library</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/books">Books</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/authors">Authors</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
    <footer class="text-center text-lg-start bg-dark text-muted fixed-bottom">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright: 
        <a class="text-reset fw-bold" href="#">Library</a>
    </div>
    </footer>
</template>
<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ded4c3;
}
</style>
