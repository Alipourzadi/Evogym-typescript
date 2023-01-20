import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link: React.FC<props> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primery-500" : ""
      }  transition duration-500 hover:text-primery-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
