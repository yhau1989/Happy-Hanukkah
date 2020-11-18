import '../styles/site.css'
//import { AuthProvider } from '../utils/auth'
import Head from "next/head"



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
      {/* <AuthProvider>
      </AuthProvider> */}
  </>
  )
  
}

export default MyApp
