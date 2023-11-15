import { ChevronRight, ListNested } from "react-bootstrap-icons";
import globepht from "../../images/globepht.webp";
import { useContext, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import enTranslations from "../languagesfiles/enTranslation";
import { MainLang } from "../languagesfiles/langContext";

export default function Globepictext() {
  const { translations, lang } = useContext(MainLang);
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className={`more1800pxresp max-w-[1519px] py-[150px] px-[10%] max-md:gap-y-[20px] w-[100%] flex justify-between max-md:flex-col max-md:items-center  max-[500px]:px-[20px] ${lang === "Arabic" && "flex-row-reverse"}`}>
      <div className="w-[45%] max-md:w-full max-md:h-[400px]">
        <img
          src={globepht}
          alt=""
          className="orangegirl w-full max-md:h-full object-contain "
        />
      </div>
      <div className={`flex flex-col w-[45%] max-md:w-full items-start gap-y-[40px] max-[980px]:gap-y-[20px] ${lang === "Arabic" && "items-end"}`}>
        <div className="flex items-center gap-[10px] font-semibold text-[#fd4a36] text-[25px]">
          <ListNested className="text-[30px] pt-[2px]" />
          <p>{translations.StudyinGeorgia}</p>
        </div>

        <div className={`text-[18px] text-gray-600 max-[1000px]:text-[16px] ${lang === "Arabic" && "flex flex-col items-end"}`}>
          <p className="">
            <span className="font-semibold">{translations.Enrollexpert}</span> {translations.globe1}
          </p>
          <ul className={`list-disc ${lang === "Arabic" && "flex flex-col items-end"}`}>
            <li className={` ${lang === "Arabic" && "flex flex-row-reverse"}`}>
              <span className="font-semibold">{translations.Enrollexpert}</span>—{translations.globe2}
            </li>
            <li className={` ${lang === "Arabic" && "flex flex-row-reverse"}`}>
              <span className="font-semibold">{translations.Enrollexpert}</span> {translations.globe3}
            </li>
            <li className={` ${lang === "Arabic" && "flex flex-row-reverse"}`}>{translations.globe4}</li>
            <li className={` ${lang === "Arabic" && "flex flex-row-reverse"}`}>{translations.globe5}</li>
            <li className={` ${lang === "Arabic" && "flex flex-row-reverse"}`}>{translations.globe6}</li>
            <li className={` ${lang === "Arabic" && "flex flex-row-reverse"}`}>{translations.globe7}</li>
            <li className={` ${lang === "Arabic" && "flex flex-row-reverse"}`}>{translations.globe8}</li>
          </ul>
        </div>

        <p className="font-semibold text-gray-600 ">
          {translations.bottomtext}
        </p>
        <div className="">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="text-[70px] font-semibold max-[980px]:text-[50px]">
              {counterOn && (
                <CountUp start={0} end={1700} duration={2} delay={0} />
              )}
              +
            </h1>
          </ScrollTrigger>
          <p className="w-[180px] font-semibold text-[18px] max-[1025px]:text-[17px] max-[1025px]:w-[190px]">
            {translations.bottomtext2}
          </p>
        </div>

        {/* <div className="gap-[5px] text-white px-6 h-[60px] duration-200 bg-[#fd4a36] cursor-pointer hover:bg-[#070714] flex items-center justify-center text-[18px]">
          <h1 className="text-[18px]">ABOUT THE OFFER</h1>
          <ChevronRight />
        </div> */}
      </div>
    </div>
  );
}
