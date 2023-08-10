import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

const ArticleGrid: FC<Props> = ({ children }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      {children}
    </div>
  );
};

export default ArticleGrid;
