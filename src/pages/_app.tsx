import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Joel Sebastião Mbengui - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href='/public/assets/css/style.css'/>
      </Head>
      <Component {...pageProps} />
    </>)
}

export default appWithTranslation(App)