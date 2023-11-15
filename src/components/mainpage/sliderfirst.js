import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';


import FirstSliderCard from "./firstslidercard";
import { MainContext } from "../maincontext/mainContext";

export default function SliderFirst() {
  const { firstsliderdata } = useContext(MainContext);

  let swiperRef = useRef();
  const [slideToDisplay, setSlidesToDisplay] = useState(0);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  let itm;
  useEffect(() => {
    if (windowSize[0] >= 1380) {
      itm = 3;
      setSlidesToDisplay(itm);
    } else if (windowSize[0] <= 980 && windowSize[0] >= 560) {
      itm = 2;
      setSlidesToDisplay(itm);
    } else if (windowSize[0] <= 560 && windowSize[0] >= 0) {
      itm = 1;
      setSlidesToDisplay(itm);
    }
  }, [windowSize]);

  
  return (
    <div className="w-full bg-[#070714] flex justify-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] pt-[70px] pb-[100px] w-[100%] gap-y-[30px] flex flex-col items-center justify-between max-[1025px]:px-[30px] max-[640px]:pt-[30px]  max-[640px]:pb-[30px]  max-[500px]:px-[20px]">
        <div className="flex gap-[10px] items-center w-full justify-end">
          <button
            className="w-[50px] shadow h-[50px] flex items-center justify-center text-[25px] rounded-full pr-[5px] text-[#070714] bg-gray-100"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="" />
          </button>
          <button
            className="w-[50px] shadow h-[50px] flex items-center justify-center text-[25px] rounded-full p-[5px] text-[#070714] bg-gray-100"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="" />
          </button>
        </div>
        <div className="relative w-[100%] flex items-center">
          <Swiper
          modules={[Autoplay]}
            slidesPerView={slideToDisplay}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            className=" w-[100%] items-stretch"
            disabledclass={"disabled_swiper_button"}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            speed={1000}
            cssease={"linear"}
          >
            {firstsliderdata.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-[370px] max-[640px]:h-[300px]">
                  
                <FirstSliderCard item={item}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
