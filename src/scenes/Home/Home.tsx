import React from "react";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/layout/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = (props: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image & Main Header */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <div className="md:-mt-20">
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="Home-page-text" src={HomePageText} />
              </div>
              <div className="mt-8 text-sm">
                Unrived Gym. Unparalleled Training Fitness Classes. World Class
                Studios to get the Body Shapes That you Dreams of.. Get Your
                Dream Body Now.
              </div>
            </div>
            <div className="md:justify-star mt-8 flex items-center gap-8">
              <ActionButton setSelectedPage={props.setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-bold text-primery-500 underline hover:text-secondary-500"
                onClick={() => props.setSelectedPage(SelectedPage.CONTACTUS)}
              >
                <p>Learn More...</p>
              </AnchorLink>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="md:ml:40 flex basis-3/5 justify-center md:z-10 md:mt-16 md:justify-end">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* Sponsers */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primery-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-center gap-8">
              <img alt="redbull-sponser" src={SponsorRedBull} />
              <img alt="forbes-sponser" src={SponsorForbes} />
              <img alt="fortune-sponser" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
