import axios from 'axios';

export default {
    async getAuthors () {
        return axios
        .get('http://localhost:3000/authors')
        .then(response => response.data)
    }
  }
  