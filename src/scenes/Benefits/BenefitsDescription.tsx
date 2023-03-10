import ActionButton from "@/layout/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const BenefitsDescription = (props: Props) => {
  return (
    <div className="mt-16 items-center justify-center gap-28 md:mt-28 md:flex">
      {/* Graphic */}
      <img
        className="mx-auto"
        alt="benefits-page-graphic"
        src={BenefitsPageGraphic}
      />
      {/* Description */}
      <div>
        {/* Title */}
        <div className="relative ">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h2 className="basis-3/5 font-monstserrat text-2xl font-bold">
                MILIONS OF HAPPY MEMBERS GETTIN{" "}
                <span className="text-primary-500">FIT</span>
              </h2>
            </motion.div>
          </div>
        </div>
        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="my-5">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>
          <p className="mb-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
        {/* Button */}
        <div className="relative z-10 mt-16">
          <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles" />
          <ActionButton setSelectedPage={props.setSelectedPage}>
            Join Now!
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default BenefitsDescription;
