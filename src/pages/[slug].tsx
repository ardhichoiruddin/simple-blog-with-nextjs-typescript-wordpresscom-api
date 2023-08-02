import type { ReactElement } from "react";
import { NextSeo } from "next-seo";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import BlogDetailComponent from "@/components/pages/blogDetail";
import Layout from "@/components/layout";
import urlApi from "@/utils/urlApi";

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
  const response = await fetch(
    `${urlApi}/posts/slug:${slug}?fields=date,title,content,slug,featured_image,categories,excerpt`
  );
  const data = await response.json();
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
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
      <BlogDetailComponent data={data} />
    </>
  );
};

BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BlogDetail;
