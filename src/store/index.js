import { createStore, createLogger } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import authors from './modules/authors'
import books from './modules/books'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    authors,
    books
  },
  strict: debug,
  plugins: [createLogger(), createPersistedState()]
})