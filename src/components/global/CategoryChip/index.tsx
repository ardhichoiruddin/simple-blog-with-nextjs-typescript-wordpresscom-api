import { FC } from "react";

interface Props {
  name: string;
  number: number;
  onClick: () => void;
}

const CategoryChip: FC<Props> = ({ name, number, onClick, ...restProps }) => {
  return (
    <button
      onClick={onClick}
      className="center relative flex items-center justify-start select-none whitespace-nowrap rounded-xl bg-rose-500 py-3 px-5 align-baseline font-sans text-xs font-bold leading-none text-gray-100 hover:bg-rose-600 active:ring ring-rose-300"
      {...restProps}
    >
      <div className="h-8 w-8 bg-gray-100 text-rose-500 rounded-full flex items-center justify-center">
        {number}
      </div>
      <div className="ml-2">{name}</div>
    </button>
  );
};

export default CategoryChip;
