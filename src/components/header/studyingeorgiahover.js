import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainLang } from "../languagesfiles/langContext";

export default function Studyingeorgiahover(){
    const { translations } = useContext(MainLang);
    return(
        <div className="bg-white rounded-[10px] p-[15px] w-[210px] shadow">
            <Link to="list-of-university">
            <p className="border-b-[1px] border-gray-300 p-[15px] text-[16px]">{translations.ListofUniversities}</p>
            </Link>
            <Link to="list-of-programs"><p className="p-[15px]  text-[16px]">{translations.ListofPrograms}</p></Link>
        </div>
    )
}