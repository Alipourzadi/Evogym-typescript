import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

const SponserItems = () => {
  return (
    <div className="mt-4 h-[120px] w-full bg-primery-100 py-10">
      <div className="mx-auto w-5/6">
        <div className="flex w-3/5 items-center justify-start gap-8">
          <img alt="redbull-sponser" src={SponsorRedBull} />
          <img alt="forbes-sponser" src={SponsorForbes} />
          <img alt="fortune-sponser" src={SponsorFortune} />
        </div>
      </div>
    </div>
  );
};

export default SponserItems;
