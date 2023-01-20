import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primery-500 px-5 py-3 placeholder-white focus:outline-none resize-none`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.CONTACTUS)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <h2 className="basis-3/5 font-monstserrat text-2xl font-bold">
            <span className="text-primery-500">JOIN NOW</span> TO GET IN SHAPE
          </h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            magni minima veritatis cum ut ex? Sequi laborum natus quis officiis
            cum dolorem ipsam illo, ullam ex soluta laudantium et nesciunt
            cupiditate aut necessitatibus a harum odio eveniet nostrum, aliquid
            adipisci voluptatibus voluptatem exercitationem. Quod deleniti natus
            asperiores nulla molestiae aperiam quam temporibus, inventore
            suscipit unde.
          </p>
        </motion.div>

        {/* Form And Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={formSubmitHandler}
              method="POST"
              action="https://formsubmit.co/ali.pourzadii@gmail.com"
              className="space-y-2"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primery-500">
                  {errors.name.type === "required" && "This Field is required!"}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primery-500">
                  {errors.email.type === "required" &&
                    "This Field is required!"}
                  {errors.email.type === "pattern" && "Invalid Email Address!"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="Message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primery-500">
                  {errors.message.type === "required" &&
                    "This Field is required!"}
                  {errors.message.type === "pattern" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-10 py-3 transition duration-500"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mb-16 basis-3/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                alt="contact-us-pag-graphic"
                src={ContactUsPageGraphic}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
