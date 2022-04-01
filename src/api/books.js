import axios from 'axios';

export default {
    async getBooks () {
        return axios
        .get('http://localhost:3000/books')
        .then(response => response.data)
    }
  }