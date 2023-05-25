import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props: any) {
  return (
    <Html lang={props.__NEXT_DATA__.props.__lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
