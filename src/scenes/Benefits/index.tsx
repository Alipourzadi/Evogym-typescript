import Benefit from "./Benefit";
import { SelectedPage } from "@/shared/types";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefitsList = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = (props: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => props.setSelectedPage(SelectedPage.BENEFITS)}
      >
        {/* Section Header */}
        <div className="md:my-5 md:w-3/5">
          <h1 className="basis-3/5 font-monstserrat text-2xl font-bold">
            MORE THAN JUST A GYM
          </h1>
          <p className="my-5 text-sm">
            We provide world class fitness equipment , trainers and classes to
            get you to your ultimate fitness goals with ease.We provide true
            care into each an every member.
          </p>
        </div>
        {/* Benefit icons */}
        <div className="mt-5 flex flex-col items-center justify-center gap-8  md:flex-row">
          {benefitsList.map((benefit) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              setSelectedPage={props.setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
