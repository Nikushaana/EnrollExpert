import { useContext, useEffect, useRef, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { MainLang } from "../languagesfiles/langContext";

export default function EveryFaq({ item }) {
  const outShowRef = useRef(null);
  const [show, setShow] = useState(false);

  const handlesetshow = () => {
    setShow((pre) => !pre);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (outShowRef.current && !outShowRef.current.contains(event.target)) {
      setShow(false);
    }
  }

  return (
    <div ref={outShowRef} className="w-full relative">
      <div
        onClick={() => {
          handlesetshow();
        }}
        className={`w-full flex justify-between items-center h-[70px] rounded-[10px] pl-[20px] border-[1px] text-[18px] duration-200 ${
          show ? "bg-[#fd4a36] text-white" : ""
        }`}
      >
        <p className="w-[calc(100%-80px)] max-[850px]:text-[15px]">{item.question}</p>
        <div className="w-[80px] h-full bg-[#fd4a36] text-white text-[25px] rounded-r-[10px] flex items-center justify-center">
          <ChevronRight
            className={` ${
              show ? "rotate-90 duration-200" : "rotate-[-90] duration-200"
            }`}
          />
        </div>
      </div>
      <div
        className={`flex flex-col gap-y-[20px] shadow-xl px-[30px] max-[850px]:text-[15px] max-[850px]:px-[18px] bg-white rounded-b-[10px] text-gray-500 overflow-y-hidden duration-200 ${
          show ? "h-auto py-[10px] " : "h-0"
        }`}
      >
        <p>{item.pTop}</p>
        {item.ul && (
          <ul className="list-disc">
            {item.ul.map((info) => (
              <li key={info.id} className=" ">{info.text}</li>
            ))}
          </ul>
        )}
        <p>{item.pBot}</p>
      </div>
    </div>
  );
}
