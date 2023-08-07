import type { ReactElement } from "react";
import { NextSeo } from "next-seo";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import BlogDetailComponent from "@/components/pages/blogDetail";
import Layout from "@/components/layout";
import urlApi from "@/utils/urlApi";
import ContentWrapper from "@/components/global/ContentWrapper";

type DataProps = {
  date: string;
  title: string;
  content: string;
  slug: string;
  featured_image: string;
  categories: any;
  excerpt: string;
};

const slugToMedium = [
  "tips-mengurangi-bundle-size-material-ui-react-js-di-vite-2023-7f1c57471ee6",
  "membuat-synchronous-looping-dengan-while-di-javascript-847f3c075933",
  "cara-menggunakan-firebase-di-fastify-d64725493550",
  "menghilangkan-youtube-logo-di-video-embed-youtube-dengan-javascript-dan-css-2023-7665e821cc7b",
  "website-yang-bermanfaat-dan-patut-di-coba-untuk-musisi-b1e1f030be27",
  "3-teknik-dalam-pengembangan-frontend-web-27f038ade0a1",
  "cara-menggunakan-useeffect-di-react-js-7d0676d19dba",
];

export const getServerSideProps: GetServerSideProps<{
  data: DataProps;
}> = async (context) => {
  const slug = context?.params?.slug;
  const findSlugToMedium = slugToMedium.find((fl) => fl === slug);
  if (findSlugToMedium) {
    return {
      redirect: {
        destination: `https://medium.com/@ardhicho/${slug}`,
        permanent: true,
        basePath: false,
      },
    };
  }
  const response = await fetch(`${urlApi}/posts/slug:${slug}`);
  const result = await response.json();
  if (result?.error) {
    return {
      notFound: true,
    };
  }
  const keyListCategories = Object.keys(result.categories);
  const data = {
    date: result.date,
    title: result.title,
    content: result.content,
    slug: result.slug,
    featured_image: result.featured_image,
    categories: keyListCategories.map((it) => {
      return {
        name: result.categories[it].name,
        slug: result.categories[it].slug,
      };
    }),
    excerpt: result.excerpt,
  };
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=60"
  );
  return { props: { data } };
};

const BlogDetail = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const regex = /<\/?p>/g;
  const deleteP = data.excerpt.replace(regex, "");
  return (
    <>
      <NextSeo
        title={data.title}
        description={deleteP}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_DOMAIN}/${data.slug}`,
          title: data.title,
          description: deleteP,
          images: [
            {
              url: data.featured_image,
              width: 800,
              height: 600,
              alt: data.title,
              type: "image/jpeg",
            },
          ],
          siteName: "Ardhi Blog",
        }}
      />
      <ContentWrapper>
        <BlogDetailComponent data={data} />
      </ContentWrapper>
    </>
  );
};

BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BlogDetail;
