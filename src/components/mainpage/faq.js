import { useContext, useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import EveryFaq from "./everyfaq";
import { MainLang } from "../languagesfiles/langContext";

export default function FAQ() {
  const { translations } = useContext(MainLang);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: translations.question1,
      pTop: translations.ptop1,
      ul: [
        {
          id: 1,
          text: translations.li11,
        },
        {
          id: 2,
          text: translations.li12,
        },
        {
          id: 3,
          text: translations.li13,
        },
        {
          id: 4,
          text: translations.li14,
        },
        {
          id: 5,
          text: translations.li15,
        },
        {
          id: 6,
          text: translations.li16,
        },
      ],
      pBot: translations.pBot1,
    },
    {
      id: 2,
      question: translations.question2,
      pTop: translations.ptop2,
    },
    {
      id: 3,
      question: translations.question3,
      ul: [
        {
          id: 1,
          text: translations.li31,
        },
        {
          id: 2,
          text: translations.li32,
        },
      ],
    },
    {
      id: 4,
      question: translations.question4,
      pTop: translations.pTop4,
      ul: [
        {
          id: 1,
          text: translations.li41,
        },
        {
          id: 2,
          text: translations.li42,
        },
        {
          id: 3,
          text: translations.li43,
        },
      ],
    },
    {
      id: 5,
      question: translations.question5,
      ul: [
        {
          id: 1,
          text: translations.li51,
        },
        {
          id: 2,
          text: translations.li52,
        },
        {
          id: 3,
          text: translations.li53,
        },
      ],
      pBot: translations.pBot5,
    },
    {
      id: 6,
      question: translations.question6,
      pTop: translations.pTop6,
    },
    {
      id: 7,
      question: translations.question7,
      pTop: translations.pTop7,
      ul: [
        {
          id: 1,
          text: translations.li71,
        },
        {
          id: 2,
          text: translations.li72,
        },
        {
          id: 3,
          text: translations.li73,
        },
      ],
    },
    {
      id: 8,
      question: translations.question8,
      pTop: translations.pTop8,
    },
    {
      id: 9,
      question: translations.question9,
      pTop: translations.ptop9,
    },
  ]);
  
  useEffect(() => {
    setQuestions([
      {
        id: 1,
        question: translations.question1,
        pTop: translations.ptop1,
        ul: [
          {
            id: 1,
            text: translations.li11,
          },
          {
            id: 2,
            text: translations.li12,
          },
          {
            id: 3,
            text: translations.li13,
          },
          {
            id: 4,
            text: translations.li14,
          },
          {
            id: 5,
            text: translations.li15,
          },
          {
            id: 6,
            text: translations.li16,
          },
        ],
        pBot: translations.pBot1,
      },
      {
        id: 2,
        question: translations.question2,
        pTop: translations.ptop2,
      },
      {
        id: 3,
        question: translations.question3,
        ul: [
          {
            id: 1,
            text: translations.li31,
          },
          {
            id: 2,
            text: translations.li32,
          },
        ],
      },
      {
        id: 4,
        question: translations.question4,
        pTop: translations.pTop4,
        ul: [
          {
            id: 1,
            text: translations.li41,
          },
          {
            id: 2,
            text: translations.li42,
          },
          {
            id: 3,
            text: translations.li43,
          },
        ],
      },
      {
        id: 5,
        question: translations.question5,
        ul: [
          {
            id: 1,
            text: translations.li51,
          },
          {
            id: 2,
            text: translations.li52,
          },
          {
            id: 3,
            text: translations.li53,
          },
        ],
        pBot: translations.pBot5,
      },
      {
        id: 6,
        question: translations.question6,
        pTop: translations.ptop6,
      },
      {
        id: 7,
        question: translations.question7,
        pTop: translations.pTop7,
        ul: [
          {
            id: 1,
            text: translations.li71,
          },
          {
            id: 2,
            text: translations.li72,
          },
          {
            id: 3,
            text: translations.li73,
          },
        ],
      },
      {
        id: 8,
        question: translations.question8,
        pTop: translations.ptop8,
      },
      {
        id: 9,
        question: translations.question9,
        pTop: translations.ptop9,
      },
    ])
  },[translations])
  
  return (
    <div className="w-full flex flex-wrap justify-between gap-y-[20px]">
      {questions.map((item) => (
        <div className="w-[48%] max-sm:w-full" key={item.id}>
          <EveryFaq item={item} />
        </div>
      ))}
    </div>
  );
}
