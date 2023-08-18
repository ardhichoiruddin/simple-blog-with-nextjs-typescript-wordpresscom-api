import { FC, useEffect, useState } from "react";

import Post, { DataProps } from "./Post";
import PostsLoading from "@/components/global/PostsLoading";
import axios from "@/libs/axios";
import Container from "@/components/global/Container";
import Button from "@/components/global/Button";
import Category, { CategoriesProps } from "./Category";
import MediumArticleLists, { MediumArticleProps } from "./MediumArticleLists";

const mediumArticlesData = [
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HNNglxZlYssLm9A5ktRs4w.jpeg",
    slug: "tips-mengurangi-bundle-size-material-ui-react-js-di-vite-2023-7f1c57471ee6",
    title: "Tips Mengurangi Bundle Size Material UI React Js Di Vite 2023",
    date: "2023-07-04T11:40:35+0000",
    subTitle:
      "Material Ui adalah framework Ui di react yang banyak di gunakan oleh kebanyakan developer Frontend. Material Ui menawarkan kemudahan seperti kecepatan dalam pengembangan Frontend dan kebersihan dalam kode.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*60nEc069B_5_eL2rhQh6vQ.jpeg",
    slug: "membuat-synchronous-looping-dengan-while-di-javascript-847f3c075933",
    title: "Membuat Synchronous Looping dengan While di Javascript",
    date: "2023-04-15T11:40:35+0000",
    subTitle:
      "Material Ui adalah framework Ui di react yang banyak di gunakan oleh kebanyakan developer Frontend. Material Ui menawarkan kemudahan seperti kecepatan dalam pengembangan Frontend dan kebersihan dalam kode.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*B1tB22pddPUP5mXa657zLw.png",
    slug: "cara-menggunakan-firebase-di-fastify-d64725493550",
    title: "Cara Menggunakan Firebase di Fastify",
    date: "2023-03-20T11:40:35+00:00",
    subTitle:
      "Di Fastify, semua tentang Plugin. Apa maksudnya? jadi jika setiap kita install Package, dapat di daftarkan/register di fastify.register() (menjadi plugin) dan dapat di gunakan di semua fungsi yang anda tulis tanpa mendefinisikan per file lagi.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dvKkTuO3jnA_-7XSlmTeaA.jpeg",
    slug: "menghilangkan-youtube-logo-di-video-embed-youtube-dengan-javascript-dan-css-2023-7665e821cc7b",
    title:
      "Menghilangkan Youtube Logo di Video Embed Youtube dengan Javascript dan Css 2023",
    date: "2023-03-14T11:40:35+00:00",
    subTitle:
      "Youtube menjadi salah satunya streaming video terbesar di dunia dengan kunjungan jutaan setiap harinya. Dengan jutaan pengunjung setiap hari nya, performa streaming video Youtube tidak di ragukan lagi. Maka patut di pertimbangkan fitur video embed dari youtube berada di website anda untuk portfolio atau dll.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Tv6v5FpI3Uhb_YSISCM4wQ.jpeg",
    slug: "website-yang-bermanfaat-dan-patut-di-coba-untuk-musisi-b1e1f030be27",
    title: "Website yang bermanfaat dan Patut di coba untuk Musisi",
    date: "2022-12-21T11:40:35+0000",
    subTitle:
      "Dengan bertumbuhnya adopsi teknologi internet, di barengi dengan kemudahan yang di tawarkan. Teknologi internet di ibaratkan sebagai tools yang dapat memperpendek tali yang sebelumnya 4 meter menjadi 1 meter. Teknologi yang banyak membantu salah satunya teknologi website.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4ya8qw5zkpuwStI2H2twbg.jpeg",
    slug: "3-teknik-dalam-pengembangan-frontend-web-27f038ade0a1",
    title: "3 Teknik dalam Pengembangan Frontend Web",
    date: "2020-07-15T11:40:35+00:00",
    subTitle:
      "Dengan bertumbuhnya adopsi teknologi internet, di barengi dengan kemudahan yang di tawarkan. Teknologi internet di ibaratkan sebagai tools yang dapat memperpendek tali yang sebelumnya 4 meter menjadi 1 meter. Teknologi yang banyak membantu salah satunya teknologi website.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*15Ck9QYmcclxb_ofhM_AaA.jpeg",
    slug: "cara-menggunakan-useeffect-di-react-js-7d0676d19dba",
    title: "Cara Menggunakan UseEffect di React Js",
    date: "2020-06-27T11:40:35+00:00",
    subTitle:
      "UseEffect ini di jalankan setelah render. Cara menggunakan useEffect diharuskan di luar class dan harus di dalam function. jika kalian menggunakan useEffect di dalam class, maka akan mendapatkan error. berikut cara menggunakan useEffect :",
  },
] as MediumArticleProps[];

const Home: FC = () => {
  const [data, setData] = useState<{
    post: DataProps[];
    categories: CategoriesProps[];
  }>({
    post: [],
    categories: [],
  });
  const [loading, setLoading] = useState({
    post: true,
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
          <div>
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
          </div>
          <br />
          <br />
          <div>
            <MediumArticleLists data={mediumArticlesData} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
