import type { ReactElement } from "react";

import ContentWrapper from "@/components/global/ContentWrapper";
import CategoryItemComponent from "@/components/pages/categoryItem";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout";

const CategoryItem: NextPageWithLayout = () => {
  return (
    <>
      <ContentWrapper>
        <CategoryItemComponent />
      </ContentWrapper>
    </>
  );
};

CategoryItem.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryItem;
