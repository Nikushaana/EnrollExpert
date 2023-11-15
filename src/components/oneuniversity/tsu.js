import inimg from "../../images/tsuimg.webp";
import React from "react";

export default function Tsu() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]  max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
          Information about Ivane Javakhishvili Tbilisi State University (TSU),
          for international students
        </h1>
        <p className="text-[18px]">
          Here is everything an international student who wishes to study at the
          <span className="font-semibold">
            Ivane Javakhishvili Tbilisi State University (TSU),
          </span>{" "}
          in Tbilisi, Georgia should know.
        </p>
        <p className="text-[18px] font-semibold">
          If you want to continue your education at the Ivane Javakhishvili
          Tbilisi State University (TSU), you can learn more about the
          programmes and costs by reading the information below.
        </p>
        <p className="text-[18px] font-semibold">
          Tbilisi State University <span className="font-semibold">(TSU)</span>{" "}
          is a member of several key international education networks. It is
          also proud of its graduates, many of whom have gone on to become
          well-known professors, scientists, and graduates who work with the
          European community and are well-known throughout the world.
        </p>
        <p className="text-[18px] font-semibold">
          <span className="font-semibold">TSU</span> offers international
          students a wide range of undergraduate, graduate, and doctorate
          programmes, as well as short-term English courses that draw students
          from all over the world. <span className="font-semibold">TSU‘</span>s
          internationalization is accelerating, intending to create a
          multicultural atmosphere that will improve teaching and research
          prospects. TSU believes in engaging and valuing all students and staff
          and advocates equal access to education.
        </p>
        <p className="text-[18px] font-semibold">
          Tbilisi State University is ranked 452nd in the world in the
          discipline of medicine (Copper League category) by the Round
          University Ranking in 2020. This category contains faculty evaluations
          with four basic components: indices of teaching, research,
          international diversity, and financial sustainability. The TSU Faculty
          of Medicine is placed 327th in the international university rating
          based on teaching criteria (silver category). It is ranked 524th
          overall and 205th in international diversity, according to the
          research component (silver category). Also, the faculty of medicine
          ranks 320th in terms of financial sustainability (bronze category).
          Source
        </p>

        <h1 className="font-semibold text-[20px]">
          TSU programmes and tuition costs for international students
        </h1>

        <p className="text-[18px]">
          7,000 $ per year for medicine (English Language)
        </p>
        <p className="text-[18px]">
          7,000 $ per year for dentistry (in English)
        </p>

        <h1 className="font-semibold text-[20px]">
          Tuition does not include living expenses, travel expenses, insurance,
          or other expenditures.
        </h1>

        <iframe
          className="w-full h-[600px]"
          src="https://www.youtube.com/embed/niUqa03_skM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
