import axios from 'axios'

export const actions = {
  async addView({ commit }, currentRoute) {
    try {
      const { data } = await axios.post(
        `${process.env.baseUrl}/books/${currentRoute.params.slug}/add_view/`
      )
      console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
  },
}
