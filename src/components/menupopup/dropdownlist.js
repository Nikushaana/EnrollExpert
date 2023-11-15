import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function DropDownList({ item, setMenuclicked }) {
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  const [drop, setDroped] = useState(false);
  const handledrop = () => {
    setDroped((pre) => !pre);
  };
  return (
    <div className="w-full">
      <div
        onClick={() => {
          handledrop();
        }}
        className="flex justify-between border-t-[1px] px-[30px] h-[50px] items-center"
      >
        <Link
          onClick={() => {
            goToTopFast();
          }}
          to={item.titlelink}
        >
          <p className=" text-[17px]">{item.title}</p>
        </Link>
        <ChevronDown className={`duration-200 ${drop && "rotate-180"}`} />
      </div>
      <ul
        className={`duration-300 ${drop ? "h-auto" : "h-0 overflow-y-hidden"}`}
      >
        {item.inVariations.map((bla) => (
          <Link
            onClick={() => {
              goToTopFast();
            }}
            key={bla.id}
            to={bla.intitlelink}
          >
            <li onClick={()=>{setMenuclicked(false)}} className="border-t-[1px] text-gray-800 px-[50px] h-[50px] flex text-[15px] items-center cursor-pointer">
              {bla.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
