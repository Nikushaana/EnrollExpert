import { useContext, useEffect, useState } from "react";
import money from "../../images/money.webp";
import EveryFaq from "../mainpage/everyfaq";
import { MainLang } from "../languagesfiles/langContext";

export default function Visa() {
  const { translations, lang } = useContext(MainLang);
    const [showdata, setShowdata] = useState([
        {
            id:1,
            question:"01. Do I require a visa?",
            ul:[
                {
                    id: 1,
                    text: translations.ans1,
                  },
                  {
                    id: 2,
                    text: translations.ans2,
                  },
            ]
        },
        {
            id:2,
            question:"02.How can I apply for a visa?",
            pTop:translations.ans3,
            ul:[
                {
                    id: 1,
                    text: translations.ans4,
                  },
                  {
                    id: 2,
                    text: translations.ans5,
                  },
                  {
                    id: 3,
                    text: translations.ans6,
                  },
            ]
        },
    ])

    useEffect(() => {
      setShowdata([
        {
          id:1,
          question:"01. Do I require a visa?",
          ul:[
              {
                  id: 1,
                  text: translations.ans1,
                },
                {
                  id: 2,
                  text: translations.ans2,
                },
          ]
      },
      {
          id:2,
          question:"02.How can I apply for a visa?",
          pTop:translations.ans3,
          ul:[
              {
                  id: 1,
                  text: translations.ans4,
                },
                {
                  id: 2,
                  text: translations.ans5,
                },
                {
                  id: 3,
                  text: translations.ans6,
                },
          ]
      },
      ])
    },[translations])
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[100px] gap-y-[20px]  max-smaller:pt-[50px] max-smaller:px-[26px]  ${lang === "Arabic" && "flex flex-col items-end"}`}>
        <h1 className="font-semibold text-[30px]">
          {translations.visatext1}
        </h1>
        <p className="text-[18px]">
          If an international student wants to study in Georgia, he or she
          should first learn about Georgia’s visa requirements. An international
          student will be unable to enter the country without a Georgian visa.
        </p>
        <p className="text-[18px]">
          A Georgian visa is a conditional permit in the form of a visa that
          verifies a person’s right to enter and/or stay in Georgia. It is given
          by putting a visa form in a person’s travel document or electronically
          (e-visa).An international student who meets the requirements and
          circumstances for obtaining a Georgian visa and wishes to study in
          Georgia may be given a Georgian visa with the right to single or
          multiple entries.
        </p>
        <p className="text-[18px]">
          In Georgia, there are five types of visas – A.B.C.D.T
        </p>
        <p className="text-[18px]">
          {translations.visatext2}
        </p>

        <div className="w-full h-[600px] flex items-center justify-center max-[760px]:h-[400px] max-[450px]:h-[200px] ">
          <img
            src={money}
            alt=""
            className=" h-full object-contain rounded-[15px]"
          />
        </div>

        <h1 className="text-[18px] font-semibold">
          {translations.visatext3}
        </h1>

        <ul className="list-disc">
          <li className="font-semibold text-[18px]">
          {translations.visatext4}
          </li>
          <li className="font-semibold text-[18px]">
          {translations.visatext5}
          </li>
        </ul>

        <h1 className="text-[18px] font-semibold">
        {translations.visatext6}
        </h1>

        <p className="text-[18px]">
          Georgian visas are issued electronically by the Georgian Ministry of
          Foreign Affairs if the corresponding visa application is filed through
          the Ministry’s specific website at{" "}
          <a
            className="text-[red] hover:text-gray-800 duration-150"
            href="https://www.geoconsul.gov.ge/"
          >
            https://www.geoconsul.gov.ge/
          </a>{" "}
          (the E-VISA PORTAL).
        </p>
        <p className="text-[18px]">
        {translations.visatext7}
        </p>
        <p className="text-[18px] font-semibold">
        {translations.visatext8}
        </p>
        <p className="text-[18px] font-semibold">
        {translations.visatext9}
        </p>

        <p className="text-[18px] font-semibold">
          ENROLL EXPERT’s experienced lawyers will handle your visa issue, so
          don’t wait; call us right away (clickable).
        </p>

        <p className="text-[18px] font-semibold">
        {translations.visatext10}
          <a
            className="text-[red] hover:text-gray-800 duration-150"
            href="https://www.geoconsul.gov.ge/"
          >
            mfa.gov.ge
          </a>
          ;
          <a
            className="text-[red] hover:text-gray-800 duration-150"
            href="https://www.geoconsul.gov.ge/"
          >
            geoconsul.gov.ge
          </a>
          ;
          <a
            className="text-[red] hover:text-gray-800 duration-150"
            href="https://www.geoconsul.gov.ge/"
          >
            evisa.gov.ge
          </a>
          .
        </p>

        <h1 className="font-semibold text-[30px]">
        {translations.visatext11}
        </h1>

        {showdata.map((item) => (
        <EveryFaq key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
}
