import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Container from "@/components/global/Container";
import Post, { DataProps } from "./Post";
import PostsLoading from "@/components/global/PostsLoading";
import axios from "@/libs/axios";
import Button from "@/components/global/Button";
import Title from "@/components/global/Title";

const CategoryItem: FC = () => {
  const router = useRouter();
  const slug: any = router.query.slug;
  const title = slug?.toUpperCase()?.replace("-", " ");
  const [data, setData] = useState<{
    post: DataProps[];
  }>({
    post: [],
  });
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
      const response = await axios.get(`/api/category/${slug}?page=1`);
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

  const showMorePost = async () => {
    try {
      setLoading((prevState) => ({
        ...prevState,
        postShowMore: true,
      }));
      const response = await axios.get(
        `/api/category/${slug}?page=${pagePost + 1}`
      );
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
    if (!slug) return;
    getData();
  }, [slug]);

  console.log(data.post);

  return (
    <>
      <section>
        <Container>
          <Title>{title}</Title>
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

export default CategoryItem;
