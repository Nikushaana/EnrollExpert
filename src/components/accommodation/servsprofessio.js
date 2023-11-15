import { Link } from "react-router-dom";
import q from "../../images/q.png";
import qq from "../../images/qq.png";
import qqq from "../../images/qqq.png";
import qqqq from "../../images/qqqq.png";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function SerrvsProfessio() {
  const { translations,lang } = useContext(MainLang);
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className={`max-md:gap-y-[20px]  max-md:flex  max-md:flex-col ${lang === "Arabic" && "flex flex-col items-end"}`}>
      <h1 className="font-semibold text-[30px]">{translations.Ourservices}</h1>
      <div className={`flex flex-wrap gap-[2%] gap-y-[30px] ${lang === "Arabic" && "flex-row-reverse justify-end"}`}>
        <Link to="/admission-process" className="w-[49%] max-md:w-full">
          <div
            onClick={() => {
              goToTopFast();
            }}
            className=" flex items-center gap-[20px] cursor-pointer"
          >
            <div className="w-[80px] h-[80px] ">
              <img src={q} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="font-semibold text-[22px]">{translations.AdmissionProcess}</p>
          </div>
        </Link>
        <Link to="/visa"  className="w-[49%] max-md:w-full">
          <div
            onClick={() => {
              goToTopFast();
            }}
            className="flex items-center gap-[20px] cursor-pointer"
          >
            <div className="w-[80px] h-[80px] ">
              <img src={qqqq} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="font-semibold text-[22px]">{translations.Visa}</p>
          </div>
        </Link>
        <Link to="/residence-permit"  className="w-[49%] max-md:w-full">
          <div
            onClick={() => {
              goToTopFast();
            }}
            className=" flex items-center gap-[20px] cursor-pointer"
          >
            <div className="w-[80px] h-[80px] ">
              <img src={qqq} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="font-semibold text-[22px]">{translations.Residencepermit}</p>
          </div>
        </Link>
        <Link to="/accommodation"  className="w-[49%] max-md:w-full">
          <div
            onClick={() => {
              goToTopFast();
            }}
            className=" flex items-center gap-[20px] cursor-pointer"
          >
            <div className="w-[80px] h-[80px] ">
              <img src={qq} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="font-semibold text-[22px]">{translations.Accommodation}</p>
          </div>
        </Link>
      </div>
      <h1 className="font-semibold mt-[10px] text-[30px]">
        {translations.ourservtext1}
      </h1>
      <p className="text-[18px] font-semibold">
      {translations.ourservtext2}
      </p>
    </div>
  );
}
