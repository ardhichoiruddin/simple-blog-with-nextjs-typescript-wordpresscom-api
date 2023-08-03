import type { ReactElement } from "react";
import { NextSeo } from "next-seo";

import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/layout";
import HomeComponent from "@/components/pages/home";
import ContentWrapper from "@/components/global/ContentWrapper";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="Ardhi Blog"
        description="Berbagi pengetahuan tentang Programing, Technologi dan Musik"
        openGraph={{
          url: process.env.NEXT_PUBLIC_DOMAIN,
          title: "Ardhi Blog",
          description:
            "Berbagi pengetahuan tentang Programing, Technologi dan Musik",
          images: [
            {
              url: "/assets/images/ardhi-image.png",
              width: 952,
              height: 573,
              alt: "Ardhi Image",
              type: "image/jpeg",
            },
          ],
          siteName: "Ardhi Blog",
        }}
      />
      <ContentWrapper>
        <HomeComponent />
      </ContentWrapper>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
