export default function ({ store, req }) {
  store.dispatch('signin/checkAuth', req)
}
