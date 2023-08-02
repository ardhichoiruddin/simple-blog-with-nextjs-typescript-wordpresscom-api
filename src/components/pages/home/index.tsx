import { FC } from "react";

import Post, { DataProps } from "./Post";
import PostsLoading from "@/components/global/PostsLoading";

interface LoadingProps {
  post: boolean;
}
interface Props {
  data: DataProps[];
  loading: LoadingProps;
}

const Home: FC<Props> = ({ data, loading }) => {
  return (
    <>
      {loading.post && <PostsLoading />}
      {!loading.post && <Post data={data} />}
    </>
  );
};

export default Home;
