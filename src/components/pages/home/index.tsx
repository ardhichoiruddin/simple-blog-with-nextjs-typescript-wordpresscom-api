import { FC, useEffect, useState } from "react";

import Post, { DataProps } from "./Post";
import PostsLoading from "@/components/global/PostsLoading";
import axios from "@/libs/axios";
import Container from "@/components/global/Container";
import Button from "@/components/global/Button";

const Home: FC = () => {
  const [data, setData] = useState<DataProps[] | []>([]);
  const [loading, setLoading] = useState({
    post: false,
    postShowMore: false,
  });
  const [pagePost, setPagePost] = useState(1);
  const [postLength, setPostLength] = useState(0);

  const getData = async () => {
    try {
      setLoading((prevState) => ({
        ...prevState,
        post: true,
      }));
      const response = await axios.get(`/api/home?page=1`);
      setData(response.data);
      setLoading((prevState) => ({
        ...prevState,
        post: false,
      }));
      setPostLength(response.data.length);
    } catch (err) {
      setLoading((prevState) => ({
        ...prevState,
        post: false,
      }));
    }
  };

  const showMorePost = async () => {
    try {
      setLoading((prevState) => ({
        ...prevState,
        postShowMore: true,
      }));
      const response = await axios.get(`/api/home?page=${pagePost + 1}`);
      setData((prevState) => [...prevState, ...response.data]);
      setLoading((prevState) => ({
        ...prevState,
        postShowMore: false,
      }));
      setPagePost((prevState) => prevState + 1);
      setPostLength(response.data.length);
    } catch (err) {
      setLoading((prevState) => ({
        ...prevState,
        postShowMore: false,
      }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section>
        <Container>
          {!loading.post && <Post data={data} />}
          {loading.post && <PostsLoading />}
          {postLength === 4 && (
            <div className="text-center">
              <Button
                size="md"
                color="primary"
                onClick={showMorePost}
                aria-label="show more button"
                loading={loading.postShowMore}
                disabled={loading.postShowMore}
              >
                Show more
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Home;
