import Container from "@/components/global/Container";
import { FC } from "react";

import Text from "./Text";

interface DataProps {
  date: string;
  title: string;
  content: string;
  slug: string;
  featured_image: string;
  categories: any;
  excerpt: string;
}

interface Props {
  data: DataProps;
}

const BlogDetail: FC<Props> = ({ data }) => {
  return (
    <>
      <Container>
        <div>
          <div className="lg:w-4/6 mx-auto">
            <Text
              date={data.date}
              content={data.content}
              image={data.featured_image}
              title={data.title}
              categories={data.categories}
            />
          </div>
        </div>
        <br />
        <br />
      </Container>
    </>
  );
};

export default BlogDetail;
