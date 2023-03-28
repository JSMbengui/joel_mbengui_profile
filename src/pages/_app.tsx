import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Joel Sebastião Mbengui - Engenheiro de Software</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

        <meta name="keywords" content="joelmbengui,joel, sebastião, mbengui,engenheiro, software, web, web3.0, blockchain, programador" />
        <meta name="description" content="Joel Sebastião Mbengui, engenheiro de software focado em criar aplicações para web e integração entre APIs." />

        {/* <!-- Facebook SEO --> */}
        <meta property="og:title" content="Joel Sebastião Mbengui - Engenheiro de Software" />
        <meta property="og:description" content="Joel Sebastião Mbengui, engenheiro de software focado em criar aplicações para web e integração entre APIs." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/imagem.jpg" />
        <meta property="og:url" content="http://www.joelsmbengui.com" />

        {/* <!-- Twitter SEO --> */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Joel Sebastião Mbengui - Engenheiro de Software" />
        <meta property="twitter:description" content="Joel Sebastião Mbengui, engenheiro de software focado em criar aplicações para web e integração entre APIs." />
        <meta property="twitter:creator" content="@joelmbengui" />
        <meta property="twitter:site" content="@joelmbengui" />
        <meta property="twitter:image" content="/images/imagem.jpg" />
        <meta property="twitter:url" content="http://www.joelsmbengui.com" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
