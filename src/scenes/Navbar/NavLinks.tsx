import Links from "./Links";
import ActionButton from "@/layout/ActionButton";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavLinks = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className={`${flexBetween} w-full`}>
      <div className={`${flexBetween} gap-8 text-sm`}>
        <Links
          selectedPage={props.selectedPage}
          setSelectedPage={props.setSelectedPage}
        />
      </div>
      <div className={`${flexBetween} gap-8 text-sm`}>
        <p>Sign In</p>
        <ActionButton setSelectedPage={props.setSelectedPage}>
          Become a Member
        </ActionButton>
      </div>
    </div>
  );
};

export default NavLinks;
