export const state = () => ({
  navbarSlider: false,
})

export const mutations = {
  CHANGE_NAVBAR_SLIDER(state, value) {
    state.navbarSlider = value
  },
}

export const actions = {
  changeNavbarState({ commit }, boolVal) {
    commit('CHANGE_NAVBAR_SLIDER', boolVal)
  },
}
