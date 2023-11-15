import inimg from "../../images/tssuimg.webp";
export default function Tsmu() {
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
          study at Tbilisi State Medical University in Georgia needs to know. If
          you want to continue your studies in Georgia, you can find out more
          about the programs and costs at Tbilisi State Medical University here.
          <span className="font-semibold">
            History of Tbilisi State Medical University
          </span>{" "}
          The history of Tbilisi State Medical University and higher medical
          education as well add up to more than 9 decades in Georgia. Tbilisi
          State Medical University, from the very beginning, found itself at the
          forefront of overcoming the XXI century challenges of reforming
          medical education. In 1997, the university had already developed a
          strategy for implementing outcome-oriented teaching methodologies. The
          strategy has been developed on the basis of European experts
          recommendations. After all, the University is a member of the
          Association of Medical European Education (AMEE), also a member of the
          World Federation for Medical Education (WFME), and a cofounder of the
          East-European Association of Medical Education (EEAME). The University
          is not only the executor of the legislative and recommendatory
          regulations of these international organizations but also participated
          in the recommendations systematization process. According to the
          above-mentioned experts, modern, competitive international medical
          education considers the following main points: critical thinking,
          information management, and communication skills. These are the bases
          for the development of basic sciences and public health, professional
          values, and professional relations.{" "}
          <span className="font-semibold">About University</span> The mission of
          TSMU, an autonomous higher education institution with almost nine
          decades of history, is:
        </p>

        <ul className="list-disc text-[18px]">
          <li className="">
            creation, development, and dissemination of new knowledge based on
            high-quality teaching, research, and professional training at the
            undergraduate and postgraduate levels of medical education;
          </li>
          <li className="">
            participation in the enhancement of population quality of life and
            the improvement of the health care system and its effectiveness;
          </li>
        </ul>

        <p className="text-[18px]">
          Providing the graduates with the knowledge and skills necessary for
          their harmonious integration into national and international
          professional communities VISION Teaching, research, medical, and
          pharmaceutical activities are inseparable at Tbilisi State Medical
          University. This principle of continuum in medical education at TSMU
          is ensured by the broad scale activity of undergraduate, postgraduate,
          residency, and continuous professional development programs, as well
          as the programs of qualification improvement for medical and academic
          staff. The university provides student-oriented and lifelong learning
          opportunities. Teaching of fundamental and clinical sciences as well
          as research at TSMU is conducted in Georgian, English, and Russian
          medium academic undergraduate (Bachelor, one-cycle), Master degree,
          PhD, and postgraduate development, as well as with vocational
          educational programs for the citizens of Georgia and for international
          students from up to 72 countries, with the following main directions
          that are necessary for competitive international medical education:
          sectoral academic knowledge, information management, clinical
          reasoning, practical skills, and communication skills. Tbilisi State
          Medical University is the leader in Georgia and will continue to
          strengthen its leading position as an internationally recognized
          medical education and research hub in the country and the Caucasus
          region. Programs and tuition fees for international students at the
          Tbilisi State Medical University
        </p>
        <ul className="list-disc text-[red] text-[18px]">
          <li className="hover:text-gray-800 duration-150 cursor-pointer">
          Medical Doctor Program (English Medium) – tuition fee: 8.000 USD per year;
          </li>
          <li className="hover:text-gray-800 duration-150 cursor-pointer">
          Medical Doctor Program (Russian Medium) – tuition fee: 4.000 USD per year;
          </li>
          <li className="hover:text-gray-800 duration-150 cursor-pointer">
          Dental Medicine Program (English Medium) – tuition fee: 7.000 USD per year;
          </li>
          <li className="hover:text-gray-800 duration-150 cursor-pointer">
          Dental Medicine Program (Russian Medium)- tuition fee: 4.000 USD per year;
          </li>
          <li className="hover:text-gray-800 duration-150 cursor-pointer">
          US Medical Doctor Program – tuition fee for international students: 13.500 USD per year;
          </li>
          <li className="hover:text-gray-800 duration-150 cursor-pointer">
          Faculty of Pharmacy – tuition fee: 3.500 USD per year;
          </li>
          <li className="hover:text-gray-800 duration-150 cursor-pointer">
          Faculty of Physical Medicine and Rehabilitation – tuition fee: 3.000 USD per year;
          </li>
        </ul>
        <h1 className="font-semibold text-[20px]">
        The tuition fee does not include: accommodation, living costs, travel costs, insurance, and other expenses.
        </h1>
      </div>
    </div>
  );
}
