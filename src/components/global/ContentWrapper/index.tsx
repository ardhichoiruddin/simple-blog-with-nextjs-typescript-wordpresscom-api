import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentWrapper: FC<Props> = ({ children }) => {
  return <div className="pt-10">{children}</div>;
};

export default ContentWrapper;
