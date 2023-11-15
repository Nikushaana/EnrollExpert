import { ArrowRight, Facebook, Linkedin, Twitter } from "react-bootstrap-icons";
import geoflag from "../../images/geoflag.webp";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MainLang } from "../languagesfiles/langContext";

import axios from "axios";
import BlogContext from "./BlogContext";

export default function Blog() {
  const { translations, lang } = useContext(MainLang);
  const { blogData, setBlogData } = useContext(BlogContext);

  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get("https://enrr.2111190.click/")
      .then((response) => {
        setBlogData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openFacebookProfile = () => {
    const url = `https://www.facebook.com/enrollexpert`;
    window.open(url, "_blank");
  };


  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col items-center  py-[50px] gap-y-[20px] max-sm:px-[30px]  max-smaller:px-[16px] ">
        <div className="w-full h-[400px] max-sm:h-[200px]">
          <img
            src={geoflag}
            alt=""
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-[20px] w-full mt-[-50px] items-center">
          {blogData && blogData.map((item) => (
            <div
              key={item.id}
              className={`w-[85%] max-sm:w-[95%]  bg-white rounded-[20px] shadow-md px-[30px] py-[20px] flex flex-col gap-y-[30px] ${
                lang === "Arabic" && "items-end"
              }`}
            >
              {lang === "Arabic" ? (
                <h1 className="blogtitle text-[30px] hover:text-[#fd4a36] duration-150 font-semibold cursor-pointer">
                  {item.title_ar}
                </h1>
              ) : (
                <h1 className="blogtitle text-[30px] hover:text-[#fd4a36] duration-150 font-semibold cursor-pointer">
                  {item.title_en}
                </h1>
              )}
              {lang === "Arabic" ? (
                <p
                  className={`blogtext text-[18px] text-gray-700 ${
                    lang === "Arabic" && "text-end"
                  }`}
                >
                  {item.text_ar}
                </p>
              ) : (
                <p
                  className={`blogtext text-[18px] text-gray-700 ${
                    lang === "Arabic" && "text-end"
                  }`}
                >
                  {item.text_en}
                </p>
              )}
              <div
                className={`flex w-full justify-between  flex-wrap gap-y-[20px]  ${
                  lang === "Arabic" && "flex-row-reverse"
                }`}
              >
                <Link to={item.id}>
                  <div
                    onClick={() => {
                      goToTopFast();
                    }}
                    className="flex items-center gap-[10px] bg-[#fd4a36] hover:bg-gray-900 duration-200 cursor-pointer text-white px-[25px] h-[50px] rounded-full"
                  >
                    <p className="font-semibold">{translations.LEARNMORE}</p>
                    <ArrowRight />
                  </div>
                </Link>

                <div className="flex items-center gap-[10px]">
                  <p className="font-semibold">Share:</p>
                  <Facebook onClick={openFacebookProfile} className="text-[24px] cursor-pointer text-[#1877f1]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
