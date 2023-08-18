import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

import Header, { MenuListsProps } from "../global/Header";
import DarkModeSwitch from "../global/DarkModeSwitch";
import Footer from "../global/Footer";
import GithubStar from "../global/GithubStar";

interface Props {
  children: ReactNode;
}

const menulists: MenuListsProps[] = [
  {
    id: 1,
    name: "Linkedin",
    icon: "icon-linkedin",
    url: "https://www.linkedin.com/in/ardhi-choiruddin/",
  },
  {
    id: 2,
    name: "Stackoverflow",
    icon: "icon-stackoverflow",
    url: "https://stackoverflow.com/users/9595691/ardhi-cho",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "icon-instagram",
    url: "https://instagram.com/__dotsama",
  },
  {
    id: 4,
    name: "Github",
    icon: "icon-github",
    url: "https://github.com/ardhichoiruddin",
  },
  {
    id: 5,
    name: "Ardhi Cho",
    icon: "icon-cool",
    url: "https://ardhicorp.com/",
  },
];

const Layout: FC<Props> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const darkModeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${inter.className}`}>
      <Header menuLists={menulists} />
      <main className="min-h-screen">{children}</main>
      <DarkModeSwitch darkModeHandler={darkModeHandler} mode={theme} />
      <br />
      <br />
      <br />
      <GithubStar />
      <Footer />
    </div>
  );
};

export default Layout;
