import books_api from '../../api/books'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {
  getAllBooks: (state) => {
    return state.all
  },

  getBookById: (state) =>  (id) => {
    return state.all.find(b => b?.id == id)
  }
}

// actions
const actions = {
  async fetchAllBooks ({ commit }) {
    const books = await books_api.getBooks()
    commit('setBooks', books)
  },

  async fetchBookById ({ commit }, id) {
    await books_api.getBookById(id).then(r => commit('setBook', r.data))
  },

  async deleteBookById({ commit }, id) {
    await books_api.removeBookById(id);
    commit('deleteBook', id)
  },

  async saveBook({ commit }, book){
    await books_api.postBook(book).then(r => commit('setBook', r.data))
  },

  async updateBook({ commit }, book){
    await books_api.updateBook(book).then(r => commit('setBook', r.data))
  }
}

// mutations
const mutations = {
  setBooks (state, books) {
      for (let i = 0; i < books.length; i++) {
        state.all.splice(i, 1, {...state.all[i], ...books[i]})
        //state.all[books[i].id] = {...state.all[books[i].id], ...books[i]};   
      }
      //state.all = books
  },
  
  setBook (state, book) {
    var i = state.all.findIndex(b => b?.id == book.id)
    if(i == -1){
      i == state.all.length
    }
    state.all.splice(i, 1, {...state.all[i], ...book})
    //state.all[book.id] = {...state.all[book.id], ...book}
  },
  
  deleteBook (state, id) {
    var i = state.all.findIndex(b => b?.id == id)
    state.all.splice(i, 1)
    //state.all[book.id] = {...state.all[book.id], ...book}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}