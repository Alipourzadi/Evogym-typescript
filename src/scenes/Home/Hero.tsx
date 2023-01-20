import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import ActionButton from "@/layout/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = (props: Props) => {
  return (
    <motion.div
      onViewportEnter={() => props.setSelectedPage(SelectedPage.HOME)}
      className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
    >
      {/* Main Header */}
      <div className="z-10 mt-32 md:basis-3/5">
        {/* Headings */}
        <div className="md:-mt-20">
          <div className="relative ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext"
            >
              <img alt="Home-page-text" src={HomePageText} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-8 text-sm"
            >
              Unrived Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dreams of.. Get Your Dream
              Body Now.
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:justify-star mt-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={props.setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="cursor-pointer text-sm font-bold text-primery-500 underline hover:text-secondary-500"
              onClick={() => props.setSelectedPage(SelectedPage.CONTACTUS)}
            >
              <p>Learn More...</p>
            </AnchorLink>
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
        <img alt="home-page-graphic" src={HomePageGraphic} />
      </div>
    </motion.div>
  );
};

export default Hero;
