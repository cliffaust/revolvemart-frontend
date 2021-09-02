export default function ({ store, req }) {
  store.dispatch('cartInit', req)
}
