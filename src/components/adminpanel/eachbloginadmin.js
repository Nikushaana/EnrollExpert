import axios from "axios";
import { useState } from "react";
import { Check, Check2, Eye, EyeSlash, Pen, XLg } from "react-bootstrap-icons";
import axiosClient from "../axiosClient";
import { Link } from "react-router-dom";

export default function EachBlogInAdmin({
  item,
  setActive,
  handleDelete,
  setNewRender,
}) {
  const [show, setShow] = useState(true);
  const handleshow = () => {
    setShow((prev) => !prev);
  };

  const handelDelete = (Id) => {
    axios
      .get(`https://enrr.2111190.click/delete.php?id=${Id}`)
      .then((response) => {
        setNewRender(response);
        console.log(response);
      });
  };

  return (
    <div className="w-full flex flex-wrap gap-[20px] border-b-[1px] border-b-white pb-[40px]">
      <div className="flex flex-col gap-y-[10px]">
        <button
          onClick={() => {
            handelDelete(item.id);
          }}
          className="w-[40px] h-[40px] rounded-full bg-[#070714] flex items-center justify-center cursor-pointer text-white text-[18px] border-[1px] border-[#070714] hover:scale-105 hover:bg-white hover:text-[#070714] duration-200"
        >
          <XLg />
        </button>

        <Link
          to={`${item.id}`}
          onClick={() => {
            setActive("addnewblog");
          }}
          className="w-[40px] h-[40px] rounded-full  flex items-center justify-center cursor-pointer text-white   duration-100 hover:scale-110 bg-[brown]"
        >
          <Pen className="text-[18px]" />
        </Link>

        {/* <div
          onClick={() => {
            handleshow();
          }}
          className={`w-[40px] h-[40px] rounded-full  flex items-center justify-center cursor-pointer text-white text-[18px] hover:scale-95 duration-100 ${
            show ? "bg-[#4a4ad8] " : "bg-[red] "
          }`}
        >
          {show ? <Eye /> : <EyeSlash />}
        </div> */}
      </div>
      <div className="w-[200px] bg-white rounded-[10px] h-[200px] max-lg:w-[calc(100%-60px)]">
        <img
          src={`https://enrr.2111190.click/${item.img}`}
          alt=""
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div className="widthblogtextscroll flex flex-col  max-h-[200px] overflow-y-scroll gap-y-[10px] w-[calc(100%-280px)] max-lg:w-full">
        <p className="text-[17px] bg-white rounded-[10px] p-[10px] flex flex-col gap-y-[10px]">
          <p className="text-[13px] border-b-[1px] ">Sort</p>
          {item.sort}
        </p>
        <p className="text-[17px] bg-white rounded-[10px] p-[10px] flex flex-col gap-y-[10px]">
          <p className="text-[13px] border-b-[1px] ">English blog title</p>
          {item.title_en}
        </p>
        <p className="text-[17px] bg-white rounded-[10px] p-[10px]  flex flex-col gap-y-[10px]">
          <p className="text-[13px] border-b-[1px] ">Arabic blog title</p>
          {item.title_ar}
        </p>
        <p className=" bg-white rounded-[10px] p-[10px]  flex flex-col gap-y-[10px] ">
          <p className="text-[13px] border-b-[1px] ">English blog text</p>
          {item.text_en}
        </p>
        <p className=" bg-white rounded-[10px] p-[10px]   flex flex-col gap-y-[10px]">
          <p className="text-[13px] border-b-[1px] ">Arabic blog text</p>
          {item.text_ar}
        </p>
      </div>
    </div>
  );
}
