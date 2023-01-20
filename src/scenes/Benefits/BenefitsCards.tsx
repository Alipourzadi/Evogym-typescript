import Benefit from "./Benefit";
import { motion } from "framer-motion";
import { benefitsList } from "@/shared/BenefitsItems";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const BenefitsCard = (props: Props) => {
  return (
    <>
      {/* Section Header */}
      <div className="md:my-5 md:w-3/5">
        <h1 className="basis-3/5 font-monstserrat text-2xl font-bold">
          MORE THAN JUST A GYM
        </h1>
        <p className="my-5 text-sm">
          We provide world class fitness equipment , trainers and classes to get
          you to your ultimate fitness goals with ease.We provide true care into
          each an every member.
        </p>
      </div>

      {/* Benefit icons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="mt-5 flex flex-col items-center justify-center gap-8  md:flex-row"
      >
        {benefitsList.map((benefit) => (
          <Benefit
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            setSelectedPage={props.setSelectedPage}
          />
        ))}
      </motion.div>
    </>
  );
};

export default BenefitsCard;
