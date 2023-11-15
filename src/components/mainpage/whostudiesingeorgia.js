import { ChevronRight } from "react-bootstrap-icons";
import first from "../../images/11.png";
import sec from "../../images/22.png";
import third from "../../images/33.png";
import fourth from "../../images/44.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function WhoStudiesinGeorgia() {
  const { translations, lang } = useContext(MainLang);
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className="w-full flex flex-col items-center py-[50px] gap-y-[20px]">
      <h1 className="w-[400px] max-smaller:w-full text-center text-[#fd4a36] text-[30px] font-semibold">
        {translations.WHOISTHISSERVICEINTENDEDFOR}
      </h1>
      <p className="text-[25px] font-semibold mb-[50px] text-center">
        {translations.Forinternational}
      </p>
      <div className={`w-full flex flex-wrap gap-[2.66%] max-[1025px]:gap-[4%] ${lang==="Arabic" && "flex-row-reverse"}`}>
        <div className="imageexps w-[23%] border-t-[2px] border-t-[#070714] p-[30px] flex flex-col group gap-y-[20px] hover:bg-[#070714] duration-200 max-[1025px]:w-[48%] max-fouroo:w-full max-[570px]:w-full">
          <div className="imageexperience w-[70px] h-[70px]  duration-200">
            <img src={first} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="font-semibold text-[18px] group-hover:text-white duration-200 hover:text-[#fd4a36]">
            {translations.Universitieslist}
          </p>
          <p className="text-gray-500">
            {translations.Universitieslisttext}
          </p>
          <Link to="list-of-university">
            <div onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] text-[#fd4a36] group-hover:text-white duration-200">
              <p className="underline cursor-pointer">{translations.LEARNMORE}</p>
              <ChevronRight />
            </div>
          </Link>
        </div>

        <div className="imageexps w-[23%] border-t-[2px] border-t-[#070714] p-[30px] flex flex-col group gap-y-[20px] hover:bg-[#070714] duration-200 max-[1025px]:w-[48%] max-fouroo:w-full max-[570px]:w-full">
          <div className="imageexperience w-[70px] h-[70px]  duration-200">
            <img src={sec} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="font-semibold text-[18px] group-hover:text-white duration-200 hover:text-[#fd4a36]">
            {translations.Programmeslist}
          </p>
          <p className="text-gray-500">
            {translations.Programmeslisttext}
          </p>
          <Link to="list-of-programs">
            <div onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] text-[#fd4a36] group-hover:text-white duration-200">
              <p className="underline cursor-pointer">{translations.LEARNMORE}</p>
              <ChevronRight />
            </div>
          </Link>
        </div>

        <div className="imageexps w-[23%] border-t-[2px] border-t-[#070714] p-[30px] flex flex-col group gap-y-[20px] hover:bg-[#070714] duration-200 max-[1025px]:w-[48%] max-fouroo:w-full max-[570px]:w-full">
          <div className="imageexperience w-[70px] h-[70px]  duration-200">
            <img src={third} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="font-semibold text-[18px] group-hover:text-white duration-200 hover:text-[#fd4a36]">
            {translations.Ourservices}
          </p>
          <p className="text-gray-500">
            {translations.Ourserviceslisttext}
          </p>
          <div onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] text-[#fd4a36] group-hover:text-white duration-200">
            <p className="underline cursor-pointer">{translations.LEARNMORE}</p>
            <ChevronRight />
          </div>
        </div>

        <div className="imageexps w-[23%] border-t-[2px] border-t-[#070714] p-[30px] flex flex-col group gap-y-[20px] hover:bg-[#070714] duration-200 max-[1025px]:w-[48%] max-fouroo:w-full max-[570px]:w-full">
          <div className="imageexperience w-[70px] h-[70px]  duration-200">
            <img src={fourth} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="font-semibold text-[18px] group-hover:text-white duration-200 hover:text-[#fd4a36]">
            {translations.Aboutus}
          </p>
          <p className="text-gray-500">
            {translations.aboutustext}
          </p>
          <Link to="aboutus">
            <div onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] text-[#fd4a36] group-hover:text-white duration-200">
              <p className="underline cursor-pointer">{translations.LEARNMORE}</p>
              <ChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
