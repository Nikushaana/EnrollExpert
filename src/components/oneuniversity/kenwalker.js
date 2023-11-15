import inimg from "../../images/ken.webp";

export default function Ken() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]  max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
          Information for international students about Ken walker international
          university
        </h1>

        <p className="text-[18px]">
          Here is everything an international student who wishes to study at the
          <span className="font-semibold">
            Ken walker international university,
          </span>{" "}
          in Tbilisi, Georgia should know.
          <span className="font-semibold">
            If you want to continue your education at Ken walker international
            university, you can learn more about the programmes and costs by
            reading the information below. KWIU’s mission
          </span>{" "}
          is to be a worldwide known higher education institution by 2027 with a
          reputation as a competitive and dependable partner in healthcare and
          higher education. KWIU will prioritize the implementation of
          educational programs that are in line with international standards,
          the promotion of research activities, the internationalization of
          educational, research, and administrative processes, and the creation
          of a student-centred environment through scientific, cultural,
          creative, and cognitive development. The medical education program is
          based on Emory University School of Medicine’s US medical curriculum
          and meets international and local regulations. The US MD educational
          model meets the main standards of the World Federation of Medical
          Education (WFME) while also taking local considerations into account.
          It consists of preclinical and clinical stages:
        </p>

        <h1 className="font-semibold text-[20px]">
          Preclinical stage consists of the:
        </h1>
        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer text-gray-800 ">
            Premedical/ preparation
          </li>
          <li className="cursor-pointer text-gray-800 ">Healthy Human</li>
          <li className="cursor-pointer text-gray-800 ">Humans Diseases</li>
        </ul>

        <h1 className="font-semibold text-[20px]">
          Clinical stage consists of the following components:
        </h1>
        <ul className="list-disc text-[18px]">
          <li className="cursor-pointer text-gray-800 ">
            Application of Medical Sciences,
          </li>
          <li className="cursor-pointer text-gray-800 ">Discovery phase,</li>
          <li className="cursor-pointer text-gray-800 ">Transition phase.</li>
        </ul>

        <p className="text-[18px]">
          <span className="font-semibold">
            Innovative Approaches for Teaching and Learning
          </span>{" "}
          Throughout the teaching and assessment processes, internationally
          recognized new approaches are employed, which are chosen with the
          active participation of American colleagues. The Miller Pyramid is
          commonly used in medicine to evaluate clinical competency.{" "}
          <span className="font-semibold">
            Programs and tuition fees for international students at Ken walker
            international university
          </span>
          <span className="font-semibold text-[red] hover:text-gray-800 duration-150">
            A one-step educational program in Medicine
          </span>{" "}
          Program Title -Medicine Education Level One–Step Educational Program
          Qualification Degree – Medical Doctor Degree Study Duration – 360 ECTS
          credits (6 Years (1 ECTS credit – 30 hours) Tuition Fee – 7000 USD;{" "}
          <span className="font-semibold text-[red] hover:text-gray-800 duration-150">
            One-step educational program – Stomatology
          </span>{" "}
          Program Title – Stomatology Education Level One–Step Educational
          Program Qualification Degree – Doctor of Dental Medicine (DDM) Study
          Duration – 300 ECTS credits (5 Years (1 ECTS credit – 30 hours)
          Tuition Fee – 7000 USD Tuition fees do not include accommodation,
          living, travel, insurance, or other expenses
        </p>
      </div>
    </div>
  );
}
