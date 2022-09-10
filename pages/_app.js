import { Provider } from 'react-redux'
import CheckLoginLocalStorage from '../Components/CheckLoginLocalStorage'
import Layout from '../Components/Layout'
import store from '../Redux/Store'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CheckLoginLocalStorage>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CheckLoginLocalStorage>
    </Provider>
    )
}

export default MyApp
