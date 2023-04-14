import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from 'react'

const Footer: FC = () => {
  const t = useTranslations('PageFooter')

  return (
    <footer className="container">
      <div className="mt-5 pt-5 sm:mt-16 sm:text-xl text-base text-center text-neutral-400">
        <div className="flex justify-center text-md gap-5 sm:text-lg">
          <Link href="mailto:joelsmbengui@gmail.com" >{t('mail')}</Link>
          <Link href="https://github.com/jsmbengui">GitHub</Link>
          <Link href="https://www.linkedin.com/in/me/joel-sebastião-mbengui">Linkedin</Link>
        </div>
        <br />
        {t('right')}
      </div>
    </footer>
  );
}

export default Footer