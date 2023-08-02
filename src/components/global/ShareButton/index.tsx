import { useEffect, useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";

const ShareButton = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    const url = typeof window !== undefined ? window.location.href : "";
    setCurrentUrl(url);
  }, []);

  return (
    <div className="py-3 border-t border-b dark:border-gray-600 border-gray-300 w-full">
      <div className="text-center mb-2">
        <span className="text-sm font-semibold">Share</span>
      </div>
      <ul className="-mx-2 flex items-center justify-center">
        <li className="px-2">
          <div className="w-10 h-10 rounded-md flex items-center justify-center border dark:border-gray-600 border-gray-300">
            <EmailShareButton className="mt-1" url={currentUrl}>
              <span className="text-lg icon-mail2"></span>
            </EmailShareButton>
          </div>
        </li>
        <li className="px-2">
          <div className="w-10 h-10 rounded-md flex items-center justify-center border dark:border-gray-600 border-gray-300">
            <FacebookShareButton className="mt-1" url={currentUrl}>
              <span className="text-lg icon-facebook"></span>
            </FacebookShareButton>
          </div>
        </li>
        <li className="px-2">
          <div className="w-10 h-10 rounded-md flex items-center justify-center border dark:border-gray-600 border-gray-300">
            <LinkedinShareButton className="mt-1" url={currentUrl}>
              <span className="text-lg icon-linkedin"></span>
            </LinkedinShareButton>
          </div>
        </li>
        <li className="px-2">
          <div className="w-10 h-10 rounded-md flex items-center justify-center border dark:border-gray-600 border-gray-300">
            <TwitterShareButton className="mt-1" url={currentUrl}>
              <span className="text-lg icon-twitter"></span>
            </TwitterShareButton>
          </div>
        </li>
        <li className="px-2">
          <div className="w-10 h-10 rounded-md flex items-center justify-center border dark:border-gray-600 border-gray-300">
            <TelegramShareButton className="mt-1" url={currentUrl}>
              <span className="text-lg icon-telegram"></span>
            </TelegramShareButton>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShareButton;
