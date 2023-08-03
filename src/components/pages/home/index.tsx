import { FC, useEffect, useState } from "react";

import Post, { DataProps } from "./Post";
import PostsLoading from "@/components/global/PostsLoading";
import axios from "@/libs/axios";
import Container from "@/components/global/Container";
import Button from "@/components/global/Button";
import Category, { CategoriesProps } from "./Category";

const Home: FC = () => {
  const [data, setData] = useState<{
    post: DataProps[];
    categories: CategoriesProps[];
  }>({
    post: [],
    categories: [],
  });
  const [loading, setLoading] = useState({
    post: false,
    postShowMore: false,
    category: false,
  });
  const [pagePost, setPagePost] = useState(1);
  const [postLength, setPostLength] = useState(0);

  const getData = async () => {
    try {
      setLoading((prevState) => ({
        ...prevState,
        post: true,
      }));
      const response = await axios.get(`/api/posts?page=1`);
      setData((prevState) => ({
        ...prevState,
        post: response.data,
      }));
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

  const getCategory = async () => {
    try {
      setLoading((prevState) => ({
        ...prevState,
        category: true,
      }));
      const response = await axios.get(`/api/categories`);
      setData((prevState) => ({
        ...prevState,
        categories: response.data,
      }));
      setLoading((prevState) => ({
        ...prevState,
        category: false,
      }));
      setPostLength(response.data.length);
    } catch (err) {
      setLoading((prevState) => ({
        ...prevState,
        category: false,
      }));
    }
  };

  const showMorePost = async () => {
    try {
      setLoading((prevState) => ({
        ...prevState,
        postShowMore: true,
      }));
      const response = await axios.get(`/api/posts?page=${pagePost + 1}`);
      setData((prevState) => ({
        ...prevState,
        post: [...prevState.post, ...response.data],
      }));
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
    getCategory();
    getData();
  }, []);

  return (
    <>
      <section>
        <Container>
          <div className="mb-4 w-full overflow-x-auto px-2 py-1.5">
            <Category data={data.categories} />
          </div>
          {!loading.post && <Post data={data.post} />}
          {loading.post && <PostsLoading />}
          {postLength === 6 && (
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
