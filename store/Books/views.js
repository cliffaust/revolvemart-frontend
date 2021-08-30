import axios from 'axios'

export const actions = {
  async addView({ commit }, currentRoute) {
    try {
      await axios.post(
        `${process.env.baseUrl}/books/${currentRoute.params.slug}/add_view/`
      )
    } catch (error) {
      console.log(error.response.data)
    }
  },
}
