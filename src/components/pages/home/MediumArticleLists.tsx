import { FC } from "react";

import Title from "@/components/global/Title";
import ArticleItem from "@/components/global/ArticleItem";
import ArticleGrid from "@/components/global/ArticleGrid";
import { dateToHuman } from "@/libs/dayjs";

export interface MediumArticleProps {
  image: string;
  slug: string;
  title: string;
  date: string;
  subTitle: string;
}

interface Props {
  data: MediumArticleProps[];
}

const MediumArticleLists: FC<Props> = ({ data }) => {
  return (
    <section>
      <Title>My Articles on Medium</Title>
      <br />
      <ArticleGrid>
        {data.map((it) => (
          <ArticleItem
            key={it.slug}
            image={it.image}
            slug={`https://ardhicho.medium.com/${it.slug}`}
            subTitle={`<p class="eclips-text-2-line">${it.subTitle}</p>`}
            title={it.title}
            date={dateToHuman(it.date)}
            type="ahref"
          />
        ))}
      </ArticleGrid>
    </section>
  );
};

export default MediumArticleLists;
