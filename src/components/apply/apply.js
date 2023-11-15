import { useContext, useEffect, useState } from "react";
import bg from "../../images/applybg.webp";
import image from "../../images/enrollapply.webp";
import { MainLang } from "../languagesfiles/langContext";
import Inputinapply from "../Inputinapply";
import axios from "axios";

export default function Apply() {
  const [loader, setLoader] = useState(false);
  const { translations, lang } = useContext(MainLang);
  const [showAcceptAlert, setShowAcceptAlert] = useState(false);
  const handleUploadClick = () => {
    setTimeout(() => {
      setShowAcceptAlert(false);
    }, 2000);
  };
  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNumber, setPhonemobilewhatsapp] = useState("");
  const [PreferredUniversity, setPreferduni] = useState("");
  const [WhichCourseWant, setCurswant] = useState("");
  const [ApplyFor, setApplyFor] = useState("");
  const [Comment, setComment] = useState("");

  const handelChangeComment = (e) => {
    setComment(e.target.value);
  };

  const [data, setData] = useState([
    {
      id: 1,
      text: translations.BachelorsDegree,
    },
    {
      id: 2,
      text: translations.MastersDegree,
    },
    {
      id: 3,
      text: translations.Doctorate,
    },
  ]);

  useEffect(() => {
    setData([
      {
        id: 1,
        text: translations.BachelorsDegree,
      },
      {
        id: 2,
        text: translations.MastersDegree,
      },
      {
        id: 3,
        text: translations.Doctorate,
      },
    ]);
  }, [translations]);

  const [allValues, setAllValues] = useState({
    Name: "",
    Lastname: "",
    Email: "",
    MobileNumber: "",
    PreferredUniversity: "",
    WhichCourseWant: "",
    ApplyFor: "",
    Comment: "",
  });

  //
  useEffect(() => {
    setAllValues({
      Name: Name,
      Lastname: Lastname,
      Email: Email,
      MobileNumber: MobileNumber,
      PreferredUniversity: PreferredUniversity,
      WhichCourseWant: WhichCourseWant,
      ApplyFor: ApplyFor,
      Comment: Comment,
    });
  }, [
    Name,
    Lastname,
    Email,
    MobileNumber,
    PreferredUniversity,
    WhichCourseWant,
    ApplyFor,
    Comment,
  ]);

  // upload

  const SentMail = (e) => {
    setLoader(true);
    e.preventDefault();

    // Create an object with your data
    const data = {
      Name: allValues.Name,
      Lastname: allValues.Lastname,
      Email: allValues.Email,
      MobileNumber: allValues.MobileNumber,
      PreferredUniversity: allValues.PreferredUniversity,
      WhichCourseWant: allValues.WhichCourseWant,
      ApplyFor: ApplyFor,
      Comment: allValues.Comment,
    };

    // Convert the data object to a query string
    const queryString = `
      Name - ${data.Name}; 
      Lastname - ${data.Lastname}; 
      Email - ${data.Email}; 
      MobileNumber - ${data.MobileNumber}; 
      PreferredUniversity - ${data.PreferredUniversity}; 
      WhichCourseWant - ${data.WhichCourseWant}; 
      ApplyFor - ${data.ApplyFor}; 
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
        setLastname("");
        setEmail("");
        setPhonemobilewhatsapp("");
        setPreferduni("");
        setCurswant("");
        setApplyFor("");
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
        src={bg}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
      />
      {loader ? (
        <div className="flex  gap-[5px] items-center pt-[2px] w-[100%] h-[500px] rounded-[10px]  text-white justify-center  text-[18px]  duration-200">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      ) : (
        <form
          onSubmit={SentMail}
          encType="multipart/form-data"
          className="flex flex-col items-center gap-7"
        >
          <div
            className={`more1800pxresp max-w-[1519px] w-[600px] max-sm:w-[90%] flex flex-col my-[150px] bg-white rounded-[15px] p-[40px] gap-y-[20px] max-smaller:px-[20px] max-smaller:my-[100px] ${
              lang === "Arabic" && "items-end"
            }`}
          >
            <img src={image} alt="" className="w-full object-cover" />
            <h1 className="text-[30px] font-semibold">
              {translations.ApplyForm}
            </h1>
            <div
              className={`w-full pt-[30px]  flex border-t-[1px] gap-[2%] max-smaller:flex-col max-smaller:gap-y-[20px] ${
                lang === "Arabic" && "flex-row-reverse"
              }`}
            >
              <div className="w-[48%] h-[40px] max-smaller:w-full">
                <Inputinapply
                  placeholder={translations.Name}
                  lang={lang}
                  setName={setName}
                />
              </div>
              <div className="w-[48%] h-[40px] max-smaller:w-full">
                <Inputinapply
                  placeholder={translations.lastname}
                  lang={lang}
                  setName={setLastname}
                />
              </div>
            </div>
            <div className="w-full h-[40px]">
              <Inputinapply
                placeholder={translations.Email}
                lang={lang}
                setName={setEmail}
              />
            </div>
            <div className="w-full h-[40px]">
              <Inputinapply
                placeholder={translations.phonemobilewhatsapp}
                lang={lang}
                setName={setPhonemobilewhatsapp}
              />
            </div>
            <div className="w-full h-[40px]">
              <Inputinapply
                placeholder={translations.preferduni}
                lang={lang}
                setName={setPreferduni}
              />
            </div>
            <div className="w-full h-[40px]">
              <Inputinapply
                placeholder={translations.curswant}
                lang={lang}
                setName={setCurswant}
              />
            </div>

            {/* <div
              className={`flex flex-col gap-y-[10px] mt-[10px] ${
                lang === "Arabic" && "items-end"
              }`}
            >
              <p className="font-semibold">{translations.uploadpassport}</p>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-[#fd4a36] file:text-white
      hover:file:bg-[#fd7667]"
              />
            </div> */}
            {/* <div
              className={`flex flex-col gap-y-[10px] mt-[10px] ${
                lang === "Arabic" && "items-end"
              }`}
            >
              <p className="font-semibold">{translations.uploadeducation}</p>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-[#fd4a36] file:text-white
      hover:file:bg-[#fd7667]"
              />
            </div> */}
            <div
              className={`flex flex-col gap-y-[10px] mt-[10px] ${
                lang === "Arabic" && "items-end"
              }`}
            >
              <p className="font-semibold">{translations.Whatareyouapplyfor}</p>
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-[5px] cursor-pointer ${
                    lang === "Arabic" && "flex-row-reverse"
                  }`}
                  onClick={() => {
                    setApplyFor(item.text);
                  }}
                >
                  <div
                    className={`w-[30px] h-[30px] rounded-full border-[1px]  ${
                      ApplyFor === item.text ? "bg-[#fd4a36]" : ""
                    }`}
                  ></div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div
              className={`w-full ${
                lang === "Arabic" && "flex flex-col items-end"
              }`}
            >
              <p className="font-semibold mt-[10px]">{translations.comment}</p>
              <textarea
                value={Comment}
                onChange={(e) => handelChangeComment(e)}
                className="outline-none border-[1px] rounded-[10px] p-[10px] focus:border-[#fd4a36] duration-200 w-full h-[200px]"
              />
            </div>
            <div className="flex justify-start">
              <button
                onClick={() => {
                  handleUploadClick();
                }}
                type="submit"
                className="px-[15px] h-[40px] rounded-[10px] flex items-center text-white bg-[#fd4a36] hover:scale-95 duration-200 cursor-pointer"
              >
                {translations.submitform}
              </button>
            </div>
          </div>
        </form>
      )}
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
