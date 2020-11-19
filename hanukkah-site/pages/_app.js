import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import Head from "next/head"

function MyApp({ Component, pageProps }) {

  
  
  return (
    <>
      <Head>
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet" /> */}
        {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" as="style" importance="low"/> */}
        {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" as="style" importance="low" /> */}
        {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Varela&display=swap" as="style" importance="low" /> */}
        <style>
        {`html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
              background-color:  var(--darkModeBackground);
          }
          @font-face {
            font-family: 'Rock Salt';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Architects Daughter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/KtkxAKiDZI_td1Lkx62xHZHDtgO_Y-bvTYlg4-7jA-U.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          @font-face {
            font-family: 'Varela';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/DPEtYwqExx0AWHX5DR4EXP_TsH8i.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          @font-face {
            font-family: 'Varela';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/DPEtYwqExx0AWHX5Ax4EXP_TsA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}
        </style>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  </>
  )
  
}

export default MyApp
