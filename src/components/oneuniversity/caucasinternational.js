import inimg from "../../images/caucintern.webp";

export default function CaucasusInternational() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]   max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
          Information for international students
        </h1>
        <p className="text-[18px]">
          <span className="font-semibold">
            Here you will learn everything an international student who wants to
            study at Caucasus International University in Georgia needs to know.
            If you want to continue your studies in Georgia, you can find out
            more about the programs and costs at Caucasus International
            University here. Caucasus International University (CIU)
          </span>{" "}
          is a constantly growing, development-oriented higher education
          institution that appeared in the Georgian educational sphere in 1995.
          It has been operating under its current name since 2006. The CIU
          implements a three-stage academic study cycle. Innovative methods
          relevant to the modern academic-scientific environment are introduced
          in undergraduate, postgraduate, and doctoral programs. In 2018, the
          university successfully received another authorization, which was
          conducted according to international education standards with the
          participation of foreign experts. All programs offered by the
          university are accredited. Five faculties are operating at CIU: law,
          business, medicine, viticulture-winemaking, and social sciences. Each
          faculty offers students modern teaching methods. Currently, more than
          4,000 students from more than 50 countries study at Caucasus
          International University. The university is known for its diverse
          student life, exchange programs with top European universities,
          student employment policies, practicing professors, modern practical
          bases and clinics, and high level of social responsibility.It is a
          distinguished higher education institution that creates a successful
          future for the student. Programs and tuition fees for international
          students at the Caucasus International University
        </p>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer text-[red] hover:text-gray-800 duration-150">
            English Educational Program in Medicine, 5500 USD
          </li>
          <li className="cursor-pointer text-[red] hover:text-gray-800 duration-150">
            English Educational Program in Dentistry: 4500 USD
          </li>
        </ul>

        <p className="text-[18px]">Residency </p>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer text-[red] hover:text-gray-800 duration-150">
          Postgraduate Program in Global Policy and Security Studies Offered in English – 3000 USD
          </li>
        </ul>

        <p className="text-[18px]">Doctoral Programs </p>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer text-[red] hover:text-gray-800 duration-150">
          Undergraduate Educational Program in Business Administration offered in English, 3500 USD
          </li>
        </ul>

        <p className="text-[18px]">Postgraduate Programs </p>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer text-[red] hover:text-gray-800 duration-150">
          Postgraduate Educational Program in International Marketing offered in English, 3500 USD
          </li>
        </ul>

        <h1 className="font-semibold text-[20px]">
        The tuition fee does not include accommodation, living costs, travel costs, insurance, and other expenses.
        </h1>
      </div>
    </div>
  );
}
