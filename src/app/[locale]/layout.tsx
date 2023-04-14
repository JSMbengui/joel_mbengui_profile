import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({ children, params }: {
  params: { locale: string },
  children: React.ReactNode,
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>Joel Sebastião Mbengui - Engenheiro de Software</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="joelmbengui,joel, sebastião, mbengui,engenheiro, software, web, web3.0, blockchain, programador" />
        <meta name="description" content="Joel Sebastião Mbengui, engenheiro de software focado em criar aplicações para web e integração entre APIs." />

        {/* <!-- Facebook SEO --> */}
        <meta property="og:title" content="Joel Sebastião Mbengui - Engenheiro de Software" />
        <meta property="og:description" content="Joel Sebastião Mbengui, engenheiro de software focado em criar aplicações para web e integração entre APIs." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/imagem.jpg" />
        <meta property="og:url" content="https://joelmbengui.vercel.app/" />

        {/* <!-- Twitter SEO --> */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Joel Sebastião Mbengui - Engenheiro de Software" />
        <meta property="twitter:description" content="Joel Sebastião Mbengui, engenheiro de software focado em criar aplicações para web e integração entre APIs." />
        <meta property="twitter:creator" content="@joelmbengui" />
        <meta property="twitter:site" content="@joelmbengui" />
        <meta property="twitter:image" content="/images/imagem.jpg" />
        <meta property="twitter:url" content="https://joelmbengui.vercel.app/" />
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <div className="bg-neutral-900 block min-h-screen pb-10 pt-1 sm:pb-32">
          {children}
        </div>
      </body>
    </html>
  );
}

// export default RootLayout