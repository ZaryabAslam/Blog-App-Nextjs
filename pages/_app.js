import '../styles/globals.css'
import Layout from '../components/layout/layout';


function MyApp({ Component, pageProps }) {

  return (
    //this layout component contains nav(which also has logo as sprt comp)
    //comp wali behave as child to layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

