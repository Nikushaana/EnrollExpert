import { useContext } from "react";
import img from "../../images/hats.webp";
import { MainLang } from "../languagesfiles/langContext";

export default function MasterDeg() {
  const { translations, lang } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px] ${lang === "Arabic" && "items-end"}`}>
        <h1 className="text-[25px] font-semibold">
          {translations.mastertitle1}
        </h1>
        <p className="text-[17px] font-semibold">
        {translations.mastertitle2}
        </p>
        <p className="text-[17px]">
        {translations.mastertext1}
        </p>
        <p className="text-[17px]">
        {translations.mastertext2}
        </p>
        <p className="text-[17px]">
        {translations.mastertext3}
        </p>
        <p className="text-[17px]">
        {translations.mastertext4}
        </p>
        <div className="w-full h-[500px] text-center">
          <img src={img} alt="" className="h-full object-contain" />
        </div>
        <div className="flex flex-wrap gap-[2%] gap-y-[50px] max-[700px]:flex-col">
          <div className={`flex flex-col gap-y-[20px] w-[49%]  max-[700px]:w-full ${lang === "Arabic" && "items-end"}`}>
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul1}
            </h1>
            <h1 className={`text-[23px] font-semibold  ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul2}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.mastli1}</li>
              <li>{translations.mastli2}</li>
              <li>{translations.mastli3}</li>
              <li>{translations.mastli4}</li>
              <li>{translations.mastli5}</li>
              <li>{translations.mastli6}</li>
              <li>{translations.mastli7}</li>
              <li>{translations.mastli8}</li>
              <li>{translations.mastli9}</li>
              <li>{translations.mastli10}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]  max-[700px]:w-full">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul3}
            </h1>
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul4}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.mastli11}</li>
              <li>{translations.mastli12}</li>
              <li>{translations.mastli13}</li>
              <li>{translations.mastli14}</li>
              <li>{translations.mastli15}</li>
              <li>{translations.mastli16}</li>
              <li>{translations.mastli17}</li>
              <li>{translations.mastli18}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]  max-[700px]:w-full">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul5}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.mastli19}</li>
              <li>{translations.mastli20}</li>
              <li>{translations.mastli21}</li>
              <li>{translations.mastli22}</li>
              <li>{translations.mastli23}</li>
              <li>{translations.mastli24}</li>
              <li>{translations.mastli25}</li>
              <li>{translations.mastli26}</li>
              <li>{translations.mastli27}</li>
              <li>{translations.mastli28}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]  max-[700px]:w-full">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul6}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.mastli29}</li>
              <li>{translations.mastli30}</li>
              <li>{translations.mastli31}</li>
              <li>{translations.mastli32}</li>
              <li>{translations.mastli33}</li>
              <li>{translations.mastli34}</li>
              <li>{translations.mastli35}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]  max-[700px]:w-full">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul7}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.mastli36}</li>
              <li>{translations.mastli37}</li>
              <li>{translations.mastli38}</li>
              <li>{translations.mastli39}</li>
              <li>{translations.mastli40}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[20px] w-[49%]  max-[700px]:w-full">
            <h1 className={`text-[23px] font-semibold ${lang === "Arabic" && "text-end"}`}>
            {translations.masterul8}
            </h1>
            <ul className={`list-disc text-[17px] text-gray-800 ${lang === "Arabic" && "flex flex-col items-end"}`}>
              <li>{translations.mastli41}</li>
              <li>{translations.mastli42}</li>
              <li>{translations.mastli43}</li>
              <li>{translations.mastli44}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
