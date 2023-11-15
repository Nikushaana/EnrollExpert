import { createContext, useEffect, useState } from "react";
import sl1 from "../../images/sl1.webp";
import sl2 from "../../images/sl2.webp";
import sl3 from "../../images/sl3.webp";
import sl4 from "../../images/sl4.webp";
import sl5 from "../../images/sl5.webp";
import sl6 from "../../images/sl6.webp";
import sl7 from "../../images/sl7.webp";
import sl8 from "../../images/sl8.webp";
import sl9 from "../../images/sl9.webp";
import sl10 from "../../images/sl10.jpg";
import sl11 from "../../images/sl11.jpg";
import sl12 from "../../images/sl12.webp";
import sl13 from "../../images/sl13.jpg";
import sl14 from "../../images/sl14.jpg";
import sl15 from "../../images/sl15.webp";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [firstsliderdata, setFirstSliderData] = useState([
    {
      id: 1,
      image: sl1,
      text: "Ivane Javakhishvili Tbilisi State University (TSU)",
      link: "/tsu",
    },
    {
      id: 2,
      image: sl2,
      text: "Alte University",
      link: "/alte-university",
    },
    {
      id: 3,
      image: sl3,
      text: "Caucasus University",
      link: "/caucasus-university",
    },
    {
      id: 4,
      image: sl4,
      text: "The University of Georgia",
      link: "/university-of-georgia",
    },
    {
      id: 5,
      image: sl5,
      text: "Ilia State University",
      link: "/ilia-state-university",
    },
    {
      id: 6,
      image: sl6,
      text: "Tbilisi State Medical University",
      link: "/tsmu",
    },
    {
      id: 7,
      image: sl7,
      text: "New Vision University",
      link: "/new-vision",
    },
    {
      id: 8,
      image: sl8,
      text: "Technical University of Georgia",
      link: "/techical-university",
    },
    {
      id: 9,
      image: sl9,
      text: "Webster University Georgia",
      link: "/webster-university",
    },
    {
      id: 10,
      image: sl10,
      text: "International Black Sea University",
      link: "/blacksea",
    },
    {
      id: 11,
      image: sl11,
      text: "Georgian Aviation University(SSU)",
      link: "/aviation",
    },
    {
      id: 12,
      image: sl12,
      text: "Georgian American University",
      link: "/american-university",
    },
    {
      id: 13,
      image: sl13,
      text: "Caucasus International University (CIU)",
      link: "/Caucasus-international-university",
    },
    {
      id: 14,
      image: sl14,
      text: "Kutaisi International University (KIU)",
      link: "/kiu",
    },
    {
      id: 15,
      image: sl15,
      text: "Ken walker international university",
      link: "/ken-walker",
    },
  ]);

  const [name, _setName] = useState(localStorage.getItem("USER"));
  const [token, _setToken] = useState(localStorage.getItem("TOKEN"));

  const setName = (name) => {
    _setName(name);
    if (name) {
      localStorage.setItem("USER", name);
    } else {
      localStorage.removeItem("USER");
    }
  };

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
  };



  return (
    <MainContext.Provider
      value={{
        firstsliderdata,
        setFirstSliderData,
        token,
        setToken,
        name,
        setName,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
