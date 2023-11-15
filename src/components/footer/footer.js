import { ChevronDoubleRight, Facebook, Instagram, Link45deg, Linkedin, Twitter } from "react-bootstrap-icons";
import enrollLogo from "../../images/enrollmainlogo.webp";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function Footer() {
  const location = useLocation()
  const { translations } = useContext(MainLang);

  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className={`w-full bg-[#070714] flex flex-col items-center ${(location.pathname.split("/")[1] === "admin" || location.pathname.split("/")[1] === "adminPanel") && "hidden"}`}>
      <div className="more1800pxresp max-w-[1519px] w-full px-[10%]  max-[500px]:px-[20px]">
        <div className="border-b-[1px] border-gray-600 gap-y-[30px] py-[50px] flex flex-wrap items-center justify-between ">
          <p className="text-white font-semibold w-[180px] text-[28px] max-[530px]:w-full">
            {translations.FOLOWTHEPROFESSIONALS}
          </p>
          <Link to="apply">
          <h1 onClick={()=>{goToTopFast()}} className="text-[18px] text-white px-6 h-[60px] duration-200 bg-[#fd4a36] cursor-pointer flex items-center justify-center">
            {translations.APPLYNOW}
          </h1>
          </Link>
        </div>
        <div className="flex w-full flex-wrap py-[50px] justify-between gap-y-[40px]">
          <div className="w-[23%] flex flex-col gap-y-[30px] max-[1025px]:w-[60%] max-[660px]:w-full">
            <div className="h-[60px]">
              <img src={enrollLogo} alt="" className="h-full object-contain" />
            </div>
            <p className="text-white text-[18px]">
              <span className="font-semibold">{translations.ENROLLEXPERT}</span> {translations.footerbigtext}
            </p>
          </div>

          <div className=" flex flex-col gap-y-[30px] text-white  max-[660px]:w-full">
            <h1 className="font-semibold text-[20px]">{translations.Ourservices}</h1>
            <ul className="flex flex-col gap-y-[15px]">
                <Link to="admission-process"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.AdmissionProcess}</p></li></Link>
                <Link to="visa"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.Visa}</p></li></Link>
                <Link to="residence-permit"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.Residencepermit}</p></li></Link>
                <Link to="accommodation"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.Accommodation}</p></li></Link>
            </ul>
          </div>

          <div className=" flex flex-col gap-y-[30px] text-white  max-[660px]:w-full">
            <h1 className="font-semibold text-[20px]">{translations.StudyinGeorgia}</h1>
            <ul className="flex flex-col gap-y-[15px]">
            <Link to="list-of-university"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.ListofUniversities}</p></li></Link>
            <Link to="list-of-programs"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.ListofPrograms}</p></li></Link>
            <Link to="faq"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.Faq}</p></li></Link>
            <Link to="aboutus"><li onClick={()=>{goToTopFast()}} className="flex items-center gap-[10px] hover:text-[#fd4a36] duration-200 cursor-pointer"><ChevronDoubleRight/><p>{translations.Aboutus}</p></li></Link>
            </ul>
          </div>

          <div className=" flex flex-col gap-y-[30px] text-white  max-[660px]:w-full">
            <h1 className="font-semibold text-[20px]">{translations.BasicInformation}</h1>
            <ul className="flex flex-col gap-y-[15px]">
                <li className="flex items-center gap-[10px]"><p>{translations.Location}:</p><p>Kostavas 74a, Tbilisi, Georgia</p></li>
                <li className="flex items-center gap-[10px]"><p>{translations.PhoneCall}:</p><p>+995 550 05 55 55</p></li>
                <li className="flex items-center gap-[10px]"><p>{translations.Email}:</p><p>info@enrollexpert.com</p></li>
            </ul>
          </div>

        </div>
      </div>
      <div className="more1800pxresp w-full border-t-[1px] border-t-gray-600 text-white flex justify-center py-[40px]">
        <p>© Enrollexpert 2023 | Developed By Artspace
          {/* {translations.allrightsreserved} */}
          </p>
      </div>
    </div>
  );
}
