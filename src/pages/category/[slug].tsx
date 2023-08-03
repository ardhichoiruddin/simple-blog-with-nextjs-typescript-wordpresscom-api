import type { ReactElement } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import ContentWrapper from "@/components/global/ContentWrapper";
import CategoryItemComponent from "@/components/pages/categoryItem";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout";

const CategoryItem: NextPageWithLayout = () => {
  const router = useRouter();
  const slug: any = router.query.slug ? router.query.slug : "...";
  const category = slug.toUpperCase().replace("-", " ");
  return (
    <>
      <NextSeo
        title={category}
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
        <CategoryItemComponent />
      </ContentWrapper>
    </>
  );
};

CategoryItem.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryItem;
