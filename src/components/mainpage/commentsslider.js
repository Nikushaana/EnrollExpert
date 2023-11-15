import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";

import ComSlComponent from "./comslcomponent";

import per1 from "../../images/person.webp";
import per2 from "../../images/person2.webp";
import per3 from "../../images/person3.webp";
import per4 from "../../images/person4.webp";
import per5 from "../../images/person5.webp";

export default function CommentsSlider() {
  
  const swiperRef = useRef(null);
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

  useEffect(() => {
    let itm;
    if (windowSize[0] >= 1380) {
      itm = 4;
      setSlidesToDisplay(itm);
    } else if (windowSize[0] <= 1200 && windowSize[0] >= 980) {
      itm = 3;
      setSlidesToDisplay(itm);
    } else if (windowSize[0] <= 980 && windowSize[0] >= 520) {
      itm = 2;
      setSlidesToDisplay(itm);
    }
     else if (windowSize[0] <= 520 && windowSize[0] >= 0) {
      itm = 1;
      setSlidesToDisplay(itm);
    }
  }, [windowSize]);

  const [firstsliderdata, setFirstSliderData] = useState([
    {
      id: 1,
      image: per1,
      name: "MALAZ ABDELMAHIM MOHAMED",
      text: "It's an amazing place to be. I loved the vibe here. Students are from all over the place. I liked the architecture of the buildings around Tbilisi. I must say a huge thank you to the ENROLL EXPERT teem for making everything easy and cozy.",
    },
    {
      id: 2,
      image: per2,
      name: "MAYA OSMAN ABDU OSMAN",
      text: "Zaza from the Enroll Expert team is an amazing person when it comes to providing options for accommodations, places to visit, etc. He has always been happy to share information and help. This has been important for us as we are coming from a different country, especially when we have to leave our son here and go back to our country. He has made Georgia home for us.",
    },
    {
      id: 3,
      image: per3,
      name: "MASHEHOR BADR AWADH MAHAD",
      text: "I've only been in Georgia for a year, yet I already feel like a part of this lovely country. The education is excellent, but the experience was remarkable. I've made lifelong friends and will strongly suggest the Enroll expert team to anyone considering studying in Georgia.",
    },
    {
      id: 4,
      image: per4,
      name: "NISSAN AWAB",
      text: "Enroll Expert's team is helpful and looks after our wellbeing and our education. I am blessed to be here. There are a plethora of opportunities to grow and develop. Georgia is a beautiful and safe country for international students.",
    },
    {
      id: 5,
      image: per5,
      name: "AZAD AFSANA",
      text: "It's an amazing place to be. I loved the vibe here. Students are from all over the place. I liked the architecture of the buildings around Tbilisi. I must say a huge thank you to the ENROLL EXPERT teem for making everything easy and cozy.",
    },
    {
      id: 6,
      image: per1,
      name: "MALAZ ABDELMAHIM MOHAMED",
      text: "It's an amazing place to be. I loved the vibe here. Students are from all over the place. I liked the architecture of the buildings around Tbilisi. I must say a huge thank you to the ENROLL EXPERT teem for making everything easy and cozy.",
    },
    {
      id: 7,
      image: per2,
      name: "MAYA OSMAN ABDU OSMAN",
      text: "Zaza from the Enroll Expert team is an amazing person when it comes to providing options for accommodations, places to visit, etc. He has always been happy to share information and help. This has been important for us as we are coming from a different country, especially when we have to leave our son here and go back to our country. He has made Georgia home for us.",
    },
    {
      id: 8,
      image: per3,
      name: "MASHEHOR BADR AWADH MAHAD",
      text: "I've only been in Georgia for a year, yet I already feel like a part of this lovely country. The education is excellent, but the experience was remarkable. I've made lifelong friends and will strongly suggest the Enroll expert team to anyone considering studying in Georgia.",
    },
    {
      id: 9,
      image: per4,
      name: "NISSAN AWAB",
      text: "Enroll Expert's team is helpful and looks after our wellbeing and our education. I am blessed to be here. There are a plethora of opportunities to grow and develop. Georgia is a beautiful and safe country for international students.",
    },
    {
      id: 10,
      image: per5,
      name: "AZAD AFSANA",
      text: "It's an amazing place to be. I loved the vibe here. Students are from all over the place. I liked the architecture of the buildings around Tbilisi. I must say a huge thank you to the ENROLL EXPERT teem for making everything easy and cozy.",
    },
  ]);
  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex gap-2 items-center justify-end">
        <button
          className="w-12 h-12 flex items-center justify-center text-2xl rounded-full pr-1 text-gray-700 bg-gray-100"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center text-2xl rounded-full p-1 text-gray-700 bg-gray-100"
          onClick={() => swiperRef.current.slideNext()}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={slideToDisplay}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 2000 }}
          className="w-full items-stretch"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={1000}
          cssease="linear"
        >
          {firstsliderdata.map((item) => (
            <SwiperSlide key={item.id}>
              <ComSlComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
