import { List, Search, Telephone } from "react-bootstrap-icons";
import enrolllogo from "../../images/enrollmainlogo.webp";
import HeaderList from "./headerlist";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import MenuPopUp from "../menupopup/menupopup";
import { MainLang } from "../languagesfiles/langContext";

export default function Header() {
  const location = useLocation();

  const { translations, lang } = useContext(MainLang);

  const [menuclicked, setMenuclicked] = useState(false);


  return (
    <div className={`w-full flex justify-center bg-[#070714] border-b-[1px] border-gray-500 ${(location.pathname.split("/")[1] === "admin" || location.pathname.split("/")[1] === "adminPanel") && "hidden"}`}>
      <div className={`max-w-[1519px]  px-[5px] w-[100%] h-[120px] max-smaller:h-[80px] flex items-center justify-between max-smaller:h-[70px] ${lang === "Arabic" && "flex-row-reverse"}`}>
        <Link to="/">
          <div className="h-[60px] max-smaller:h-[50px] max-smaller:h-[50px]">
            <img
              src={enrolllogo}
              alt=""
              className="cursor-pointer h-full object-contain"
            />
          </div>
        </Link>
        <HeaderList />
        <div className={`flex items-center text-white h-full gap-[20px] max-fourfiveo:gap-[8px] ${lang === "Arabic" && "flex-row-reverse"}`}>
          <div className={`flex items-center gap-4 h-full pl-[40px] border-l-[1px] border-gray-500 max-smaller:pl-[20px] ${lang === "Arabic" && "flex-row-reverse border-l-0 border-r-[1px] pr-[40px] pl-0 max-smaller:pl-[0px] max-smaller:pr-[20px]"} `}>
            <Telephone className="text-[#fd4a36] text-[40px] max-smaller:text-[25px] max-fourfiveo:text-[18px]" />
            <div className={`flex flex-col ${lang === "Arabic" && "items-end"}`}>
              <p className="text-gray-400">{translations.PhoneCall}</p>
              <p className="text-[20px] cursor-pointer hover:text-[#fd4a36] duration-200 max-smaller:text-[17px] max-fourfiveo:text-[13px] max-fouroo:text-[10px]">
                +995 550 05 55 55
              </p>
            </div>
          </div>
          <List
            onClick={() => {
              setMenuclicked(true);
            }}
            className="hidden max-verybig:flex text-[38px] text-[#fd4a36] cursor-pointer max-smaller:text-[30px] max-fouroo:text-[28px] "
          />
          {menuclicked && (
            <MenuPopUp
              setMenuclicked={setMenuclicked}
              menuclicked={menuclicked}
            />
          )}
        </div>
      </div>
    </div>
  );
}
