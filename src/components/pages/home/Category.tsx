import { FC } from "react";
import { useRouter } from "next/router";

import CategoryChip from "@/components/global/CategoryChip";

export interface CategoriesProps {
  ID: number;
  name: string;
  post_count: number;
  slug: string;
}

interface Props {
  data: CategoriesProps[];
}

const Category: FC<Props> = ({ data }) => {
  const router = useRouter();
  const openCategory = (slug: string) => {
    router.push(`/category/${slug}`);
  };
  return (
    <>
      {data.length > 0 && (
        <ul className="flex items-center justify-start -m-1.5">
          {data &&
            data.map((it) => (
              <li key={it.slug} className="p-1.5">
                <CategoryChip
                  name={it.name}
                  number={it.post_count}
                  onClick={() => openCategory(it.slug)}
                  aria-label={it.name}
                />
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Category;
