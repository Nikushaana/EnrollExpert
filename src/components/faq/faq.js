import { ChatDots } from "react-bootstrap-icons";
import FAQ from "../mainpage/faq";
import { useContext } from "react";
import { MainLang } from "../languagesfiles/langContext";

export default function Faq() {
  const { translations } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col items-center py-[50px] gap-y-[30px] max-md:px-[20px] ">
        <div className="w-[70px] h-[70px] rounded-full text-[30px] flex items-center justify-center bg-[#fce9e7] text-[#fd4a36]">
          <ChatDots />
        </div>
        <h1 className="text-[35px] font-semibold  max-[400px]:text-center">
          {translations.faqmainquest}
        </h1>
        <p className="text-center text-gray-500 max-w-[800px] text-[18px] mb-[20px]">
        {translations.faqtext}
        </p>
        <FAQ />
      </div>
    </div>
  );
}
