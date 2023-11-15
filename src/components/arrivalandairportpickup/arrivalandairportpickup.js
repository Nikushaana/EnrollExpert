import SerrvsProfessio from "../accommodation/servsprofessio";
import arrive from "../../images/arrive.webp";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";
export default function ArrivalAirportPickup() {
  const { translations, lang } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px]  max-smaller:pt-[50px] max-smaller:px-[16px]  ${
          lang === "Arabic" && "items-end"
        }`}
      >
        <h1>{translations.ARRIVALANDAIRPORTPICKUP}</h1>
        <p className={`${lang === "Arabic" && "text-end"}`}>
          {translations.arrivalairporttext}
        </p>
        <div className="w-full flex justify-center">
          <div className="flex justify-center h-[400px] max-[760px]:h-[400px] max-[450px]:h-[200px]">
            <img
              src={arrive}
              alt=""
              className=" h-full rounded-[15px] object-contain"
            />
          </div>
        </div>
        <SerrvsProfessio />
      </div>
    </div>
  );
}
