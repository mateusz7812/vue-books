import books_api from '../../api/books'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  async getAllBooks ({ commit }) {
    const books = await books_api.getBooks()
    commit('setBooks', books)
  }
}

// mutations
const mutations = {
  setBooks (state, books) {
    state.all = books
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}