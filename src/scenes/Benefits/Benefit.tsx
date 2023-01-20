import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVarient = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = (props: Props) => {
  return (
    <motion.div
      variants={childVarient}
      className="mt-2 w-full rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex flex-col items-center justify-center gap-5 ">
        <div className="rounded-full border-2 border-gray-100 bg-primery-100 p-4">
          {props.icon}
        </div>
        <h4 className="font-monstserrat text-sm font-bold">{props.title}</h4>
        <p className="text-sm">{props.description}</p>
        <AnchorLink
          className="cursor-pointer text-sm font-bold text-primery-500 underline hover:text-secondary-500"
          onClick={() => props.setSelectedPage(SelectedPage.CONTACTUS)}
        >
          <p>Learn More...</p>
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Benefit;
