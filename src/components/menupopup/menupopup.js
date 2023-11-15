import { XLg } from "react-bootstrap-icons";
import logo from "../../images/enrollapply.webp";
import { Link } from "react-router-dom";
import DropDownList from "./dropdownlist";
import { useContext, useEffect, useRef, useState } from "react";
import { MainLang } from "../languagesfiles/langContext";
export default function MenuPopUp({ setMenuclicked }) {
  const { translations,lang } = useContext(MainLang);

    const menudropref = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    
      function handleClickOutside(event) {
        if (
            menudropref.current &&
          !menudropref.current.contains(event.target)
        ) {
            setMenuclicked(false);
        }
      }

  const [droplistdata, setDroplistdata] = useState([
    {
      id: 1,
      title: translations.StudyinGeorgia,
      titlelink: "/study-in-georgia",
      inVariations: [
        {
          id: 1,
          text: translations.ListofUniversities,
          intitlelink: "/list-of-university",
        },
        {
          id: 2,
          text: translations.ListofPrograms,
          intitlelink: "/list-of-programs",
        },
      ],
    },
    {
      id: 2,
      title: translations.Ourservices,
      inVariations: [
        {
          id: 1,
          text: translations.AdmissionProcess,
          intitlelink: "/admission-process",
        },
        {
          id: 2,
          text: translations.Visa,
          intitlelink: "/visa",
        },
        {
          id: 3,
          text: translations.Residencepermit,
          intitlelink: "/residence-permit",
        },
        {
          id: 4,
          text: translations.Accommodation,
          intitlelink: "/accommodation",
        },
        {
          id: 5,
          text: translations.ArrivalandairportPickup,
          intitlelink: "/arrival-and-airport-pickup",
        },
      ],
    },
    {
      id: 3,
      title: translations.WhyGeorgia,
      inVariations: [
        {
          id: 1,
          text: translations.Blog,
          intitlelink: "/blog",
        },
      ],
    },
  ]);

  useEffect(() => {
    setDroplistdata([
      {
        id: 1,
        title: translations.StudyinGeorgia,
        titlelink: "/study-in-georgia",
        inVariations: [
          {
            id: 1,
            text: translations.ListofUniversities,
            intitlelink: "/list-of-university",
          },
          {
            id: 2,
            text: translations.ListofPrograms,
            intitlelink: "/list-of-programs",
          },
        ],
      },
      {
        id: 2,
        title: translations.Ourservices,
        inVariations: [
          {
            id: 1,
            text: translations.AdmissionProcess,
            intitlelink: "/admission-process",
          },
          {
            id: 2,
            text: translations.Visa,
            intitlelink: "/visa",
          },
          {
            id: 3,
            text: translations.Residencepermit,
            intitlelink: "/residence-permit",
          },
          {
            id: 4,
            text: translations.Accommodation,
            intitlelink: "/accommodation",
          },
          {
            id: 5,
            text: translations.ArrivalandairportPickup,
            intitlelink: "/arrival-and-airport-pickup",
          },
        ],
      },
      {
        id: 3,
        title: translations.WhyGeorgia,
        inVariations: [
          {
            id: 1,
            text: translations.Blog,
            intitlelink: "/blog",
          },
        ],
      },
    ])
  },[translations])

  return (
    <div className="fixed top-0 left-0 w-full h-full flex bg-[#00000080] justify-between z-[20]">
      <div ref={menudropref} className="w-[300px] bg-white text-black">
        <img src={logo} alt="" className=" w-full" />
        {droplistdata.map((item) => (
          <DropDownList key={item.id} item={item} setMenuclicked={setMenuclicked}/>
        ))}
        <Link to="/aboutus">
          <p
            onClick={() => {
              setMenuclicked(false);
            }}
            className="text-[17px] px-[30px] border-t-[1px] h-[50px] flex items-center cursor-pointer"
          >
            {translations.Aboutus}
          </p>
        </Link>
        <Link to="/faq">
          <p
            onClick={() => {
              setMenuclicked(false);
            }}
            className="text-[17px] px-[30px] border-t-[1px] h-[50px] flex items-center cursor-pointer"
          >
            {translations.Faq}
          </p>
        </Link>
        <Link to="/contact">
          <p
            onClick={() => {
              setMenuclicked(false);
            }}
            className="text-[17px] px-[30px] border-t-[1px] h-[50px] flex items-center cursor-pointer"
          >
            {translations.Contact}
          </p>
        </Link>
        <Link to="/apply">
          <p
            onClick={() => {
              setMenuclicked(false);
            }}
            className="text-[17px] px-[30px] border-t-[1px] h-[50px] flex items-center cursor-pointer"
          >
            {translations.Apply}
          </p>
        </Link>
      </div>
      <XLg
        onClick={() => {
          setMenuclicked(false);
        }}
        className="text-white cursor-pointer text-[30px] mt-[37px] mr-[10px]"
      />
    </div>
  );
}
