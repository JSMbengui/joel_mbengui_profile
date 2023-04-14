import { FC } from 'react'
import { SEOProps } from './type'

const SEO: FC<SEOProps> = ({
  description,
  title,
  imageLocation = "/images/imagem.jpg"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* <!-- Facebook SEO --> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageLocation} />
      <meta property="og:url" content="https://joelmbengui.vercel.app/" />

      {/* <!-- Twitter SEO --> */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:creator" content="@joelmbengui" />
      <meta property="twitter:site" content="@joelmbengui" />
      <meta property="twitter:image" content={imageLocation} />
      <meta property="twitter:url" content="https://joelmbengui.vercel.app/" />
    </>
  )
}

export default SEO