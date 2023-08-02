import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Container from "../Container";
import styles from "./index.module.scss";

const SkeletonCustom = () => {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
      <Skeleton
        containerClassName={styles.skeleton__wrapper}
        className={styles.skeleton__images}
        count={1}
      />
      <div className="flex flex-col gap-2">
        <Skeleton
          containerClassName={styles.skeleton__wrapper}
          className={styles.skeleton__text_date}
          count={1}
        />
        <Skeleton
          containerClassName={styles.skeleton__wrapper}
          className={styles.skeleton__text_title}
          count={3}
        />
      </div>
    </div>
  );
};

const PostsLoading = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <Container>
        <SkeletonTheme baseColor="rgb(31 41 55/1)" highlightColor="#444">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <SkeletonCustom />
            <SkeletonCustom />
            <SkeletonCustom />
            <SkeletonCustom />
          </div>
        </SkeletonTheme>
      </Container>
    </div>
  );
};

export default PostsLoading;
