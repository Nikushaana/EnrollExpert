import { BookFill, ChevronRight } from "react-bootstrap-icons";
import listprogrimg from "../../images/listprogramimg.webp";
import ThreeCard from "./threecard";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function ListOfPrograms() {
  const { translations, lang } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px] max-smaller:pt-[50px] max-[smaller]:px-[16px]">
        <div className={`flex w-full justify-between max-lg:flex-col-reverse max-lg:gap-y-[20px]  max-fouroo:gap-y-[50px] ${lang === "Arabic" && "flex-row-reverse"}`}>
          <div className="w-[48%] flex flex-col gap-y-[20px] max-lg:w-full">
            <div className="flex items-center gap-[10px]">
              <div className="w-[5px] h-[20px] bg-[#fd4a36]"></div>
              <h1 className="text-[#fd4a36] font-semibold text-[25px]">
                {translations.ListofPrograms}
              </h1>
            </div>
            <h1 className="font-semibold text-[25px]">
              {translations.listprog}
            </h1>
            <h1 className="font-semibold text-[20px]">
            {translations.listprog2}
            </h1>
            <h1 className="font-semibold text-[18px]">{translations.type1}</h1>
            <p className="text-[17px]">
              {translations.type1text}
            </p>

            <h1 className="font-semibold text-[18px]">
            {translations.type2}
            </h1>
            <p className="text-[17px]">
            {translations.type2text}
            </p>

            <h1 className="font-semibold text-[18px]">{translations.type3}</h1>
            <p className="text-[17px]">
            {translations.type3text}
            </p>
            <p className="text-[17px]">
            {translations.type3text2}
            </p>
            <p className="text-[17px]">
            {translations.type3text3}
            </p>
            <p className="text-[17px]">
            {translations.type3text4}
            </p>
            <p className="text-[17px]">
            {translations.type3text5}
            </p>
          </div>
          <div className="w-[48%] max-lg:w-full max-lg:items-center max-lg:h-[400px]">
            <img src={listprogrimg} alt="" className="w-full object-contain max-lg:h-full" />
          </div>
        </div>
        <ThreeCard/>
      </div>
    </div>
  );
}
