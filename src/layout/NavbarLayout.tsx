import React from "react";

type Props = {
  isMenuToggled: boolean;
  isScroll: boolean;
  children: React.ReactNode;
};

const NavbarLayout: React.FC<Props> = (props) => {
  const navbarBackground = " bg-primery-100 drop-shadow";
  const flexBetween = "flex items-center justify-between";
  return (
    <div
      className={`${
        !props.isMenuToggled && props.isScroll ? navbarBackground : ""
      } ${flexBetween} fixed top-0 z-50 w-full py-6 `}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>{props.children}</div>
      </div>
    </div>
  );
};

export default NavbarLayout;
