import inimg from "../../images/plane.jpg";
import video from "../../images/flyng.mp4";
export default function Aviation() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] flex flex-col  py-[50px] gap-y-[20px]">
        <div className="w-full h-[600px]   max-[400px]:h-[300px]">
          <img src={inimg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-semibold text-[20px]">
          Information for international students about Georgian Aviation
          University (SSU)
        </h1>
        <p className="text-[18px]">
          Here is everything an international student who wishes to study at the
          <span className="font-semibold">Georgian Aviation University (SSU),</span> in Tbilisi, Georgia should know.
          <span className="font-semibold">If you want to continue your education at the Georgian Aviation
          University (SSU), you can learn more about the programmes and costs by
          reading the information below. Georgian Aviation University (SSU)</span> It
          is the only aviation university located in Tbilisi, Georgia. The
          Institute of Aviation of Georgia was established in 1992, in the
          structure of the Georgian Technical University. However, in 2005, the
          Aviation Institute descended from the Technical University and became
          an independent Georgian Aviation University. The university is
          accredited by the Ministry of Education and Science of Georgia.
          Recently, the Georgian Aviation University has become a favourite
          destination for local and international students seeking a career in
          the aviation industry. The university has several types of aircraft
          for students, such as the A-22, Cessna-152, Piper Seneca and Boeing
          737-200. Our mission is to provide society with a higher and more
          professional education based on many years of experience in the field
          of aviation and implemented on a modern educational material and
          technical base in accordance with international standards in the
          directions of flight training, aviation engineering, and business
          administration; to prepare qualified graduates and promote the
          development of their personal qualities, which will help them become
          professionals in the field; <span className="font-semibold">Programs and tuition fees for
          international students at the Georgian Aviation University Faculty of
          Engineering</span> Bachelor Program: Aircraft Technical Exploitation -4000
          Euros annually Master Program: Aircraft Technical Exploitation – 4000
          Euros annually Vocational Program: Aircraft Technical Exploitation
          -8000 Euros annually File with syllabus <span className="font-semibold">Faculty of Flight Training</span>
          Bachelor Program: Flight Exploitation of Aircraft (Pilot) (CPL
          Multi-engine) – 13 000 Euros annually Vocational Program: Flight
          Exploitation of Aircraft (Pilot) (CPL Single Engine) – 42 000 Euro
          full program File with syllabus <span className="font-semibold">Faculty of Business Administration</span> Air
          Transport Management – 4000 Euros annually <span className="font-semibold text-[red] hover:text-800 duration-150">File with syllabus</span> <span className="font-semibold">Tuition
          fees do not include accommodation, living, travel, insurance, or other
          expenses.</span>
        </p>

        <div className="">
          <video controls className="h-[600px]  object-contain">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
