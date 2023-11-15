import inimg from "../../images/kutaisi.jpg";

export default function Kiu() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]  max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
          Information for international students about Kutaisi International
          University (KIU)
        </h1>

        <p className="text-[18px]">
          Here is everything an international student who wishes to study at the
          Kutaisi International University, in Kutaisi, Georgia should know.
        </p>

        <h1 className="font-semibold text-[20px]">
          If you want to continue your education at the Kutaisi International
          University, you can learn more about the programmes and costs by
          reading the information below.
        </h1>
        <h1 className="font-semibold text-[20px]">
          About the Kutaisi International University
        </h1>

        <p className="text-[18px]">
          Kutaisi International University Campus is located in Kutaisi,
          Georgia. Kutaisi International University (KIU) welcomed its first
          class of students in 2020. The university’s mission is to eventually
          become a regional and international hub of education, science, and
          technology. As a result, Georgia will be at the forefront of worldwide
          educational and scientific endeavors.{" "}
        </p>
        <p className="text-[18px]">
          KIU now offers undergraduate English degree programs. In the future,
          KIU intends to introduce vocational, graduate, and post-graduate
          degree programs. The university’s goal is to train a highly trained
          workforce and human capital to promote economic growth and development
          in Georgia and the region as a whole.
        </p>
        <p className="text-[18px]">
          KIU works with the top university in Europe, the Technical University
          of Munich (TUM International GmbH and TUM). The business concept for
          the institution was created in partnership with TUM and TUM
          International GmbH. Prof. Dr Wolfgang A. Herrmann, former President of
          TUM, is the Honorary President of Kutaisi International University.{" "}
        </p>
        <p className="text-[18px]">
          Kutaisi International University’s programs and tuition rates for
          international students
        </p>

        <h1 className="font-semibold text-[20px]">
          KIU offers to international students three international-standard
          undergraduate programmes in English:
        </h1>

        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer text-gray-800 ">Computer science</li>
          <li className="cursor-pointer text-gray-800 ">Mathematics</li>
          <li className="cursor-pointer text-gray-800 ">Administration</li>
        </ul>

        <h1 className="font-semibold text-[20px]">
          Tuition fees do not include accommodation, living, travel, insurance,
          or other expenses.
        </h1>

        <iframe
        className="w-full h-[600px]"
          src="https://www.youtube.com/embed/EXxwB2r2meU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
