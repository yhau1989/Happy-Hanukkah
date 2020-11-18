import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import { useEffect } from "react"



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = "es";
  }, ["es"]);
  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
