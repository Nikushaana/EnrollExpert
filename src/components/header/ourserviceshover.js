import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainLang } from "../languagesfiles/langContext";

export default function Ourserviceshover() {
  const { translations } = useContext(MainLang);
  return (
    <div className="bg-white rounded-[10px] p-[15px] w-[210px] shadow">
      <Link to="/admission-process">
        <p className="border-b-[1px] border-gray-300 p-[15px]  text-[16px]">
          {translations.AdmissionProcess}
        </p>
      </Link>
      <Link to="/visa">
        <p className="border-b-[1px] border-gray-300 p-[15px]  text-[16px]">{translations.Visa}</p>
      </Link>
      <Link to="/residence-permit">
        <p className="border-b-[1px] border-gray-300 p-[15px] text-[16px]">
        {translations.Residencepermit}
        </p>
      </Link>
      <Link to="/accommodation">
        <p className="border-b-[1px] border-gray-300 p-[15px] text-[16px]">{translations.Accommodation}</p>
      </Link>
      <Link to="/arrival-and-airport-pickup">
        <p className="p-[15px] text-[16px]">{translations.ArrivalandairportPickup}</p>
      </Link>
    </div>
  );
}
