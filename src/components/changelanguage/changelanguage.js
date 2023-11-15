import { useContext, useState } from "react";
import arabic from "../../images/arabic.png";
import english from "../../images/english.png";
import { MainLang } from "../languagesfiles/langContext";
import { Facebook } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

export default function ChangeLanguage() {
  const location = useLocation()
  const { handlesetlang, lang } = useContext(MainLang);

  const openFacebookProfile = () => {
    const url = `https://www.facebook.com/enrollexpert`;
    window.open(url, "_blank");
  };
  return (
    <div className={`bottom-[55%] right-0 z-[8] fixed flex flex-col gap-y-[10px] ${(location.pathname.split("/")[1] === "admin" || location.pathname.split("/")[1] === "adminPanel") && "hidden"}`}>
      <div className="group w-[50px] bg-gradient-to-t bg-gray-200 shadow shadow-white rounded-l-[10px]  duration-200 ">
        <div
          onClick={() => {
            handlesetlang();
          }}
          className="flex duration-200 gap-[5px] group-hover:h-[50px] w-full cursor-pointer h-0 overflow-y-hidden  items-center justify-center"
        >
          <div className="w-[25px] group-hover:h-[25px] h-0 duration-200">
            <img
              src={lang === "English" ? arabic : english}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full cursor-pointer gap-[5px] h-[50px] flex items-center justify-center">
          <div className="w-[25px] h-[25px]">
            <img
              src={lang !== "English" ? arabic : english}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div
        onClick={openFacebookProfile}
        className="w-[50px] bg-[#3b5998]  shadow shadow-[#3b5998] rounded-l-[10px] text-[20px] text-white h-[50px] flex items-center cursor-pointer justify-center"
      >
        <Facebook />
      </div>
    </div>
  );
}
