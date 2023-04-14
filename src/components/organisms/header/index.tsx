import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from 'react'

const Header: FC = () => {
  const t = useTranslations('PageHeader')
  
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
                src="/images/profile.jpg"
                className="img-style"
              />
            </div>
          </Link>
          <div className="flex text-md gap-5 sm:text-lg">
            <Link href="/">{t('menu.home')}</Link>
            <Link href="/#projects">{t('menu.projects')}</Link>
            <Link href="/#">{t('menu.lab')}</Link>
            <Link href="/blog">{t('menu.blog')}</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header