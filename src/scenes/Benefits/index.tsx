import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import BenefitsCards from "./BenefitsCards";
import BenefitsDescription from "./BenefitsDescription";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.BENEFITS)}
      >
        {/* Benefits Cards */}
        <BenefitsCards setSelectedPage={setSelectedPage} />

        {/* Graphics & Description */}
        <BenefitsDescription setSelectedPage={setSelectedPage} />
      </motion.div>
    </section>
  );
};

export default Benefits;
