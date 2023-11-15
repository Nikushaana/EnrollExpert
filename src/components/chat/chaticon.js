import { Telegram, Telephone, Whatsapp, XLg } from "react-bootstrap-icons";
import zaza from "../../images/zazusha.webp";
import gogo from "../../images/gogona.webp";
import { useContext, useEffect, useRef, useState } from "react";
import { MainLang } from "../languagesfiles/langContext";
import { useLocation } from "react-router-dom";
export default function ChatIcon() {
  const location = useLocation()

  const { translations } = useContext(MainLang);

  const openWhatsAppZaza = () => {
    const url = `https://wa.me/599888818`;
    window.open(url, "_blank");
  };
  const openWhatsAppGirl = () => {
    const url = `https://wa.me/550055555`;
    window.open(url, "_blank");
  };

  const showref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (showref.current && !showref.current.contains(event.target)) {
      setShow(false);
    }
  }

  const [show, setShow] = useState(false);
  const handlesetshow = () => {
    setShow((pre) => !pre);
  };

  return (
    <div className={`fixed bottom-[30px] left-[20px] z-[8]  ${(location.pathname.split("/")[1] === "admin" || location.pathname.split("/")[1] === "adminPanel") && "hidden"}`}>
      <div ref={showref} className="relative ">
        <div
          onClick={() => {
            handlesetshow();
          }}
          className="  rounded-[20px] gap-[8px] text-white flex items-center px-[15px] cursor-pointer h-[45px] max-[500px]:rounded-full bg-[#22c15e]"
        >
          <Whatsapp className="text-[16px]" />
          <p className="pt-[2px] max-[500px]:hidden text-[14px]">{translations.chathello}</p>
        </div>
        <div
          className={`shadow-md absolute bottom-[10px] w-[350px] max-[500px]:w-[280px] rounded-[14px] ease-in-out duration-300 ${
            show
              ? "opacity-100 translate-y-[-50px] z-[10]"
              : "z-[-5] hidden opacity-0 transition-y-[50px]"
          }`}
        >
          <div className="relative w-full p-[20px] text-center bg-[#22c15e] text-white rounded-t-[14px]">
            <p className="text-[15px]">
              {translations.chattext}
            </p>
            <div
              onClick={() => {
                setShow(false);
              }}
              className="absolute top-[-45px] cursor-pointer right-0 w-[35px] h-[35px] rounded-full bg-[#22c15e] text-white flex items-center justify-center"
            >
              <XLg />
            </div>
          </div>
          <div className="rounded-b-[14px] px-[15px] py-[20px] flex flex-col gap-y-[10px] bg-white">
            <div
              onClick={openWhatsAppZaza}
              className="flex items-center justify-between hover:scale-95 duration-200 cursor-pointer"
            >
              <div className="flex gap-[10px]">
                <div className="w-[60px] h-[70px] relative">
                  <div className="absolute w-[10px] h-[10px] rounded-full bg-[green] bottom-0 left-0 z-[1]"></div>
                  <img
                    src={zaza}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h1 className="font-semibold text-[18px]">Zaza Gonashvili</h1>
                  <p className="text-[14px]">For English speakers</p>
                  <p className="text-[8px]">Available</p>
                </div>
              </div>
              <Telephone className="text-[#22c15e] text-[25px]" />
            </div>

            <div onClick={openWhatsAppGirl} className="flex items-center justify-between hover:scale-95 duration-200 cursor-pointer">
              <div className="flex gap-[10px]">
                <div className="w-[60px] h-[70px] relative">
                  <div className="absolute w-[10px] h-[10px] rounded-full bg-[green] bottom-0 left-0 z-[1]"></div>
                  <img
                    src={gogo}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-around">
                  <h1 className="text-[15px]">للتحدث باللغة العربية</h1>
                  <p className="text-[8px]">Available</p>
                </div>
              </div>
              <Telephone className="text-[#22c15e] text-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
