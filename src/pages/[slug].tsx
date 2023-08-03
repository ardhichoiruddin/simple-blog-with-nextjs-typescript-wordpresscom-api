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

export const getServerSideProps: GetServerSideProps<{
  data: DataProps;
}> = async (context) => {
  const slug = context?.params?.slug;
  const response = await fetch(`${urlApi}/posts/slug:${slug}`);
  const result = await response.json();
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
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { data } };
};

const BlogDetail = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  const regex = /<\/?p>/g;
  const deleteP = data.excerpt.replace(regex, "");
  return (
    <>
      <NextSeo
        title={data.title}
        description={deleteP}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
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
