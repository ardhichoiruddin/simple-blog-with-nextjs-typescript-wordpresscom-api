import { useRouter } from "next/router";

import Container from "../Container";
import styles from "./index.module.scss";
import Button from "../Button";

const NotFound = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="w-full flex justify-center items-center">
        <div className={`${styles.image} pb-20 pt-24 text-center`}>
          <img className="w-full" src="/assets/images/404.png" alt="" />
          <span className="text-2xl block mt-6 tracking-wider">
            Page Not Found
          </span>
          <br />
          <Button size="sm" onClick={() => router.push("/")}>
            Back To Home
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
