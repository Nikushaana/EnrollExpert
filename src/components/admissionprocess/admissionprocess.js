import { ChevronDoubleRight } from "react-bootstrap-icons";
import menwomen from "../../images/manwomen.webp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function AdmissionProcess() {
  const { translations, lang } = useContext(MainLang);
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px] max-smaller:pt-[50px] max-smaller:px-[26px] ${lang === "Arabic" && "items-end"}`}>
        <h1 className="font-semibold text-[30px]">
          {translations.admisstext1}
        </h1>
        <p className="text-[18px]">
          Any international student’s decision to continue their studies in a
          foreign country is fraught with emotion for both the student and their
          parents. However, with the assistance of the Enroll expert team,
          studying in Georgia and organizing the university admission process is
          far easier than they anticipate.
        </p>
        <p className="text-[18px]">
        {translations.admisstext2}
        </p>
        <p className="text-[18px]">
        {translations.admisstext3}
        </p>
        <p className="text-[18px]">
          After you have decided which university and programme you want to
          study in Georgia, familiarize yourself with the list of documents and
          personal information you’ll need for registration.
        </p>

        <ul className={`list-decimal ${lang === "Arabic" && "flex flex-col items-end"}`}>
          <li className="font-semibold text-[18px]">
            {translations.admlist1}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.admlist2}
          </li>
          <li className="font-semibold text-[18px]">
            A bachelor’s degree (if you intend to pursue a master’s degree);
          </li>
          <li className="font-semibold text-[18px]">
            {translations.admlist3}
          </li>
          <li className="font-semibold text-[18px]">
            your birth certificate and parent’s passport (if you are under the
            age of 18);
          </li>
          <li className="font-semibold text-[18px]">
            {translations.admlist4}
          </li>
        </ul>

        <p className="text-[18px]">
          The documents listed above should be sent to info@enrolexpert.com, via
          WhatsApp, or using Enroll Expert’s apply function (link).
        </p>
        <p className="text-[18px]">
          {translations.admisstext4}
        </p>
        <p className="text-[18px]">
        {translations.admisstext5}
        </p>
        <p className="text-[18px]">
        {translations.admisstext6}
        </p>

        <h1 className={`text-[18px] font-semibold ${lang === "Arabic" && "text-end"}`}>
        {translations.admisstext7}
        </h1>
        <div className="w-full h-[600px] flex items-center justify-center max-[760px]:h-[400px] max-[450px]:h-[200px] ">
          <img
            src={menwomen}
            alt=""
            className=" h-full object-contain rounded-[15px]"
          />
        </div>
        <h1 className="text-[18px] font-semibold">
          documents and personal information you’ll need for registration.
        </h1>
        <p className="text-[18px]">
          After you have decided which university and programme you want to
          study in Georgia, familiarize yourself with the list of documents and
          personal information you’ll need for registration.
        </p>
        <ul className={`list-decimal ${lang === "Arabic" && "flex flex-col items-end"}`}>
          <li className="font-semibold text-[18px]">
            {translations.admlist1}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.admlist2}
          </li>
          <li className="font-semibold text-[18px]">
            A bachelor’s degree (if you intend to pursue a master’s degree);
          </li>
          <li className="font-semibold text-[18px]">
            {translations.admlist3}
          </li>
          <li className="font-semibold text-[18px]">
            your birth certificate and parent’s passport (if you are under the
            age of 18);
          </li>
          <li className="font-semibold text-[18px]">
            {translations.admlist4}
          </li>
        </ul>

<Link to="/contact">
        <div onClick={()=>{goToTopFast()}} className="mt-[60px] flex items-center gap-[10px] cursor-pointer">
            <div className="w-[50px] h-[50px] rounded-full flex text-[25px] items-center text-white hover:text-gray-800 duration-200 justify-center bg-[#fd4a36]">
                <ChevronDoubleRight/>
            </div>
            <p className="text-[18px]">{translations.Contact}</p>
        </div>
        </Link>
      </div>
    </div>
  );
}
