import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import { useEffect } from "react"
import Head from "next/head"



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = "es";
  }, ["es"]);
  return (
    <>
      <Head>
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  </>
  )
  
}

export default MyApp
