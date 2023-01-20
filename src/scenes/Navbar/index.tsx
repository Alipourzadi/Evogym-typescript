import React, { useState } from "react";
import { SelectedPage } from "@/shared/types";
import NavLinks from "@/scenes/Navbar/NavLinks";
import MenuButton from "@/scenes/Navbar/MenuButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavbarLayout from "@/layout/NavbarLayout";

import Logo from "@/assets/Logo.png";
import Links from "./Links";

type Props = {
  isScroll: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Index: React.FC<Props> = ({
  isScroll,
  selectedPage,
  setSelectedPage,
}) => {
  const [menuIsToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
      <NavbarLayout isScroll={isScroll} isMenuToggled={menuIsToggled}>
        {/* Left Side */}
        <img
          alt="logo"
          src={Logo}
          className={`${
            menuIsToggled ? "opacity-0" : ""
          } transition-all duration-100`}
        />
        {/* Right Side */}
        {isAboveMediumScreen ? (
          <NavLinks
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ) : (
          <button
            className={`${
              menuIsToggled
                ? "z-40 rounded-full px-4 py-3"
                : "z-40 rounded-full bg-secondary-500 px-4 py-3"
            }`}
            onClick={() => setIsMenuToggled((pervState) => !pervState)}
          >
            <MenuButton isMenuToggeld={menuIsToggled} />
          </button>
        )}
      </NavbarLayout>
      {!isAboveMediumScreen && menuIsToggled && (
        <div className="fixed right-0 bottom-0 z-40  h-full w-[200px] bg-primery-500">
          {/* Menu Items */}
          <div className="ml-[30%] mt-[50%] flex flex-col gap-10 text-xl">
            <Links
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className="mt-16">
              <img alt="logo" src={Logo} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Index;
