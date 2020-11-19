import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet" />
        {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" as="style" importance="low"/> */}
        {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" as="style" importance="low" /> */}
        {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Varela&display=swap" as="style" importance="low" /> */}
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  </>
  )
  
}

export default MyApp
