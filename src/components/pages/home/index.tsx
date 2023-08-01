import { FC } from "react";

import Post, { DataProps } from "./Post";
interface Props {
  data: DataProps[];
}

const Home: FC<Props> = ({ data }) => {
  return (
    <>
      <Post data={data} />
    </>
  );
};

export default Home;
