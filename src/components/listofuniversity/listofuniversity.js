import { useContext, useState } from "react";
import FirstSliderCard from "../mainpage/firstslidercard";
import { MainContext } from "../maincontext/mainContext";
import { MainLang } from "../languagesfiles/langContext";

export default function ListOfUniversity() {
  const { translations } = useContext(MainLang);
  const { firstsliderdata } = useContext(MainContext);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px] max-lg:px-[50px] max-smaller:px-[16px] max-smaller:pt-[50px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[5px] h-[20px] bg-[#fd4a36]"></div>
          <h1 className="text-[#fd4a36] font-semibold text-[25px]">
            {translations.ListofUniversities}
          </h1>
        </div>
        <p className="text-[18px] ml-[200px] max-smaller:ml-0">
          {translations.listofunivertext}
        </p>
        <div className="w-full flex flex-wrap gap-[2.66%] gap-y-[30px] max-[800px]:4%">
          {firstsliderdata.map((item) => (
            <div key={item.id} className="w-[31%] max-[880px]:h-[300px] max-md:w-[48%] max-smaller:w-full">
              <FirstSliderCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
