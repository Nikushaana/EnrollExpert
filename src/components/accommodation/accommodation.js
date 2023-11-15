import { CheckLg } from "react-bootstrap-icons";
import aplicatimg from "../../images/accommoda.webp";
import SerrvsProfessio from "./servsprofessio";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";


export default function Accommodation() {
  const { translations,lang } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px]  max-smaller:pt-[50px] max-smaller:px-[16px] ${lang === "Arabic" && "flex flex-col items-end"}`}>
        <h1 className="font-semibold text-[30px]">
          {translations.accommtitle}
        </h1>
        <p className="text-[18px]">
          {translations.accommtext1}
        </p>
        <p className="text-[18px]">
        {translations.accommtext2}
        </p>
        <p className="text-[18px]">
        {translations.accommtext3}
        </p>

        <h1 className="text-[18px] font-semibold">
        {translations.accommtext4}
        </h1>

        <ul className={`list-disc ${lang === "Arabic" && "flex flex-col items-end"}`}>
          <li className="font-semibold text-[18px]">{translations.accommli1}</li>
          <li className="font-semibold text-[18px]">{translations.accommli2}</li>
          <li className="font-semibold text-[18px]">{translations.accommli3}</li>
          <li className="font-semibold text-[18px]">{translations.accommli4}
          </li>
          <li className="font-semibold text-[18px]">{translations.accommli5}</li>
          <li className="font-semibold text-[18px]">{translations.accommli6}</li>
          <li className="font-semibold text-[18px]">{translations.accommli7}</li>
          <li className="font-semibold text-[18px]">{translations.accommli8}</li>
          <li className="font-semibold text-[18px]">{translations.accommli9}</li>
          <li className="font-semibold text-[18px]">{translations.accommli10}</li>
          <li className="font-semibold text-[18px]">{translations.accommli11}</li>
        </ul>
        <div className="w-full flex justify-center">
          <div className="h-[500px] max-md:h-[400px] max-fourfiveo:h-[200px]">
            <img
              src={aplicatimg}
              alt=""
              className="h-full object-contain rounded-[15px]"
            />
          </div>
        </div>

        <h1 className="font-semibold text-[30px]">
        {translations.accommtitle2}
        </h1>

        <ul className={`list-disc ${lang === "Arabic" && "flex flex-col items-end"}`}>
          <li className="font-semibold text-[18px]">
          {translations.accommli12}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.accommli13}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.accommli14}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.accommli15}
          </li>
        </ul>

        <p className=" text-[18px]">
        {translations.accommli16}
        </p>

        <h1 className="font-semibold mt-[30px] text-[30px]">
        {translations.accommtitle3}
        </h1>

        <ul className={`list-disc ${lang === "Arabic" && "flex flex-col items-end"}`}>
          <li className="font-semibold text-[18px]">
          {translations.accommli17}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.accommli18}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.accommli19}
          </li>
        </ul>

        <p className=" text-[18px] font-semibold">
          {translations.accommtext6}
        </p>
        <p className=" text-[18px] font-semibold">
        {translations.accommtext7}
        </p>
        <p className=" text-[18px] font-semibold">
        {translations.accommtext8}
        </p>
        <p className=" text-[18px] font-semibold">
        {translations.accommtext9}
        </p>

        <p className="font-semibold mt-[60px] mb-[30px]">{translations.Moreaboutapartmentcosts}</p>

        <a href="https://www.myhome.ge/ka/">
          <div className="flex items-center gap-[20px]">
            <div className="w-[30px] h-[30px] rounded-full text-[18px] duration-150 flex items-center justify-center text-white cursor-pointer hover:text-gray-800 bg-[#fd4a36]">
              <CheckLg />
            </div>
            <p className="text-[18px] font-semibold">Myhome.ge</p>
          </div>
        </a>
        <a href="https://ss.ge/ka/udzravi-qoneba">
          <div className="flex items-center gap-[20px]">
            <div className="w-[30px] h-[30px] rounded-full text-[18px] duration-150 flex items-center justify-center text-white cursor-pointer hover:text-gray-800 bg-[#fd4a36]">
              <CheckLg />
            </div>
            <p className="text-[18px] font-semibold">ss.ge</p>
          </div>
        </a>
        <SerrvsProfessio/>
      </div>
    </div>
  );
}
