import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="mx-auto max-w-screen-xl px-4 md:px-8">{children}</div>;
};

export default Container;
