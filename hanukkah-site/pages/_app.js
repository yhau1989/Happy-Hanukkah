import '../styles/site.css'
import { AuthProvider } from '../utils/auth'
import Head from "next/head"

function MyApp({ Component, pageProps }) {

  
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Happy Hanukkah</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#16004a" />
        <meta name="msapplication-TileColor" content="#16004a" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#16004a"></meta>
        
        <meta name="title" content="Happy Hanukkah" />
        <meta name="description" content="Celebrada durante ocho días, la festividad de la Janucá data de la época de la hegemonía helénica en Israel, que comienza con las conquistas de Alejandro Magno el año 332 a. C., Como se puede leerse en los libros de I y II Macabeos, donde esta festividad conmemora la derrota de los helenos y la recuperación de la independencia judía a manos de los macabeos sobre los griegos de la dinastía de Seleuco, y la posterior purificación del Segundo Templo de Jerusalén de los íconos paganos, en el siglo II a. C. La tradición judía habla de un milagro, en el que pudo encenderse el candelabro del templo durante ocho días consecutivos con muy poca cantidad de aceite, que alcanzaba solo para uno. Esto dio origen a la principal costumbre de la festividad, que es la de encender, de forma progresiva, un candelabro de nueve brazos llamado Januquiá. Ingresa y enciende tu Januquiá todos los días, recitas las bendiciones y comparte con tus amigos" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happy-hanukkah.vercel.app/" />
        <meta property="og:title" content="Happy Hanukkah" />
        <meta property="og:description" content="Celebrada durante ocho días, la festividad de la Janucá data de la época de la hegemonía helénica en Israel, que comienza con las conquistas de Alejandro Magno el año 332 a. C., Como se puede leerse en los libros de I y II Macabeos, donde esta festividad conmemora la derrota de los helenos y la recuperación de la independencia judía a manos de los macabeos sobre los griegos de la dinastía de Seleuco, y la posterior purificación del Segundo Templo de Jerusalén de los íconos paganos, en el siglo II a. C. La tradición judía habla de un milagro, en el que pudo encenderse el candelabro del templo durante ocho días consecutivos con muy poca cantidad de aceite, que alcanzaba solo para uno. Esto dio origen a la principal costumbre de la festividad, que es la de encender, de forma progresiva, un candelabro de nueve brazos llamado Januquiá. Ingresa y enciende tu Januquiá todos los días, recitas las bendiciones y comparte con tus amigos" />
        <meta property="og:image" content="https://res.cloudinary.com/software-monkey-ecuador/image/upload/v1605853375/happy-hanukkah/Group_1_zscbag.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://happy-hanukkah.vercel.app/" />
        <meta property="twitter:title" content="Happy Hanukkah" />
        <meta property="twitter:description" content="Celebrada durante ocho días, la festividad de la Janucá data de la época de la hegemonía helénica en Israel, que comienza con las conquistas de Alejandro Magno el año 332 a. C., Como se puede leerse en los libros de I y II Macabeos, donde esta festividad conmemora la derrota de los helenos y la recuperación de la independencia judía a manos de los macabeos sobre los griegos de la dinastía de Seleuco, y la posterior purificación del Segundo Templo de Jerusalén de los íconos paganos, en el siglo II a. C. La tradición judía habla de un milagro, en el que pudo encenderse el candelabro del templo durante ocho días consecutivos con muy poca cantidad de aceite, que alcanzaba solo para uno. Esto dio origen a la principal costumbre de la festividad, que es la de encender, de forma progresiva, un candelabro de nueve brazos llamado Januquiá. Ingresa y enciende tu Januquiá todos los días, recitas las bendiciones y comparte con tus amigos" />
        <meta property="twitter:image" content="https://res.cloudinary.com/software-monkey-ecuador/image/upload/v1605853375/happy-hanukkah/Group_1_zscbag.png"></meta>
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
