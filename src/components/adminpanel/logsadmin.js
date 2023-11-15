import { useContext, useEffect, useState } from "react";
import image from "../../images/caucasusimg.webp"
import { Eye, EyeSlash, Pen, XLg } from "react-bootstrap-icons";
import EachBlogInAdmin from "./eachbloginadmin";
import BlogContext from "../blog/BlogContext";
import axios from "axios";

export default function BlogsAdmin({setActive}) {
    
  // const [data, setdata] = useState([
  //   {
  //     id: 1,
  //     img:image,
  //     title: "food in georgia",
  //     text: "food in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia",
  //   },
  //   {
  //     id: 2,
  //     img:image,
  //     title: "food in georgia",
  //     text: "food in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia",
  //   },
  //   {
  //     id: 3,
  //     img:image,
  //     title: "food in georgia",
  //     text: "food in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia",
  //   },
  //   {
  //     id: 4,
  //     img:image,
  //     title: "food in georgia",
  //     text: "food in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia food in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgiafood in georgia",
  //   },
  // ]);
  

  const {blogData, setBlogData} = useContext(BlogContext)
  const [newRender,setNewRender] = useState()


  useEffect(() => {
    // Make a GET request when the component mounts
    axios.get('https://enrr.2111190.click/')
      .then(response => {
        setBlogData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [newRender]);


  
  return (
    <div className=" w-full min-h-[100vh] p-[50px] flex flex-col gap-y-[40px] max-sm:px-[20px]">
      {blogData && blogData.map((item) => (
       <EachBlogInAdmin key={item.id} setNewRender={setNewRender} item={item} setActive={setActive}/>
      ))}
    </div>
  );
}
