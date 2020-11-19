import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  </>
  )
  
}

export default MyApp
