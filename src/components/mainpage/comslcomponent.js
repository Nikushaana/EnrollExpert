import { Star, StarFill } from "react-bootstrap-icons";

export default function ComSlComponent({item}){
    return(
        <div className=" px-[20px] py-[15px] flex flex-col items-center  gap-y-[15px] bg-[#f9e5d1] rounded-[12px] shadow-lg">
            <div className="w-[80px] h-[80px] rounded-full">
                <img src={item.image} alt="" className="w-full h-full object-cover rounded-full"/>
            </div>
            <h1 className="text-center">{item.name}</h1>
            <p className="text-center max-[600px]:h-[190px] max-[600px]:overflow-y-hidden">{item.text}</p>
            <div className="flex items-center justify-between text-[#f88e7e]">
                <StarFill/>
                <StarFill/>
                <StarFill/>
                <StarFill/>
                <StarFill/>
            </div>
        </div>
    )
}