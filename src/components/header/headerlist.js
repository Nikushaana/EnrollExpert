import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Studyingeorgiahover from "./studyingeorgiahover";
import Ourserviceshover from "./ourserviceshover";
import WhyGeorgiahover from "./whygeorgiahover";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function HeaderList() {
  const { translations,lang } = useContext(MainLang);
  return (
    <div className=" h-full max-[1025px]:hidden">
      <ul className={`flex items-center gap-4  text-[18px] h-full ${lang === "Arabic" && "flex-row-reverse"}`}>
        <li className="cursor-pointer  h-full group relative  flex items-center gap-1">
          <Link to="/study-in-georgia">
            <p className="group-hover:text-[#fd4a36] text-white duration-200">
              {translations.StudyinGeorgia}
            </p>
          </Link>
          <ChevronDown className="text-[16px] group-hover:text-[#fd4a36] text-white duration-200" />
          <div className="z-[-1] opacity-0 group-hover:opacity-100 group-hover:z-[10] absolute top-[120px] left-[-15px]  transition-x-[10px] ease-in-out group-hover:translate-x-[-10px] duration-300">
            <Studyingeorgiahover />
          </div>
        </li>
        <li className="cursor-pointer  h-full group relative  flex items-center gap-1">
          <p className="group-hover:text-[#fd4a36] text-white duration-200">
          {translations.Ourservices}
          </p>
          <ChevronDown className="text-[16px] group-hover:text-[#fd4a36] text-white duration-200" />
          <div className="z-[-1] opacity-0 group-hover:opacity-100 group-hover:z-[10] absolute top-[120px] left-[-15px]  transition-x-[10px] ease-in-out group-hover:translate-x-[-10px] duration-300">
            <Ourserviceshover />
          </div>
        </li>
        <li className="cursor-pointer  h-full group relative  flex items-center gap-1">
          <p className="group-hover:text-[#fd4a36] text-white duration-200">
          {translations.WhyGeorgia}
          </p>
          <ChevronDown className="text-[16px] group-hover:text-[#fd4a36] text-white duration-200" />
          <div className="z-[-1] opacity-0 group-hover:opacity-100 group-hover:z-[10] absolute top-[120px] left-[-15px] transition-x-[10px] ease-in-out group-hover:translate-x-[-10px] duration-300">
            <WhyGeorgiahover />
          </div>
        </li>
        <Link to="/aboutus">
          <li className="cursor-pointer hover:text-[#fd4a36] h-full duration-200 flex items-center">
            <p className="hover:text-[#fd4a36] text-white duration-200">
            {translations.Aboutus}
            </p>
          </li>
        </Link>
        <Link to="/faq">
          <li className="cursor-pointer hover:text-[#fd4a36] h-full duration-200 flex items-center">
            <p className="hover:text-[#fd4a36] text-white duration-200">{translations.Faq}</p>
          </li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer hover:text-[#fd4a36] h-full duration-200 flex items-center">
            <p className="hover:text-[#fd4a36] text-white duration-200">
            {translations.Contact}
            </p>
          </li>
        </Link>
        <Link to="/apply">
          <li className="cursor-pointer hover:text-[#fd4a36] h-full duration-200 flex items-center">
            <p className="hover:text-[#fd4a36] text-white duration-200">
            {translations.Apply}
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
