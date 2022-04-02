import axios from 'axios';

export default {
    async getBooks () {
        return axios
        .get('http://localhost:3000/books')
        .then(response => response.data)
    },

    async getBookById (id) {
        return axios
        .get('http://localhost:3000/books/' + id)
        .then(response => response.data)
    },

    async removeBookById (id) {
        return axios
        .delete('http://localhost:3000/books/' + id)
    },

    async postBook (book) {
        return axios
        .post('http://localhost:3000/books', book)
    },

    async updateBook (book) {
        return axios
        .put('http://localhost:3000/books/' + book.id, book)
    }
  }