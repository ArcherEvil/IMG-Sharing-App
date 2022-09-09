import { Provider } from 'react-redux'
import Layout from '../Components/Layout'
import store from '../Redux/Store'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    )
}

export default MyApp
