import Link from "next/link";
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="py-1 sm:py-5">
      <div className="container">
        <div className="flex justify-between items-center text-neutral-100">
          <Link href="/" className="text-md sm:text-xl text-white">
            <div className="img-container-style">
              <Image
                alt="Joel Sebastião Mbengui"
                src="/images/profile.jpg"
                className="img-style"
              />
            </div>
          </Link>
          <div className="flex text-md gap-5 sm:text-lg">
            <Link href="/">Home</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#">Lab</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer className="container">
      <div className="mt-5 pt-5 sm:mt-16 sm:text-xl text-base text-center text-neutral-400">
        <div className="flex justify-center text-md gap-5 sm:text-lg">
          <Link href="mailto:joelsmbengui@gmail.com" >Mail</Link>
          <Link href="https://github.com/jsmbengui">GitHub</Link>
          <Link href="https://www.linkedin.com/in/me/joel-sebastião-mbengui">Linkedin</Link>
        </div>
        <br />
        © All rights reserved — Joel Mbengui
      </div>
    </footer>
  );

  return (
    <html>
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
        <meta property="og:url" content="http://www.joelsmbengui.com" />

        {/* <!-- Twitter SEO --> */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Joel Sebastião Mbengui - Engenheiro de Software" />
        <meta property="twitter:description" content="Joel Sebastião Mbengui, engenheiro de software focado em criar aplicações para web e integração entre APIs." />
        <meta property="twitter:creator" content="@joelmbengui" />
        <meta property="twitter:site" content="@joelmbengui" />
        <meta property="twitter:image" content="/images/imagem.jpg" />
        <meta property="twitter:url" content="http://www.joelsmbengui.com" />
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <div className="bg-neutral-900 block min-h-screen pb-10 pt-1 sm:pb-32">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}