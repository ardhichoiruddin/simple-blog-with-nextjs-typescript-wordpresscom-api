import { FC, useEffect } from "react";
import Image from "next/image";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark.css";
import javascript from "highlight.js/lib/languages/javascript";

import { dateToHuman } from "@/libs/dayjs";
import styles from "./index.module.scss";
import ShareButton from "@/components/global/ShareButton";

interface Props {
  image: string;
  content: string;
  title: string;
  date: string;
  categories: any;
}

const Text: FC<Props> = ({ content, image, title, date, categories }) => {
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.highlightAll();
  }, []);

  return (
    <article>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4 leading-9 sm:leading-10">
        {title}
      </h1>
      <span className="text-sm flex items-center mb-5 ">
        <span className="icon-calendar mr2 block mr-2"></span>
        {dateToHuman(date)}
      </span>
      <div className="my-2">
        <div className="mb-4 flex flex-wrap items-center justify-start -m-1">
          {categories.map((it: any) => (
            <div key={it.slug} className="p-1">
              <div className="center relative inline-block select-none whitespace-nowrap rounded-lg dark:bg-gray-600 bg-gray-300 py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none dark:text-gray-100 text-gray-600">
                {it.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full mb-6 ${styles.richText__img}`}>
        <Image src={image} alt={title} fill />
      </div>
      <div
        className={styles.richText__content_style}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="flex items-center justify-center">
        <ShareButton />
      </div>
    </article>
  );
};

export default Text;
