import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

const Title: FC<Props> = ({ children }) => {
  return (
    <div className="mb-1">
      <h1 className="text-2xl sm:text-3xl">{children}</h1>
    </div>
  );
};

export default Title;
