import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainLang } from "../languagesfiles/langContext";

export default function WhyGeorgiahover(){
    const { translations } = useContext(MainLang);
    return(
        <div className="bg-white rounded-[10px] p-[15px] w-[210px] shadow">
            <Link to="/blog"><p className="p-[15px] text-[16px]">{translations.Blog}</p></Link>
        </div>
    )
}