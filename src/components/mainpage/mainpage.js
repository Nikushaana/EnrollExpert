import CommentsSlider from "./commentsslider";
import ExperienceAdvert from "./experiencebanner";
import FAQ from "./faq";
import FirstBanner from "./firstbanner";
import Globepictext from "./globepictext";
import SecLivingGeorgia from "./seclivinggeorgia";
import SliderFirst from "./sliderfirst";
import WhoStudiesinGeorgia from "./whostudiesingeorgia";
import Handspart from "./handspart";

export default function MainPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <FirstBanner />
      <SecLivingGeorgia />
      <SliderFirst />
      <Globepictext />
      <ExperienceAdvert />
      <Handspart />
      <div className="w-full border-t-[2px] border-t-[#fd4a36] flex justify-center">
        <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col items-center py-[50px] gap-y-[20px] max-[1025px]:px-[20px] max-[560px]:gap-y-[40px] max-[400px]:gap-y-[80px]  max-[500px]:px-[16px]">
          <WhoStudiesinGeorgia />
          {/* <CommentsSlider />
          <FAQ/> */}
        </div>
      </div>
    </div>
  );
}
