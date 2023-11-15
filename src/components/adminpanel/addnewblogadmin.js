import { Trash } from "react-bootstrap-icons";
import FileInput from "./inputfileadmin";
import TextInput from "./inputtextadmin";
import TextArea from "./paragraphinputadmin";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SortInput from "./sorninput";

export default function AddNewBlogAdmin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    sort: "",
    title_en: "",
    title_ar: "",
    text_en: "",
    text_ar: "",
  });

  const handleAddData = (value, inputName) => {
    setData((prev) => ({ ...prev, [inputName]: value }));
  };
  const [clickClear, setClickClear] = useState(1);
  const handleClear = () => {
    setClickClear((prev) => prev + 1);
    setData({
      sort: "",
      title_en: "",
      title_ar: "",
      text_en: "",
      text_ar: "",
    });
  };
  const handelStore = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    axios
      .post("https://enrr.2111190.click/store.php", formData)
      .then((res) => {
        console.log(res);
        navigate("/admin/blogs");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className=" w-full min-h-[100vh] p-[50px]   max-sm:px-[20px]">
      <form
        onSubmit={handelStore}
        encType="multipart/form-data"
        className="flex flex-col gap-y-[40px] max-sm:gap-y-[20px]"
      >
        <FileInput
          name={"img"}
          // value={picture}
          // onChange={setPicture}
          clickClear={clickClear}
          defaultValue={data.img}
        />
        <SortInput name={"Sort"}
          valueRetriever={handleAddData}
          inputName={"sort"}
          defaultValue={data.sort}/>
        <TextInput
          name={"Blog Title english"}
          valueRetriever={handleAddData}
          inputName={"title_en"}
          defaultValue={data.title_en}
        />
        <TextInput
          name={"Blog Title arabic"}
          valueRetriever={handleAddData}
          inputName={"title_ar"}
          defaultValue={data.title_ar}
        />
        <TextArea
          name={"Blog Text english"}
          valueRetriever={handleAddData}
          inputName={"text_en"}
          defaultValue={data.text_en}
        />
        <TextArea
          name={"Blog Text arabic"}
          valueRetriever={handleAddData}
          inputName={"text_ar"}
          defaultValue={data.text_ar}
        />
        <div className="flex gap-[20px]">
          <button
            type="submit"
            onClick={handleClear}
            className="h-[40px] w-auto bg-[#070714] hover:bg-[#07071476] duration-200 text-white px-[10px] rounded-[10px] flex items-center cursor-pointer"
          >
            Upload
          </button>
          <p
            onClick={handleClear}
            className="h-[40px] w-auto bg-[red] hover:bg-[#ff00007a] duration-200 text-white px-[10px] rounded-[10px] flex items-center cursor-pointer gap-[10px]"
          >
            Clear <Trash />
          </p>
        </div>
      </form>
    </div>
  );
}
