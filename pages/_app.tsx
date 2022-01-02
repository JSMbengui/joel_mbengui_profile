import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Joel Mbengui - Software Developer</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
