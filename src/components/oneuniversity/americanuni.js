import inimg from "../../images/americanbg.webp";

export default function Americanuni() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]   max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
        Information for international students about  Georgian American University
        </h1>
        <p className="text-[18px]">
        Here is everything an international student who wishes to study at the Georgian American University, in Tbilisi, Georgia, should know.
        </p>
        <h1 className="font-semibold text-[20px]">
        If you want to continue your education at the  Georgian American University, you can learn more about the programs and costs by reading the information below.
        </h1>

        <p className="text-[18px] text-gray-800 ">
        „We seek to stay at the cutting edge of academic and practical knowledge, providing each student with a one-of-a-kind educational experience.
We promise to work together to help you reach your full potential and do everything we can to get you ready for “a successful and satisfying professional career.”
        </p>

        <p className="text-[18px] text-gray-800 ">
        Georgian American University President R. Michael Cowgill
        </p>
        <p className="text-[18px] text-gray-800 ">
        highest standards in higher education
Since it opened in 2005, Georgian American University (GAU) has tried to meet international standards for education while also turning out professionals who are competitive and successful.
The GAU team is made up of highly trained Georgian and foreign specialists.
Experienced professors foster a welcoming environment for students. GAU professors are among the few Georgian scientists whose scientific publications have been published in foreign peer-reviewed impact-factor journals. Scientists from top universities in the United States and Europe are among GAU’s international professors. Students, along with lecturers, are undertaking research in GAU’s research centres.
GAU has an Ombudsman Office, which ensures that students’ rights and freedoms are fully protected.
GAU’s location, contemporary infrastructure, green park, and ample parking combine for a pleasant academic environment. GAU is constantly improving and modernizing its facilities and equipment.
        </p>

        <p className="text-[18px] text-gray-800 ">
        Georgian American University’s programs and tuition expenses for international students
        </p>
        <p className="text-[18px] text-gray-800 ">
        GAU’s English programs are designed to give the most up-to-date methods and approaches that completely comply with international standards.
        </p>

        <h1 className="font-semibold text-[20px] text-[red] hover:text-gray-800 duration-150">
        Undergraduate Business Administration Program (BBA)
        </h1>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer">
          Duration: 4Academic Years (240 ECTS)
          </li>
          <li className="cursor-pointer">
          The annual tuition fee for the 1st year is USD 3,800
          </li>
          <li className="cursor-pointer">
          The annual tuition fee for the 2nd, 3rd and 4th years is USD 3,500
          </li>
        </ul>


        <h1 className="font-semibold text-[20px] text-[red] hover:text-gray-800 duration-150">
        Undergraduate Medical Doctor (MD) Program 
        </h1>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer">
          Duration: 6Academic Years (360 ECTS)
          </li>
          <li className="cursor-pointer">
          The cost of 1 credit is 83 USD, for completion 360 credits must be collected – USD,4990
          </li>
        </ul>

        <h1 className="font-semibold text-gray-800 text-[20px]">
        Tuition fees do not include accommodation, living, travel, insurance, or other expenses.
        </h1>
        
      </div>
    </div>
  );
}
