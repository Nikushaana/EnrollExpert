import { Link } from "react-router-dom";

export default function FirstSliderCard({item}){
    const goToTopFast = () => {
        window.scrollTo({ top: 0, left: 0 });
      };
    return(
        <Link to={item.link}>
        <div onClick={()=>{goToTopFast()}} className=" rounded-[15px] relative group hover:scale-95 duration-200 h-full  ">
            <img src={item.image} alt="" className="w-full h-full rounded-[15px] object-cover "/>
            <p className="absolute bottom-0 w-full h-[70%] rounded-b-[13px] px-[20px] py-[20px] text-[27px] cursor-pointer duration-200 flex items-end bg-gradient-to-t from-[#ffffff] to-transparent font-semibold max-[640px]:px-[20px]">{item.text}</p>
        </div>
        </Link>
    )
}