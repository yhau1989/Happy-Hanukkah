import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"  onload="this.rel='stylesheet'" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" onload="this.rel='stylesheet'" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Varela&display=swap" onload="this.rel='stylesheet'" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  </>
  )
  
}

export default MyApp
