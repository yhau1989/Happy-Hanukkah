import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"  crossorigin />
        <link rel="preload" as="font" type="font/woff2"  href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" crossorigin />
        <link rel="preload" as="font" type="font/woff2"  href="https://fonts.googleapis.com/css2?family=Varela&display=swap" crossorigin />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  </>
  )
  
}

export default MyApp
