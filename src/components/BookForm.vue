<template>
    <form class="card container text-start py-3 was-validated">
        <div class="form-group p-2">
        <label for="title">Title</label>
        <input v-model="book.title" type="text" class="form-control" id="title" placeholder="Book title" autocomplete="off" required>
        </div>
        <div class="form-group p-2">
        <label>Author</label>
        <select v-model="book.author_id" class="form-select" @change="onAuthorChange($event)" required>
            <option disabled selected>Book author</option>
            <option v-for="author in this.authors" :key="author.id" :value="author.id">{{author.first_name}} {{author.last_name}}</option>
        </select>
        </div>
        <div class="form-group p-2">
        <label for="cover">Cover</label>
        <input v-model="book.cover_url" type="url" class="form-control" id="cover" placeholder="Book cover url" autocomplete="off" required>
        </div>
        <div class="form-group p-2">
        <label for="pages">Pages</label>
        <input v-model="book.pages" type="number" class="form-control" id="pages" placeholder="Book pages number" autocomplete="off" required>
        </div>
        <div class="form-group p-2">
        <label for="description">Description</label>
        <textarea ref="textarea" v-model="book.description" class="form-control" id="description" placeholder="Book description" @focus="resize" @keyup="resize" required></textarea>
        </div>
        <div class="row pt-3 text-center">
        <div>
            <input type="submit" value="Save" class="btn btn-lg btn-dark" />
        </div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        book_prop: Object,
        authors: Object
    },
    data() {
        return {
            book: this.book_prop
        }
    },
    mounted() {
      this.resize();
    },
    methods: {
      resize() {
        const { textarea } = this.$refs;
        textarea.style.height = textarea.scrollHeight + 2 + 'px';
      },
      onAuthorChange(event) {
            let author = this.authors.find(a => a.id == event.target.value)
            this.book.author = author
            this.book.author_names = author.first_name + " " + author.last_name
        }
    }
}
</script>