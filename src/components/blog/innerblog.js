import { useContext, useEffect, useState } from "react";
import { MainLang } from "../languagesfiles/langContext";
import { useParams } from "react-router-dom";
import BlogContext from "./BlogContext";

export default function InnerBlog() {
  const params = useParams();

  const { Id } = params;

  const { blogData, setBlogData } = useContext(BlogContext);

  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(blogData.filter((item) => item.id == Id)[0]);
  }, [Id]);

  const { lang } = useContext(MainLang);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]  max-smaller:pt-[50px] max-smaller:px-[16px]  ${
          lang === "Arabic" && "items-end"
        }`}
      >
        <div className="w-full h-[400px] max-md:h-[200px]">
          <img
            src={`https://enrr.2111190.click/${item.img}`}
            alt=""
            className="w-full h-full object-cover rounded-[15px]"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[5px] h-[25px] bg-[#fd4a36]"></div>

          {lang === "Arabic" ? (
            <h1 className="text-[25px] font-semibold">{item.title_ar}</h1>
          ) : (
            <h1 className="text-[25px] font-semibold">{item.title_en}</h1>
          )}
        </div>
        {lang === "Arabic" ? (
          <p
            className={`text-[18px] text-gray-600 ${
              lang === "Arabic" && "text-end"
            }`}
          >
            {item.text_ar}
          </p>
        ) : (
          <p
            className={`text-[18px] text-gray-600 ${
              lang === "Arabic" && "text-end"
            }`}
          >
            {item.text_en}
          </p>
        )}
      </div>
    </div>
  );
}
