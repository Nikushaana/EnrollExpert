import {
  ChevronRight,
  HouseFill,
  ListNested,
  MortarboardFill,
  PeopleFill,
} from "react-bootstrap-icons";
import hands from "../../images/handsimage.webp";
import { useContext, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { MainLang } from "../languagesfiles/langContext";

export default function Handspart() {
  const { translations, lang } = useContext(MainLang);
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div
      className={`more1800pxresp max-w-[1519px] py-[150px] px-[10%] w-[100%] flex justify-between max-[1000px]:items-center max-[1000px]:flex-col max-[1000px]:gap-y-[30px]  max-smaller:px-[25px]  ${
        lang === "Arabic" && "flex-row-reverse"
      }`}
    >
      <div className="w-[45%] flex flex-col items-center gap-y-[100px] max-[1000px]:gap-y-[50px] max-md:w-full max-md:h-[400px]">
        <img
          src={hands}
          alt=""
          className="orangegirl w-full max-md:h-[calc(100%-60px-50px)] object-contain "
        />
        <Link to="/apply">
          <h1
            onClick={() => {
              goToTopFast();
            }}
            className="text-[18px] text-white px-6 h-[60px] duration-200 bg-[#fd4a36] cursor-pointer hover:bg-[#070714] flex items-center justify-center"
          >
            {translations.APPLYNOW}
          </h1>
        </Link>
      </div>
      <div
        className={`flex flex-col w-[45%] items-start gap-y-[40px] max-[1000px]:w-full ${
          lang === "Arabic" && "items-end"
        }`}
      >
        <p
          className={`font-semibold text-[40px] max-[580px]:text-[30px] ${
            lang === "Arabic" && "text-end"
          }`}
        >
          {translations.WhyENROLLEXPORT}
        </p>

        <div className="text-[18px] text-gray-600 max-[580px]:text-[16px]">
          <ul className={`list-disc ${lang === "Arabic" && "text-end"}`}>
            <li className={`${lang === "Arabic" && "flex flex-row-reverse"}`}>
              <span className="font-semibold">ENROLL EXPERT</span>{" "}
              {translations.hands1}
            </li>
            <li className={`${lang === "Arabic" && "flex flex-row-reverse"}`}>
              <span className="font-semibold">ENROLL EXPERT</span>{" "}
              {translations.hands2}
            </li>
            <li className={`${lang === "Arabic" && "flex flex-row-reverse"}`}>
              <span className="font-semibold">ENROLL EXPERT</span>{" "}
              {translations.hands3}
            </li>
            <li className={`${lang === "Arabic" && "flex flex-row-reverse"}`}>
              <span className="font-semibold">ENROLL EXPERT</span>{" "}
              {translations.hands4}
              <span className="font-semibold">{translations.hands5}</span>
            </li>
          </ul>
        </div>

        <div
          className={`flex justify-between flex-wrap gap-y-[20px] w-full max-[1000px]:flex-col max-[1000px]:items-end ${
            lang === "Arabic" && "flex-row-reverse"
          }`}
        >
          <Link
            to="study-in-georgia"
            className="w-[47%] px-[30px] py-[20px] border-[1px]  max-[1025px]:w-full max-lg:w-[350px] max-smaller:w-full"
          >
            <div
              onClick={() => {
                goToTopFast();
              }}
              className=" flex items-center gap-[15px] "
            >
              <div className="w-[80px] h-[80px] rounded-full hover:scale-90 duration-200 border-[3px] flex items-center text-[35px] justify-center border-[#fd4a36] text-[#fd4a36]">
                <MortarboardFill />
              </div>
              <p className="font-semibold text-[20px] w-[80px] max-[1025px]:w-auto">
                {translations.StudyinGeorgia}
              </p>
            </div>
          </Link>
          <div
            onClick={() => {
              goToTopFast();
            }}
            className="w-[47%] px-[30px] py-[20px] flex items-center gap-[15px] border-[1px] max-[1025px]:w-full max-[1000px]:w-[350px] max-[580px]:w-fu max-smaller:w-full"
          >
            <div className="w-[80px] h-[80px] rounded-full hover:scale-90 duration-200 border-[3px] flex items-center text-[35px] justify-center border-[#fd4a36] text-[#fd4a36]">
              <HouseFill />
            </div>
            <p className="font-semibold text-[20px] w-[80px] max-[1025px]:w-auto">
              {translations.Ourservices}
            </p>
          </div>
          <Link
            to="aboutus"
            className="w-[47%] px-[30px] py-[20px] border-[1px] max-[1025px]:w-full max-[1000px]:w-[350px] max-[580px]:w-fu max-smaller:w-full"
          >
            <div
              onClick={() => {
                goToTopFast();
              }}
              className=" flex items-center gap-[15px]"
            >
              <div className="w-[80px] h-[80px] rounded-full hover:scale-90 duration-200 border-[3px] flex items-center text-[35px] justify-center border-[#fd4a36] text-[#fd4a36]">
                <PeopleFill />
              </div>
              <p className="font-semibold text-[20px] w-[90px] max-[1025px]:w-auto">
                {translations.Aboutus}
              </p>
            </div>
          </Link>
          <Link
            to="list-of-university"
            className="border-[1px] w-[47%] pl-[30px] pr-[10px] py-[20px] max-[1025px]:w-full max-[1000px]:w-[350px] max-[580px]:w-fu max-smaller:w-full"
          >
            <div
              onClick={() => {
                goToTopFast();
              }}
              className="  flex items-center gap-[15px]"
            >
              <div className="w-[80px] h-[80px] rounded-full hover:scale-90 duration-200 border-[3px] flex items-center text-[35px] justify-center border-[#fd4a36] text-[#fd4a36]">
                <MortarboardFill />
              </div>
              <p className="font-semibold text-[20px]  w-[110px] max-[1025px]:w-auto">
                {translations.ListofUniversities}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
