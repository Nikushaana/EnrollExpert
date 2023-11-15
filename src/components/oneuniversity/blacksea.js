import inimg from "../../images/blacksea.jpg";

export default function Blacksea() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]   max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
          Information for international students about an International Black
          Sea University
        </h1>
        <p className="text-[18px]">
          Here is everything an international student who wishes to study at the{" "}
          <span className="font-semibold">
            International Black Sea University,
          </span>{" "}
          in Tbilisi, Georgia should know.
        </p>
        <h1 className="font-semibold text-[20px]">
          If you want to continue your education at the International Black Sea
          University, you can learn more about the programmes and costs by
          reading the information below.
        </h1>

        <h1 className="font-semibold text-[20px]">
          Programs and tuition fees for international students at the
          International Black Sea University
        </h1>
        <h1 className="font-semibold text-[20px] text-gray-800">
          International University of the Black Sea
        </h1>

        <p className="text-[18px] text-gray-800 ">
          International Black Sea University is well-known throughout the world
          for its superb teaching, management, research, and societal
          integration.
        </p>
        <p className="text-[18px] text-gray-800 ">
          It provides the ideal setting for students and faculty to promote
          intercultural conversation, respect global human values, and strive to
          learn throughout their lives.
        </p>
        <p className="text-[18px] text-gray-800 ">
          International Black Sea University is committed to preparing highly
          prepared graduates with modern theoretical and practical knowledge, as
          well as global human values and a dedication to lifelong learning,
          through its quality management system. The aim is to assist in the
          development and maintenance of a democratic civil society centred on
          peace and intercultural discussion through student and staff mobility
          and professional support from a welcoming staff in a truly academic
          setting.
        </p>

        <h1 className="font-semibold text-[20px] text-gray-800">
          Quality Assurance Policy
        </h1>

        <p className="text-[18px] text-gray-800 ">
          IBSU will produce highly competent professionals with local and
          worldwide values who strive for continual improvement in a practical
          academic setting by putting student satisfaction first and obeying the
          rules of the law and our quality management system.
        </p>

        <h1 className="font-semibold text-[20px] text-gray-800">
          Why choose IBSU?
        </h1>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer">
            Academic faculty with national and international recognition
          </li>
          <li className="cursor-pointer">
            Programs for international exchange and study abroad
          </li>
          <li className="cursor-pointer">
            Cultural and educational trips abroad; diverse socio-cultural
            events; a secure school environment; and a 98% employment rate
          </li>
          <li className="cursor-pointer">
            Learning English and/or using Georgia’s flexible tuition fee payment
            system
          </li>
          <li className="cursor-pointer">
            Tbilisi is Georgia’s scientific epicentre.
          </li>
          <li className="cursor-pointer">The student-to-teacher ratio</li>
        </ul>

        <p className="text-[18px] text-gray-800 ">
          We offer 30 English programmes at IBSU throughout three levels of
          education.
        </p>

        <h1 className="font-semibold text-gray-800 text-[20px]">
          International Black Sea University’s programmes and tuition rates for
          International students
        </h1>
        <h1 className="font-semibold text-gray-800 text-[20px]">
          Bachelor Programs:
        </h1>

        <ul className="list-disc text-[18px]">
          <li>Business Administration – 9900 US</li>
          <li>Finances – 9900 US</li>
          <li>Management – 9900 US</li>
          <li>Marketing -9900 US</li>
          <li>Accounting and Audit – 9900 US</li>
          <li>Tourism – 9900 US</li>
          <li>Informatics – არ არის საიტზე ხელმისაწვდომი</li>
          <li>Architecture – არ არის საიტზე ხელმისაწვდომი</li>
          <li>Economics – 9900 US</li>
          <li>International relations – 9900 US</li>
          <li>English philology – 9900 US</li>
          <li>American studies – 9900 US</li>
        </ul>

        <h1 className="font-semibold text-gray-800 text-[20px]">
          Master’s programs:
        </h1>

        <ul className="list-disc text-[18px]">
          <li>Finances -9900 US</li>
          <li>Management -9900 US</li>
          <li>Marketing -9900 US</li>
          <li>Computer sciences</li>
          <li>International relations – 9900 US</li>
          <li>Our foreign affairs – 9900 US</li>
          <li>Education administration – 9900 US</li>
        </ul>

        <h1 className="font-semibold text-gray-800 text-[20px]">
          Doctoral programs:
        </h1>

        <ul className="list-disc text-[18px]">
          <li>Business Administration -9900 US</li>
          <li>Computer sciences – არ არის საიტზე ხელმისაწვდომი</li>
          <li>Education sciences – 9900 US</li>
        </ul>

        <h1 className="font-semibold text-gray-800 text-[20px]">
          Tuition fees do not include accommodation, living, travel, insurance,
          or other expenses
        </h1>

        <iframe
          className="w-full h-[600px]"
          src="https://www.youtube.com/embed/0Yg28-hUQbI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
