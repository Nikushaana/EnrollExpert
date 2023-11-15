import { ChevronRight, ListNested } from "react-bootstrap-icons";
import orangegirl from "../../images/orangegirl.webp"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function SecLivingGeorgia() {
  const { translations , lang } = useContext(MainLang);
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className={`more1800pxresp max-w-[1519px] py-[150px] px-[10%] w-[100%] flex justify-between max-md:flex-col max-md:items-center max-md:gap-y-[40px]  max-smaller:px-[20px] max-fouroo:py-[80px] ${lang === "Arabic" && "flex-row-reverse"}`}>
      <div className="flex flex-col w-[45%] items-start max-md:w-full">
        <div className="flex items-center gap-[10px] font-semibold text-[#fd4a36] text-[25px]">
          <ListNested className="text-[30px] pt-[2px]"/>
          <p>{translations.LIVINGINGEORGIA}</p>
        </div>
        <p className="text-[43px] font-semibold leading-[60px] max-[1080px]:text-[30px]">
          {translations.Professionalsmakeyourdreamseasier}
        </p>
        <p className="text-[20px] my-[40px] max-[1080px]:my-[20px] max-[1080px]:text-[17px]">
          <span>{translations.Enrollexpert}</span> {translations.livingingeorgiatext}
        </p>
        <Link to="/apply">
        <div  onClick={()=>{goToTopFast()}} className="gap-[5px] text-white px-6 h-[60px] duration-200 bg-[#fd4a36] cursor-pointer hover:bg-[#070714] flex items-center justify-center text-[18px]">
          <h1 className="text-[18px]">{translations.APPLYNOW}</h1>
          <ChevronRight />
        </div>
        </Link>
      </div>
      <div className="w-[45%] max-md:w-full max-md:h-[400px]">
        <img src={orangegirl} alt="" className="orangegirl w-full max-md:h-full object-contain "/>
      </div>
      <div >
      </div>
    </div>
  );
}
