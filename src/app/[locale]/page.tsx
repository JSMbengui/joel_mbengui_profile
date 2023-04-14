"use client"

import Home from '../../components/tampletes/home';
import Layout from '../../components/organisms/layout';
import SEO from '../../components/organisms/seo';
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('Head')

  return (
    <>
      <SEO
        description={`${t('description')}`}
        title={t('title')}
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
