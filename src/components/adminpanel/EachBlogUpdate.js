import { Trash } from "react-bootstrap-icons";
import FileInput from "./inputfileadmin";
import TextInput from "./inputtextadmin";
import TextArea from "./paragraphinputadmin";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import SortInput from "./sorninput";

export default function EachBlogUpdate() {
  const navigate = useNavigate()
  const params = useParams();
  const { Id } = params;
  const [newRender, setNewRender] = useState();

  const [loader, setLeoader] = useState(false);

  const [data, setData] = useState({});

  useEffect(() => {
    setLeoader(true);
    // Make a GET request when the component mounts
    axios
      .get(`https://enrr.2111190.click/one.php?id=${Id}`)
      .then((response) => {
        setData(response.data[0]);
        setLeoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [newRender]);

  const handleAddData = (value, inputName) => {
    setData((prev) => ({ ...prev, [inputName]: value }));
  };

  const handelStore = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("id", Id);

    axios
      .post("https://enrr.2111190.click/update.php", formData)
      .then((res) => {setNewRender(res); navigate("/admin/blogs")})
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className=" w-full min-h-[100vh] p-[50px]   max-sm:px-[20px]">
      {loader ? (
        <p>loading...</p>
      ) : (
        <form
          onSubmit={handelStore}
          encType="multipart/form-data"
          className="flex flex-col gap-y-[40px] max-sm:gap-y-[20px]"
        >
          <FileInput
            name={"img"}
            // value={picture}
            // onChange={setPicture}
            defaultValue={`https://enrr.2111190.click/storage/${data.img}`}
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
              className="h-[40px] w-auto bg-[#070714] hover:bg-[#07071476] duration-200 text-white px-[10px] rounded-[10px] flex items-center cursor-pointer"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
