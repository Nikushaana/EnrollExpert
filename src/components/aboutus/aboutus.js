import { ArrowRight } from "react-bootstrap-icons";
import aboutusbg from "../../images/aboutusbgg.webp";
import zaza from "../../images/zazagonashvili-PhotoRoom.png-PhotoRoom.png";
import bg from "../../images/countupbgggg.webp";
import { useContext, useState } from "react";
import CountUp from "react-countup/build";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import { MainLang } from "../languagesfiles/langContext";

export default function AboutUs() {
  const { translations,lang } = useContext(MainLang);
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className={`w-full flex flex-col items-center relative `}>
      <img
        src={aboutusbg}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0 z-[-2]"
      />
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]  max-smaller:pt-[50px] max-smaller:px-[16px] ">
        <div className={`flex gap-[2%] max-lg:flex-col-reverse ${lang === "Arabic" && "flex-row-reverse"}`}>
          <div className={`flex flex-col gap-[20px] w-[49%]  max-lg:w-full ${lang === "Arabic" && "items-end"}`}>
            <div className="flex items-center gap-[10px]">
              <div className="w-[5px] h-[20px] bg-[#fd4a36]"></div>
              <h1 className="text-[#fd4a36] font-semibold text-[25px]">
                {translations.Aboutourcompany}
              </h1>
            </div>
            <h1 className="text-[26px] font-semibold">{translations.Aboutus}</h1>
            <p>
              {translations.aboutustextzaza}
            </p>
            <p>{translations.aboutustext2}</p>
            <p>{translations.GonashviliZaza}</p>
            <div className="flex justify-start">
              <Link to="/contact">
                <div
                  onClick={() => {
                    goToTopFast();
                  }}
                  className="flex  items-center gap-[10px] rounded-full border-[1px] px-[20px] h-[50px] cursor-pointer hover:bg-[#fd4a36] hover:text-white duration-150 border-[#fd4a36] text-[#fd4a36]"
                >
                  <p className="text-[18px] font-semibold pb-[3px]">
                    {translations.Contact}
                  </p>
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
          <div className="relative w-[49%] h-[800px]  max-lg:w-full max-lg:h-[400px]  bg-[#070714] rounded-bl-[400px] rounded-t-[20px] rounded-br-[20px]">
            <img
              src={zaza}
              alt=""
              className="w-full h-full object-contain rounded-bl-[400px]"
            />
            <div className="absolute left-0 gap-[10px] bottom-[40%] bg-[#fd4a36] rounded-[10px] flex items-center justify-center h-[90px] px-[20px]">
              <p className="text-[50px] font-semibold text-white">11</p>
              <div className="text-[20px]">
                <p className="text-white w-[100px]">{translations.YearOfExperience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[100%] flex py-[50px] h-[250px] justify-center relative max-lg:h-auto">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 z-[-2]"
        />
        <div className={`max-w-[1519px] w-full flex justify-between px-[10%] flex-wrap  gap-y-[20px]  max-[480px]:items-center ${lang === "Arabic" && "flex-row-reverse"}`}>
          <div className="flex items-center gap-[10px] max-[900px]:w-[50%]  max-[480px]:w-full justify-center max-[400px]:justify-around ">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <p className=" text-[50px] items-center text-[#fd4a36] font-semibold mt-[-5px] mb-[5px] max-[1230px]:text-[30px] max-[400px]:w-[60px]">
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
            <p className="text-[22px] w-[110px] font-semibold  max-[1230px]:text-[18px]">
            {translations.YearOfExperience}
            </p>
          </div>
          <div className="flex items-center  gap-[10px] max-[900px]:w-[50%] max-[480px]:w-full justify-center max-[400px]:justify-around">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <p className=" text-[50px] items-center  max-[400px]:w-[60px] text-[#fd4a36] font-semibold mt-[-5px] mb-[5px] max-[1230px]:text-[30px]">
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
            <p className="text-[22px] w-[85px] font-semibold  max-[1230px]:text-[18px]">
              {translations.EnrolledStudent}
            </p>
          </div>
          <div className="flex items-center  gap-[10px] max-[900px]:w-[50%] max-[480px]:w-full justify-center max-[400px]:justify-around">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <p className=" text-[50px]  max-[400px]:w-[60px] items-center text-[#fd4a36] font-semibold mt-[-5px] mb-[5px] max-[1230px]:text-[30px]">
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
            <p className="text-[22px] w-[80px] font-semibold  max-[1230px]:text-[18px]">
              {translations.ProjectsDone}
            </p>
          </div>
          <div className="flex items-center  gap-[10px] max-[900px]:w-[50%] max-[480px]:w-full justify-center max-[400px]:justify-around">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <p className=" max-[400px]:w-[60px] text-[50px] items-center text-[#fd4a36] font-semibold mt-[-5px] mb-[5px] max-[1230px]:text-[30px]">
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
            <p className="text-[22px] w-[120px]  font-semibold  max-[1230px]:text-[18px]">
              {translations.InternationalPartner}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
