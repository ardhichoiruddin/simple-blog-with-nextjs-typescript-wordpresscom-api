import { FC, useEffect } from "react";
import Image from "next/image";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark.css";
import javascript from "highlight.js/lib/languages/javascript";

import { dateToHuman } from "@/libs/dayjs";
import styles from "./index.module.scss";

interface Props {
  image: string;
  content: string;
  title: string;
  date: string;
}

const Text: FC<Props> = ({ content, image, title, date }) => {
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.highlightAll();
  }, []);

  return (
    <article>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-3 leading-9 sm:leading-10">
        {title}
      </h1>
      <span className="text-sm block mb-4">{dateToHuman(date)}</span>
      <div className={`w-full mb-6 ${styles.richText__img}`}>
        <Image src={image} alt={title} fill />
      </div>
      <div
        className={styles.richText__content_style}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default Text;
