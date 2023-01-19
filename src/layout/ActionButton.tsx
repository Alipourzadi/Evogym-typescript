import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton: React.FC<Props> = (props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primery-500 hover:text-white"
      onClick={() => props.setSelectedPage(SelectedPage.CONTACTUS)}
      href={`#${SelectedPage.CONTACTUS}`}
    >
      {props.children}
    </AnchorLink>
  );
};

export default ActionButton;
