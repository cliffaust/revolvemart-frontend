export default function ({ store, route }) {
  store.dispatch('Books/views/addView', route)
}
