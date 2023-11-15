import { Dot, ListNested } from "react-bootstrap-icons";
import zaza from "../../images/zazagonashvili-PhotoRoom.png-PhotoRoom.png";
import { Link } from "react-router-dom";
import { MainLang, MainLangCont } from "../languagesfiles/langContext";
import { useContext, useState } from "react";

export default function FirstBanner() {
  const { translations } = useContext(MainLang);

  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="w-full bg-[#070714] flex justify-center">
      <div className="more1800pxresp max-w-[1519px]  max-fouroo:w-[1521px] pl-[15%] pr-[10px] w-[100%] flex items-center justify-between max-[1025px]:px-[40px] max-[500px]:px-[20px] max-md:flex-col">
        <div className="items-start flex-col  flex gap-y-[20px] w-[50%] py-[80px]  max-md:w-full max-md:pb-0">
          <div className="flex items-center gap-[10px] text-[#fd4a36] pb-[10px] max-[400px]:text-[13px]">
            <ListNested className="max-[400px]:hidden" />
            <p>{translations.FOLOWTHEPROFESSIONALS}</p>
          </div>
          <p className="text-[70px] text-white my-[-30px] max-[1025px]:text-[60px] max-[880px]:text-[40px] max-smaller:text-[30px]">
            {translations.StudyinGeorgia}
          </p>
          <p className="text-[40px] text-white  max-smaller:text-[20px]  max-smaller:pt-[20px]">
            {translations.Applyforfree}
          </p>
          <ul className="text-[18px] max-smaller:text-[16px]">
            <li className="flex items-center gap-[5px] text-white">
              <Dot />
              <p>{translations.Universityenrollment}</p>
            </li>
            <li className="flex items-center gap-[5px] text-white">
              <Dot />
              <p>{translations.Residencepermit}</p>
            </li>
            <li className="flex items-center gap-[5px] text-white">
              <Dot />
              <p>{translations.StudentVisa}</p>
            </li>
            <li className="flex items-center gap-[5px] text-white">
              <Dot />
              <p>{translations.Accommodationprovision}</p>
            </li>
          </ul>
          <Link to="/apply">
            <h1
              onClick={() => {
                goToTopFast();
              }}
              className="px-6 h-[60px] max-smaller:h-[50px] duration-200 text-white bg-[#fd4a36] cursor-pointer hover:text-[#fd4a36] hover:bg-white flex items-center justify-center text-[18px]"
            >
              {translations.APPLYNOW}
            </h1>
          </Link>
          <p className="text-white text-[18px] max-smaller:text-[16px]">
            {translations.Adviceyoucantrustresultsyoucansee} - Zaza Gonashvili{" "}
            {translations.founderofEnrollExpert}
          </p>
        </div>
        <div className="w-[50%] h-[620px] max-xl:h-[720px]   max-md:h-[400px] max-md:w-full flex items-center justify-center">
          <div className="h-full w-[370px] max-smaller:w-auto max-xl:w-[420px]">
            <img
              src={zaza}
              alt=""
              className="h-full w-full object-cover max-md:object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
