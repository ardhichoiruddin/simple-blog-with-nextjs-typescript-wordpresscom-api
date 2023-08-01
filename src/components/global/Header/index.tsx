import { FC } from "react";

import Link from "next/link";
import Container from "../Container";

export interface MenuListsProps {
  id: number;
  name: string;
  icon: string;
  url: string;
}

interface Props {
  menuLists: MenuListsProps[];
}

const Header: FC<Props> = ({ menuLists }) => {
  return (
    <header className="mb-2 border-b dark:border-gray-800 border-gray-200 py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <h1 className="font-semibold text-xl dark:text-gray-50 text-gray-900 tracking-wide">
                Ardhi Blog
              </h1>
            </Link>
          </div>
          <div>
            <ul className="flex items-center -mx-2 sm:-mx-3">
              {menuLists.map((it) => (
                <li
                  key={it.id}
                  className="px-2 sm:px-3 transition duration-100 dark:text-gray-50 text-gray-900 dark:hover:text-rose-500 hover:text-rose-500 active:text-rose-600 text-sm sm:text-base"
                >
                  <a href={it.url} rel="follow" target="blank">
                    <span className={it.icon}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
