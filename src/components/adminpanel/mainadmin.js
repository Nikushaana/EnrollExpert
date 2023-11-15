import { List, Trash } from "react-bootstrap-icons";
import FileInput from "./inputfileadmin";
import TextInput from "./inputtextadmin";
import TextArea from "./paragraphinputadmin";
import AddNewBlogAdmin from "./addnewblogadmin";
import { useContext, useEffect, useState } from "react";
import BlogsAdmin from "./logsadmin";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../maincontext/mainContext";
import EachBlogUpdate from "./EachBlogUpdate";
import AdminPanelLogin from "./adminpanelogin";

export default function MainAdmin() {
  const location = useLocation();
  const navigate = useNavigate(null);
  const [drop, setdrop] = useState(false);
  const { token, setToken, name } = useContext(MainContext);
  const handledrop = () => {
    setdrop((pre) => !pre);
  };

  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/addnewblog");
    }
  }, [location]);


  if (!token) {
    return (<AdminPanelLogin/>);
  }


  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px]  w-[100%] flex  gap-y-[20px] ">
        <div className="relative">
          <div
            onClick={() => {
              handledrop();
            }}
            className={`absolute top-[20px]  w-[40px] h-[40px] rounded bg-white cursor-pointer shadow text-[30px] hidden items-center justify-center duration-200 max-md:flex ${
              drop ? "left-[320px] max-sm:left-[270px]" : "left-[20px]"
            }`}
          >
            <List />
          </div>
          <div
            className={`w-[300px] h-full border-r-[1px] py-[50px] px-[10px] shadow max-sm:w-[250px]  ${
              drop ? "fixed bg-white" : "max-md:hidden "
            }`}
          >
            <ul className="flex flex-col gap-y-[20px]">
                <li
                  className="px-[10px] border-[1px] shadow rounded-full h-[40px] flex items-center justify-center text-white bg-gray-500
                  "
                >
                  {name}
                </li>
              <Link to="addnewblog">
                <li
                  onClick={() => {
                    setdrop(false);
                  }}
                  className={`px-[10px] border-[1px] shadow rounded-full h-[40px] flex items-center justify-center hover:bg-[#070714] hover:text-white duration-150 cursor-pointer ${
                    location.pathname.split("/")[2] === "addnewblog" &&
                    "bg-[#070714] text-white"
                  }`}
                >
                  Add New Blog
                </li>
              </Link>
              <Link to="blogs">
                <li
                  onClick={() => {
                    setdrop(false);
                  }}
                  className={`px-[10px] border-[1px] shadow rounded-full h-[40px] flex items-center justify-center hover:bg-[#070714] hover:text-white duration-150 cursor-pointer ${
                    location.pathname.split("/")[2] === "blogs" &&
                    "bg-[#070714] text-white"
                  }`}
                >
                  Blogs
                </li>
              </Link>
              
                <li onClick={()=>{setToken("")}} className="px-[10px] border-[1px] shadow rounded-full h-[40px] flex items-center justify-center hover:bg-[#070714] hover:text-white duration-150 cursor-pointer">
                  Log Out
                </li>
            </ul>
          </div>
        </div>
        <div className="w-[calc(100vw-300px)] bg-gray-200 max-md:w-full max-md:pt-[30px]">
          <Routes>
            <Route path="addnewblog" element={<AddNewBlogAdmin />} />
            <Route path="blogs/:Id" element={<EachBlogUpdate />} />
            <Route path="blogs" element={<BlogsAdmin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
