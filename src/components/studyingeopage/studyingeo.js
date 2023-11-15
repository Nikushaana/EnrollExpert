import { useContext } from "react";
import man from "../../images/man.webp";
import ThreeCard from "../listofprograms/threecard";
import { MainLang } from "../languagesfiles/langContext";
export default function StudyInGeo() {
  const { translations } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px] max-smaller:px-[16px]">
        <div className="flex gap-[2%] max-sm:flex-col  max-sm:gap-y-[30px]">
          <div className="w-[48%] max-sm:w-full max-sm:h-[400px]">
            <img src={man} alt="" className="w-full max-sm:h-full object-contain" />
          </div>
          <div className="w-[48%] flex flex-col gap-y-[30px]  max-sm:w-full">
            <div className="flex items-center gap-[10px]">
              <div className="w-[5px] h-[20px] bg-[#fd4a36]"></div>
              <h1 className="text-[#fd4a36] font-semibold text-[25px]">
                {translations.StudyinGeorgia}
              </h1>
            </div>
            <h1 className="font-semibold text-[25px]">
              {translations.studyingeotext1}
            </h1>
            <p className="text-[18px]">
              {translations.studyingeotext2}
            </p>
            <p className="text-[18px] font-semibold">
              {translations.studyingeotext3}
            </p>
            <h1 className="font-semibold text-[23px]">
              {translations.studyingeotext4}
            </h1>
            <h1 className="font-semibold text-[23px]">{translations.type1}</h1>
            <p className="text-[18px]">
              {translations.type1text}
            </p>
            <h1 className="font-semibold text-[23px]">
              {translations.type2}
            </h1>
            <p className="text-[18px]">
              {translations.type2text}
            </p>
          </div>
        </div>
        <h1 className="font-semibold text-[23px]">{translations.type3}</h1>
        <p className="text-[18px]">
          {translations.type3text}
          {translations.type3text2}
        </p>
        <h1 className="font-semibold text-[23px]">{translations.WhatisanAuthorization}</h1>
        <p className="text-[18px]">
          {translations.type3text3}
        </p>
        <p className="text-[18px]">
          {translations.type3text4}
        </p>
        <p className="text-[18px]">
          {translations.type3text5}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext5}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext6}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext7}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext8}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext9}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext10}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext11}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext12}
        </p>
        <p className="text-[18px]">
          {translations.studyingeotext13}
        </p>
        <h1 className="font-semibold text-[18px]">{translations.studyingeotext14}</h1>
        <ThreeCard/>
      </div>
    </div>
  );
}
