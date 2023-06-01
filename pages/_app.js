import '../styles/globals.css'
import Layout from '../components/layout/layout';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {

  return (
    //this layout component contains nav(which also has logo as sprt comp)
    //comp wali behave as child to layout
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

