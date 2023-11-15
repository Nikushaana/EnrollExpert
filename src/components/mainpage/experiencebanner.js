import CountUp from "react-countup/build";
import ScrollTrigger from "react-scroll-trigger";
import { useContext, useState } from "react";
import one from "../../images/1.png";
import two from "../../images/2.png";
import three from "../../images/3.png";
import four from "../../images/4.png";
import { MainLang } from "../languagesfiles/langContext";

function ExperienceAdvert() {
  const { translations, lang } = useContext(MainLang);
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="more1800pxresp max-w-[1526px] px-[110px] w-[100%] relative  max-[1025px]:px-0">
      <div className={` w-[100%] py-[60px] flex flex-wrap gap-y-[30px] items-center justify-around bg-[#070714] max-[600px]:flex-col ${lang==="Arabic" && "flex-row-reverse"}`}>
        <div className="imageexps text-white pl-[10px] flex flex-col items-center w-[20%] gap-y-[10px] max-[1025px]:w-[50%]">
          <div className="">
            <div className="imageexperience w-[80px] h-[80px]  duration-200">
              <img src={one} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <p className=" text-[50px] items-center font-semibold mt-[-5px] mb-[5px]">
              {counterOn && (
                <CountUp
                  className=""
                  start={0}
                  end={11}
                  duration={1}
                  delay={0}
                />
              )}
              +
            </p>
          </ScrollTrigger>
          <p className="text-[19px] text-center">{translations.YearOfExperience}</p>
        </div>
        <div className="imageexps text-white pl-[10px] flex flex-col items-center w-[20%] gap-y-[10px] max-[1025px]:w-[50%]">
          <div className="">
            <div className="imageexperience w-[80px] h-[80px]  duration-200">
              <img src={two} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <p className="text-[50px] items-center font-semibold mt-[-5px] mb-[5px]">
              {counterOn && (
                <CountUp
                  className=""
                  start={0}
                  end={1700}
                  duration={1}
                  delay={0}
                />
              )}
              +
            </p>
          </ScrollTrigger>
          <p className="text-[19px] text-center">{translations.EnrolledStudent}</p>
        </div>
        <div className="imageexps text-white pl-[10px] flex flex-col items-center w-[20%] gap-y-[10px] max-[1025px]:w-[50%]">
          <div className="">
            <div className="imageexperience w-[80px] h-[80px]  duration-200">
              <img src={three} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <p className="text-[50px] items-center font-semibold mt-[-5px] mb-[5px]">
              {counterOn && (
                <CountUp
                  className=""
                  start={0}
                  end={50}
                  duration={1}
                  delay={0}
                />
              )}
              +
            </p>
          </ScrollTrigger>
          <p className="text-[19px] text-center">{translations.University}</p>
        </div>
        <div className="imageexps text-white pl-[10px] flex flex-col items-center w-[20%] gap-y-[10px] max-[1025px]:w-[50%]">
          <div className="">
            <div className="imageexperience w-[80px] h-[80px]  duration-200">
              <img src={four} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <p className="text-[50px] items-center font-semibold mt-[-5px] mb-[5px]">
              {counterOn && (
                <CountUp
                  className=""
                  start={0}
                  end={12}
                  duration={1}
                  delay={0}
                />
              )}
              +
            </p>
          </ScrollTrigger>
          <p className="text-[19px] text-center">{translations.InternationalPartner}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAdvert;
