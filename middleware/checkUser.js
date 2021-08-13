export default function ({ store, redirect, route }) {
  if (!store.state.signin.token) {
    redirect({ name: 'login', query: { redirect: `${route.path}` } })
  }
}
