import { useContext } from "react";
import { BookFill, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { MainLang } from "../languagesfiles/langContext";

export default function ThreeCard() {
  const { translations,lang } = useContext(MainLang);
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className={`w-full flex gap-[3.5%] flex-wrap ${lang === "Arabic" && "flex-row-reverse"}`}>
      <div className="imageexps w-[31%] border-t-[2px] border-t-[#070714] p-[30px] flex flex-col group gap-y-[20px] hover:bg-[#070714] duration-200 max-md:w-full max-md:px-0">
        <div className="imageexperience w-[70px] h-[70px] text-[50px] flex items-center justify-center duration-200 text-[#fd4a36]">
          <BookFill />
        </div>
        <p className="font-semibold text-[27px] group-hover:text-white duration-200 hover:text-[#fd4a36]">
          {translations.BachelorsDegree}
        </p>
        <p className="text-gray-500 text-[17px]">
          {translations.bachtext1}
        </p>
        <p className="text-gray-500 text-[17px]">
          {translations.bachtext2}
        </p>
        <Link to="/bachelorprogs">
          <div onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] text-[#fd4a36] group-hover:text-white duration-200">
            <p className="underline cursor-pointer">{translations.LEARNMORE}</p>
            <ChevronRight />
          </div>
        </Link>
      </div>

      <div className="imageexps w-[31%] border-t-[2px] border-t-[#070714] p-[30px] flex flex-col group gap-y-[20px] hover:bg-[#070714] duration-200 max-md:w-full max-md:px-0">
        <div className="imageexperience w-[70px] h-[70px]  text-[50px] flex items-center justify-center duration-200 text-[#fd4a36]">
          <BookFill />
        </div>
        <p className="font-semibold text-[27px] group-hover:text-white duration-200 hover:text-[#fd4a36]">
          {translations.MastersDegree}
        </p>
        <p className="text-gray-500 text-[17px]">
          {translations.masttext}
        </p>
        <Link to="/masterdeg">
        <div onClick={()=>{goToTopFast()}}  className="flex items-center gap-[10px] text-[#fd4a36] group-hover:text-white duration-200">
          <p className="underline cursor-pointer">{translations.LEARNMORE}</p>
          <ChevronRight />
        </div>
        </Link>
      </div>

      <div className="imageexps w-[31%] border-t-[2px] border-t-[#070714] p-[30px] flex flex-col group gap-y-[20px] hover:bg-[#070714] duration-200 max-md:w-full max-md:px-0">
        <div className="imageexperience w-[70px] h-[70px]  text-[50px] flex items-center justify-center duration-200 text-[#fd4a36]">
          <BookFill />
        </div>
        <p className="font-semibold text-[27px] group-hover:text-white duration-200 hover:text-[#fd4a36]">
          {translations.Doctorate}
        </p>
        <p className="text-gray-500 text-[17px]">
          {translations.doctortext}
        </p>
        <Link to="/phd">
        <div onClick={()=>{goToTopFast()}}  className="flex items-center gap-[10px] text-[#fd4a36] group-hover:text-white duration-200">
          <p className="underline cursor-pointer">{translations.LEARNMORE}</p>
          <ChevronRight />
        </div>
        </Link>
      </div>
    </div>
  );
}
