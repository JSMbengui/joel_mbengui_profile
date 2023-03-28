import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="stylesheet" href="/css/variable.css" />
          <link rel="stylesheet" href="/css/styles.css" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

