import inimg from "../../images/alteuni.webp";
import React from "react";

export default function Alte() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]  max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
          Information for international students
        </h1>
        <p className="text-[18px]">
          Here you will learn everything an international student who wants to
          study at <span className="font-semibold">Alte University</span> in
          Georgia needs to know.
        </p>
        <p className="text-[18px] font-semibold">
          If you want to continue your studies in Georgia, you can find out more
          about the programs and costs at{" "}
          <span className="font-semibold">Alte University</span> here.
        </p>
        <h1 className="font-semibold text-[20px]">
          Why Study at Alte University
        </h1>
        <p className="text-[18px]">
          Alte University unites more than 2,100 students from 15 countries. The
          World Federation for Medical Education (WFME) has recognized the Alte
          University medical program, which is also a member of the European
          Association for Quality Assurance in Higher Education (ENQA) and the
          European Medical Education Association (AMEE).
        </p>
        <p className="text-[18px]">
          The program is recognized and approved by the Medical Council of India
          (MCI).
        </p>
        <p className="text-[18px]">
          At Alte University’s international school of medicine, international
          students have the opportunity to study in the fields of dentistry and
          medicine, where they will gain practical experience along with
          theoretical knowledge.
        </p>
        <h1 className="font-semibold text-[20px]">
          The course is taught in English.
        </h1>
        <p className="text-[18px]">
          The international medical program follows the standards set by the
          World Federation for Medical Education. Alte University is a member of
          both the European Association for Quality Assurance in Higher
          Education (ENQA) and the Association for Medical Education in Europe
          (AMEE). The diploma of Alte University is recognized in all European
          countries, in the USA by ECFMG, in Turkey, India, and in many other
          countries.
        </p>
        <p className="text-[18px]">
          After the course completion, degree holders can continue their study
          for a doctorate, apply for a residency course or a residency course
          equivalent in accordance with the laws of their counties, and after
          completing a standardized unified state examination, begin to pursue
          their own medical practice.
        </p>
        <h1 className="font-semibold text-[20px]">
          Bachelor programs and tuition fees for international students at the
          Alte University
        </h1>
        <ul className="list-disc text-[18px]">
          <li className="">Dentistry (English Language): 4500 USD</li>
          <li className="">Medical Doctor (English Language): 5500 USD</li>
        </ul>
        <h1 className="font-semibold text-[20px]">
          The tuition fee does not include: accommodation, living costs, travel
          costs, insurance, and other expenses.
        </h1>
        
        <iframe
          className="w-full h-[600px]"
          src="https://www.youtube.com/embed/ynMmMU4NQV4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
