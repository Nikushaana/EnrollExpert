import { React, useEffect, useState } from "react";
import { ArrowUp, ArrowUpShort, ChevronCompactUp, ChevronUp } from "react-bootstrap-icons";
import { useLocation } from "react-router";

function ScrollToTop() {
  const location = useLocation();
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`top-btn w-[50px] items-center justify-center border-shadow 
      text-[20px] h-[50px]  border-[1px]
        fixed bottom-[30px] right-[20px] cursor-pointer rounded-full 
        text-white flex duration-200 z-[8] border-[#eb6753] bg-[#fd4a36] hover:scale-105 hover:bg-transparent hover:text-[#fd4a36]
        ${(location.pathname.split("/")[1] === "admin" || location.pathname.split("/")[1] === "adminPanel") && "hidden"}`}
      onClick={goToTop}
    >
      <ChevronUp />
    </div>
  );
}

export default ScrollToTop;