import { FC } from "react";

import ArticleItem from "@/components/global/ArticleItem";
import { dateToHuman } from "@/libs/dayjs";
import DataEmpty from "@/components/global/DataEmpty";
import ArticleGrid from "@/components/global/ArticleGrid";

export interface DataProps {
  image: string;
  slug: string;
  title: string;
  date: string;
  subTitle: string;
}
interface Props {
  data: DataProps[];
}

const Post: FC<Props> = ({ data }) => {
  return (
    <section className="py-6 sm:py-8 lg:py-12">
      <ArticleGrid>
        {data.map((it) => (
          <ArticleItem
            key={it.slug}
            image={it.image}
            title={it.title}
            subTitle={it.subTitle}
            date={dateToHuman(it.date)}
            slug={it.slug}
          />
        ))}
      </ArticleGrid>
      {data.length === 0 && <DataEmpty />}
    </section>
  );
};

export default Post;
