import { FC, memo, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  image: string;
  slug: string;
  title: string;
  date: string;
  subTitle: string;
  type?: "link" | "ahref" | undefined;
}

const ArticleItem: FC<Props> = ({
  image,
  slug,
  title,
  date,
  subTitle,
  type,
}) => {
  const CustomLink = ({
    children,
    className,
  }: {
    children: ReactNode;
    className: string;
  }) => {
    return type === "ahref" ? (
      <a href={slug} target="blank" className={className}>
        {children}
      </a>
    ) : (
      <Link href={`/${slug}`} className={className} prefetch={false}>
        {children}
      </Link>
    );
  };
  return (
    <article className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
      <CustomLink className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
        <Image src={image} alt={title} fill />
      </CustomLink>

      <div className="flex flex-col gap-2">
        <span className="text-sm dark:text-gray-200 text-gray-800">{date}</span>

        <h2 className="text-xl font-bold text-gray-800">
          <CustomLink className="transition duration-100 dark:hover:text-rose-500 dark:active:text-rose-600 hover:text-rose-500 active:text-rose-600 dark:text-gray-100">
            {title}
          </CustomLink>
        </h2>

        <div
          className="dark:text-gray-300 text-gray-700"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        ></div>

        <div>
          <CustomLink className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700 text-sm">
            Read more
          </CustomLink>
        </div>
      </div>
    </article>
  );
};

export default memo(ArticleItem);
