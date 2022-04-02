import authors_api from '../../api/authors'
// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  async getAllAuthors ({ commit }) {
    const authors = await authors_api.getAuthors()
    commit('setAuthors', authors)
  }
}

// mutations
const mutations = {
  setAuthors (state, authors) {
    state.all = authors
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}