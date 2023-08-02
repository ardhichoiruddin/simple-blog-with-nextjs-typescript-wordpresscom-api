import { FC } from "react";

import ArticleItem from "@/components/global/ArticleItem";
import { dateToHuman } from "@/libs/dayjs";

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
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
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
      </div>
    </section>
  );
};

export default Post;
