import { FC } from "react"
import { HomeProps } from "./type"
import { useTranslations } from "next-intl"

const Home: FC<HomeProps> = () => {
  const t = useTranslations('Home')

  return (
    <>
      <div className="container">
        <div className="mt-5 mb-5 sm:mb-12 sm:mt-4">
          <h1 className="text-white font-bold mb-2 sm:mb-4 sm:text-9xl text-5xl">
            Joel Mbengui
          </h1>
          <p className="text-md sm:text-xl text-neutral-400">{t('title')}</p>
        </div>

        <div className="divide-neutral-500 divide-y mb-5">
          <p className="text-md sm:text-xl text-neutral-400 text-justify">
            {t('titleDescription')}
          </p>
          <br />
          <br />
        </div>

        <div className="divide-neutral-500 divide-y mt-5" id="projects">
          <p className="text-white font-bold mb-2 sm:mb-4 sm:text-7xl text-3xl">{t('projectSectionTitle')}</p>
          <a
            href="#"
            className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">
            Anaya Lojas
          </a>
          <a
            href="#"
            className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">
            Siri
          </a>
          <a
            href="#"
            className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">
            MochiLab
          </a>
        </div>

        <div className="divide-neutral-500 divide-y mt-5">
          <p className="text-white font-bold mb-2 sm:mb-4 sm:text-7xl text-3xl">Lastest articles</p>

          {/* <a href="#" className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">Internet para desensolvedores de Software</a> */}
        </div>

      </div>
    </>
  )
}

export default Home