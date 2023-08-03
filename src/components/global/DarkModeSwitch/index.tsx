import { FC } from "react";

interface Props {
  darkModeHandler: () => void;
  mode: "light" | "dark" | any;
}

const DarkModeSwitch: FC<Props> = ({ darkModeHandler, mode }) => {
  return (
    <div className="fixed bottom-0 right-0 z-10">
      <button
        onClick={darkModeHandler}
        className="w-14 h-14 flex items-center justify-center"
        aria-label="dark mode"
      >
        <span
          className={
            mode === "light" ? "icon-sun text-3xl" : "icon-sun1 text-3xl"
          }
        ></span>
      </button>
    </div>
  );
};

export default DarkModeSwitch;
