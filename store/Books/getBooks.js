import axios from 'axios'

export const state = () => ({
  books: [],
})

export const mutations = {
  GET_BOOKS(state, data) {
    state.books = data
  },
}

export const actions = {
  async getBooks({ commit }) {
    const { data } = await axios.get(`${process.env.baseUrl}/books/`)
    commit('GET_BOOKS', data.results)
  },
}
