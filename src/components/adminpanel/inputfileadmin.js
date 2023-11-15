import { useEffect, useRef, useState } from "react";
import { X } from "react-bootstrap-icons";

export default function FileInput(props){
    //working with single file input
    const [fileState, setFileState] = useState(null);
    //file input element
    const inputElement = useRef(null);
    //file name
    const [fileName, setFileName] = useState("");

    const handleChange = (event) => {
        setFileState(URL.createObjectURL(event.target.files[0]));
        setFileName(event.target.files[0].name);
    }

    const handleOpenInput = () => {
        inputElement.current.click();
    }


    useEffect(()=>{
        setFileState("")
    },[props.clickClear])

    return (
            <div className="flex gap-[30px]">
                <div  className={`cursor-pointer max-sm:w-full ${fileState ? "hidden" : ""}`}>
                    <div onClick={handleOpenInput}
                        className="border-dashed w-[200px] bg-white h-[200px] max-sm:h-[200px] max-sm:w-full border-4 flex-col gap-2
                     border-gray-300 flex items-center justify-center rounded-xl" >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1"
                            viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="4em" width="4em"
                            xmlns="http://www.w3.org/2000/svg">
                            <polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"></polygon>
                            <polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"></polygon>
                            <polygon fill="#1565C0" points="21,23 14,33 28,33"></polygon>
                            <polygon fill="#1976D2" points="28,26.4 23,33 33,33"></polygon>
                            <circle fill="#1976D2" cx="31.5" cy="24.5" r="1.5"></circle>
                        </svg>
                        <p className="text-sm text-gray-500">{props.name}</p>
                    </div>
                    <input name={props.name}
                        ref={inputElement}
                        className="hidden" type="file" onChange={handleChange} />
                </div>
                <>
                    {fileState ?
                        (<div className="max-w-[350px] max-h-[350px] border bg-white border-slate-300 rounded-xl 
                            flex justify-between items-center max-sm:h-auto relative">
                            <div className="flex h-full w-full items-center justify-center gap-2 max-sm:flex-col">
                                <img src={fileState} className="w-full h-full object-contain rounded-xl" alt="#" />
                            </div>
                            <div className="absolute top-[10px] right-[10px] rounded-full w-10 h-10 bg-white text-[#070714] hover:text-white duration-100 cursor-pointer hover:bg-[#070714] flex items-center justify-center"
                                onClick={() => { setFileState(""); }}>
                                <X className=" text-2xl" />
                            </div>
                        </div>) :
                        (<></>)
                    }
                </>
            </div>
    )
}