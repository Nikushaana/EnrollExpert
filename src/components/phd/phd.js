import { useContext } from "react";
import img from "../../images/girlhathand.webp";
import { MainLang } from "../languagesfiles/langContext";

export default function Phd() {
  const { translations, lang } = useContext(MainLang);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px]">
        <h1 className="text-[25px] font-semibold">
        {translations.phdtitle}
        </h1>
        <p className="text-[17px] font-semibold">
        {translations.phdtitle2}
        </p>
        <p className="text-[17px]">
        {translations.phdtext1}
        </p>
        <p className="text-[17px]">
        {translations.phdtext2}        </p>
        <p className="text-[17px]">
        {translations.phdtext3}
        </p>
        <p className="text-[17px]">
        {translations.phdtext4}
        </p>
        <div className="w-full h-[500px] flex justify-center">
          <img src={img} alt="" className="h-full object-contain" />
        </div>
        <div className="flex flex-wrap gap-[2%] gap-y-[50px]">
          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className="text-[23px] font-semibold">
            {translations.phderul1}
            </h1>
            <h1 className="text-[23px] font-semibold">
            {translations.phderul2}            </h1>
            <ul className="list-disc text-[17px] text-gray-800">
              <li>{translations.phdli1}</li>
              <li>{translations.phdli2}</li>
              <li>{translations.phdli3}</li>
              <li>{translations.phdli4}</li>
              <li>{translations.phdli5}</li>
              <li>{translations.phdli6}</li>
              <li>{translations.phdli7}</li>
              <li>{translations.phdli8}</li>
              <li>{translations.phdli9}</li>
              <li>{translations.phdli10}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className="text-[23px] font-semibold">
            {translations.phderul1}
            </h1>
            <h1 className="text-[23px] font-semibold">
            {translations.phderul2}            </h1>
            <ul className="list-disc text-[17px] text-gray-800">
              <li>{translations.phdli1}</li>
              <li>{translations.phdli2}</li>
              <li>{translations.phdli3}</li>
              <li>{translations.phdli4}</li>
              <li>{translations.phdli5}</li>
              <li>{translations.phdli6}</li>
              <li>{translations.phdli7}</li>
              <li>{translations.phdli8}</li>
              <li>{translations.phdli9}</li>
              <li>{translations.phdli10}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className="text-[23px] font-semibold">
            {translations.phderul3}
            </h1>
            <ul className="list-disc text-[17px] text-gray-800">
              <li>{translations.phdli11}</li>
              <li>{translations.phdli12}</li>
              <li>{translations.phdli13}</li>
              <li>{translations.phdli14}</li>
              <li>{translations.phdli15}</li>
              <li>{translations.phdli16}</li>
              <li>{translations.phdli17}</li>
              <li>{translations.phdli18}</li>
              <li>{translations.phdli19}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[20px] w-[49%]">
            <h1 className="text-[23px] font-semibold">
            {translations.phderul3}
            </h1>
            <ul className="list-disc text-[17px] text-gray-800">
              <li>{translations.phdli11}</li>
              <li>{translations.phdli12}</li>
              <li>{translations.phdli13}</li>
              <li>{translations.phdli14}</li>
              <li>{translations.phdli15}</li>
              <li>{translations.phdli16}</li>
              <li>{translations.phdli17}</li>
              <li>{translations.phdli18}</li>
              <li>{translations.phdli19}</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}