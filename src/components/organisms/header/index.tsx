import useTranslation from 'next-translate/useTranslation'

import Image from "next/image";
import Link from "next/link";
import { FC } from 'react'

const Header: FC = () => {
  const { t } = useTranslation('common')

  return (
    <header className="py-1 sm:py-5">
      <div className="container">
        <div className="flex justify-between items-center text-neutral-100">
          <Link href="/" className="text-md sm:text-xl text-white">
            <div className="img-container-style">
              <Image
                width={300}
                height={300}
                alt="Joel Sebastião Mbengui"
                src="/assets/images/profile.jpg"
                className="img-style"
              />
            </div>
          </Link>
          <div className="flex text-md gap-5 sm:text-lg">
            <Link href="/">{t('home')}</Link>
            <Link href="/#projects">{t('projects')}</Link>
            <Link href="/#">{t('lab')}</Link>
            <Link href="/blog">{t('blog')}</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header