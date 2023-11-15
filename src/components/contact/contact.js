import {
  At,
  Envelope,
  GeoAlt,
  GeoAltFill,
  Whatsapp,
} from "react-bootstrap-icons";
import bgg from "../../images/contactbg.webp";
import { useContext, useEffect, useState } from "react";
import { MainLang } from "../languagesfiles/langContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Contact() {
  const { translations, lang } = useContext(MainLang);

  const [loader, setLoader] = useState(false);
  const [showAcceptAlert, setShowAcceptAlert] = useState(false);
  const handleUploadClick = () => {
    setTimeout(() => {
      setShowAcceptAlert(false);
    }, 2000);
  };
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Comment, setComment] = useState("");

  const handelChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handelChangeName = (e) => {
    setName(e.target.value);
  };
  const handelChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [allValues, setAllValues] = useState({
    Name: "",
    Email: "",
    Comment: "",
  });
  useEffect(() => {
    setAllValues({
      Name: Name,
      Email: Email,
      Comment: Comment,
    });
  }, [Name, Email, Comment]);
  const SentMail = (e) => {
    setLoader(true);
    e.preventDefault();

    // Create an object with your data
    const data = {
      Name: allValues.Name,
      Email: allValues.Email,
      Comment: allValues.Comment,
    };

    // Convert the data object to a query string
    const queryString = `
      Name - ${data.Name}; 
      Email - ${data.Email}; 
      Comment - ${data.Comment}; 
    `;
    // Object.keys(data)
    //   .map((key) => `${key} ${encodeURIComponent(data[key])}`)
    //   .join("                   ");

    // Construct the URL with the query string
    const url = `https://back.expressgroup.ge/api/mail/smtp.gmail.com/pinzlrsgxkuwuvmt/chiqovanigiorgi7@gmail.com/enrollexpert@gmail.com/${queryString}`;

    // Send the GET request
    axios
      .get(url)
      .then((res) => {
        setShowAcceptAlert(true);
        
      })
      .catch((error) => {
        console.log("dont sent on mail");
      })
      .finally(() => {
        setLoader(false);
        setName("");
        setEmail("");
        setComment("");
        goToTopFast()
      });
  };

  
const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src={bgg}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0 z-[-2]"
      />
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col py-[50px]  gap-y-[20px]  max-fouroo:px-[20px]">
        <div
          className={`w-full flex gap-[40px] max-lg:flex-col ${
            lang === "Arabic" && "flex-row-reverse"
          }`}
        >
          <div className="w-[30%] flex flex-col gap-y-[20px] max-lg:w-full">
            <div className="flex items-center gap-[10px]">
              <div className="w-[5px] h-[25px] bg-[#fd4a36]"></div>
              <h1 className="text-[#fd4a36] font-semibold text-[25px]">
                {translations.LetsTalk}
              </h1>
            </div>
            <h1 className="text-white text-[25px]">
              {translations.StudyinGeorgia}
            </h1>
            <div
              className={`w-[360px] bg-white px-[25px] py-[30px] rounded-[10px] flex items-center gap-[10px] max-[400px]:w-full ${
                lang === "Arabic" && "shadow-xl"
              }`}
            >
              <div className="w-[50px] h-[50px] rounded-full flex items-center text-[20px] justify-center bg-[#fd4a36] text-white">
                <GeoAltFill />
              </div>
              <p className="text-[18px] font-semibold">{translations.adres}</p>
            </div>
            <div
              className={`w-[360px] bg-white px-[25px] py-[30px] rounded-[10px] flex items-center gap-[10px] max-[400px]:w-full ${
                lang === "Arabic" && "shadow-xl"
              }`}
            >
              <div className="w-[50px] h-[50px] rounded-full flex items-center text-[20px] justify-center bg-[#fd4a36] text-white">
                <Envelope />
              </div>
              <p className="text-[18px] font-semibold">info@enrollexpert.com</p>
            </div>
            <div
              className={`w-[360px] bg-white px-[25px] py-[30px] rounded-[10px] flex items-center gap-[10px] max-[400px]:w-full ${
                lang === "Arabic" && "shadow-xl"
              }`}
            >
              <div className="w-[50px] h-[50px] rounded-full flex items-center text-[20px] justify-center bg-[#fd4a36] text-white">
                <Whatsapp />
              </div>
              <p className="text-[18px] font-semibold">+995 550 05 55 55</p>
            </div>
          </div>
          {loader ? (
            <div className="flex gap-[5px] items-center pt-[2px] w-[70%] h-[50px] rounded-[10px]  text-white justify-center  text-[18px] duration-200">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            </div>
          ) : (
            <form
              onSubmit={SentMail}
              encType="multipart/form-data"
              className="flex flex-col gap-7 w-[70%] max-lg:w-full"
            >
              <div className="w-full flex flex-col gap-y-[30px] max-lg:w-full">
                <h1 className="text-white text-[30px]">
                  {translations.FOLOWTHEPROFESSIONALS}
                </h1>
                <div
                  className={`w-full rounded-[10px] bg-[#fd4a36] py-[20px] px-[50px] flex flex-col gap-y-[20px]  max-[400px]:px-[20px] ${
                    lang === "Arabic" && "items-end"
                  }`}
                >
                  <input
                    value={Name}
                    onChange={(e) => handelChangeName(e)}
                    type="text"
                    placeholder={translations.Name}
                    className="outline-none border-b-[1px] placeholder:text-white text-[18px] bg-transparent text-white border-b-white px-[10px] max-w-[400px] h-[40px]"
                  />
                  <input
                    value={Email}
                    onChange={(e) => handelChangeEmail(e)}
                    type="text"
                    placeholder={translations.Email}
                    className="outline-none border-b-[1px] placeholder:text-white text-[18px] bg-transparent text-white border-b-white px-[10px] max-w-[400px] h-[40px]"
                  />
                  <textarea
                    value={Comment}
                    onChange={(e) => handelChangeComment(e)}
                    placeholder={translations.writetext}
                    className={`bg-white outline-none rounded-[10px] p-[15px] w-full h-[250px] ${
                      lang === "Arabic" && "text-end"
                    }`}
                  />
                  <div className="flex justify-normal">
                    <button
                      onClick={() => {
                        handleUploadClick();
                      }}
                      type="submit"
                      className="px-[20px] h-[50px] flex items-center justify-center font-semibold cursor-pointer pb-[3px] rounded-full bg-white text-[#fd4a36] hover:bg-gray-800 hover:text-white duration-200"
                    >
                      {translations.sendmessage}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="w-full h-[400px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.9511951255913!2d44.7759439758935!3d41.72157197520024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d715d0503d%3A0x29b36012b300a6c0!2zNzUg4YOb4YOU4YOg4YOQ4YORIOGDmeGDneGDoeGDouGDkOGDleGDkOGDoSDhg6Xhg6Phg6nhg5AsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1689254710239!5m2!1ska!2sge"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        className={`z-[20] fixed h-[80px] flex  rounded-[5px] bg-[#17174b] shadow shadow-[#3c3c82] text-[17px] text-white left-[50%] translate-x-[-50%] duration-100 ${
          showAcceptAlert ? "top-[30px]" : "top-[-90px]"
        }`}
      >
        <div className="w-[8px] h-full bg-[#2020b0] rounded-l-[5px]"></div>
        <p className="px-[20px] flex items-center">
          Message Sent on Email Successfully!
        </p>
      </div>
    </div>
  );
}
