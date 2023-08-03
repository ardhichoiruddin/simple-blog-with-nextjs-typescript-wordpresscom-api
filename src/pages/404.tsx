import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/layout";
import NotFoundComponent from "@/components/global/NotFound";

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <NotFoundComponent />
    </>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default NotFound;
