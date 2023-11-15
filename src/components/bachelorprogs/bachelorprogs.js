import { useContext } from "react";
import img from "../../images/bachs.webp";
import { MainLang } from "../languagesfiles/langContext";

export default function BachelorProgs() {
  const { translations, lang } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px] ${lang === "Arabic" && "items-end"}`}>
        <h1 className="text-[25px] font-semibold">
          {translations.bachtitle}
        </h1>
        <p className="text-[17px]">
        {translations.bachelortext1}
        </p>
        <p className="text-[17px]">
        {translations.bachelortext2}
        </p>
        <p className="text-[17px]">
        {translations.bachelortext3}
        </p>
        <div className="w-full h-[500px] flex justify-center">
          <img src={img} alt="" className="h-full object-contain" />
        </div>
        <div className="flex flex-wrap gap-[2%] gap-y-[50px]">
          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.bachultitleul1}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.bachli1}</li>
              <li>{translations.bachli2}</li>
              <li>{translations.bachli3}</li>
              <li>{translations.bachli4}</li>
              <li>{translations.bachli5}</li>
              <li>{translations.bachli6}</li>
              <li>{translations.bachli7}</li>
              <li>{translations.bachli8}</li>
              <li>{translations.bachli9}</li>
            </ul>
            <p className={`text-[17px] ${lang === "Arabic" && "text-end"}`}>
              {translations.bach1text}
            </p>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.bachultitleul2}
            </h1>
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.bachultitleul3}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.bachli10}</li>
              <li>{translations.bachli11}</li>
              <li>{translations.bachli12}</li>
              <li>{translations.bachli13}</li>
              <li>{translations.bachli14}</li>
              <li>{translations.bachli15}</li>
              <li>{translations.bachli16}</li>
            </ul>
            <p className={`text-[17px] ${lang === "Arabic" && "text-end"}`}>{translations.bach2text}</p>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.bachultitleul4}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.bachli17}</li>
              <li>{translations.bachli18}</li>
              <li>{translations.bachli19}</li>
              <li>{translations.bachli20}</li>
              <li>{translations.bachli21}</li>
              <li>{translations.bachli22}</li>
              <li>{translations.bachli23}</li>
              <li>{translations.bachli24}</li>
              <li>{translations.bachli25}</li>
            </ul>
            <p className={`text-[17px] ${lang === "Arabic" && "text-end"}`}>{translations.bach3text}</p>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.bachultitleul5}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.bachli26}</li>
              <li>{translations.bachli27}</li>
              <li>{translations.bachli28}</li>
              <li>{translations.bachli29}</li>
              <li>{translations.bachli30}</li>
            </ul>
            <p className={`text-[17px] ${lang === "Arabic" && "text-end"}`}>
            {translations.bach4text}
            </p>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.bachultitleul6}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.bachli31}</li>
              <li>{translations.bachli32}</li>
              <li>{translations.bachli33}</li>
              <li>{translations.bachli34}</li>
              <li>{translations.bachli35}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.bachultitleul7}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.bachli36}</li>
              <li>{translations.bachli37}</li>
              <li>{translations.bachli38}</li>
              <li>{translations.bachli39}</li>
              <li>{translations.bachli40}</li>
              <li>{translations.bachli41}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
