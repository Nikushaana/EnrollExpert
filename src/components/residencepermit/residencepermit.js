import { useContext } from "react";
import aplicatimg from "../../images/applicatimg.webp";
import residentt from "../../images/residenttt.webp";
import { MainLang } from "../languagesfiles/langContext";
export default function ResidencePermit() {
  const { translations,lang } = useContext(MainLang);
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col items-center  py-[100px] gap-y-[20px]  max-smaller:pt-[50px] max-smaller:px-[16px]  ${lang === "Arabic" && "flex flex-col items-end"}`}>
        <h1 className="font-semibold text-[30px]">
          {translations.residencetitle}
        </h1>
        <p className="text-[18px]">
          {translations.residencetext1}
        </p>
        <p className="text-[18px]">
          To obtain a student visa-based temporary residence permit in Georgia,
          the international student or his/her representative must apply to the
          State Services Development Agency within the first 45 days of the
          visa’s validity. After receiving all required documents, the State
          Services Development Agency will issue the residence permit within 30
          days. However, it is also possible to receive the service within a
          shorter period. Detailed information about this issue will be provided
          by an ENROLL EXPERT representative, who is 24/7 online and ready to
          answer any of your questions.
        </p>
        <div className="h-[450px] max-[760px]:h-[400px] max-[450px]:h-[200px] ">
          <img
            src={aplicatimg}
            alt=""
            className="h-full object-contain rounded-[15px]"
          />
        </div>
        <p className="font-semibold text-[20px]">
          On the websites www.sda.gov.ge, www.psh.gov.ge, and www.centri.gov.ge,
          you can find more information about how to get a residence permit.
        </p>
        <div className="w-full flex gap-[2%] max-md:flex-col  max-md:gap-y-[30px]">
          <div className="w-[49%] h-[400px] max-md:w-full max-[490px]:h-[200px]">
            <img
              src={residentt}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[49%] h-[400px]  max-md:w-full  max-[490px]:h-[200px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ajykNXaCsjQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
