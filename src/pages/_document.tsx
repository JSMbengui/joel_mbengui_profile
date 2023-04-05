import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="stylesheet" href="/css/variable.css" />
          <link rel="stylesheet" href="/css/styles.css" />
          <link rel="icon" href="favicon.ico" type="image/ico" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

