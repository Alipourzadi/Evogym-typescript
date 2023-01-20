import { SelectedPage } from "@/shared/types";

import useMediaQuery from "@/hooks/useMediaQuery";

import SponserItems from "./SponserItems";
import Hero from "./Hero";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Index = (props: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image & Main Header */}
      <Hero setSelectedPage={props.setSelectedPage} />
      {/* Sponsers */}
      {isAboveMediumScreen && <SponserItems />}
    </section>
  );
};

export default Index;
