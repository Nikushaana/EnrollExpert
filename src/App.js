import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import "./styles/main.css";
import MainPage from "./components/mainpage/mainpage";
import Footer from "./components/footer/footer";
import ListOfUniversity from "./components/listofuniversity/listofuniversity";
import OneUniversity from "./components/oneuniversity/uniofgeo";
import UOG from "./components/oneuniversity/uniofgeo";
import IliaStateUni from "./components/oneuniversity/iliastateuni";
import Tsmu from "./components/oneuniversity/tsmu";
import Tsu from "./components/oneuniversity/tsu";
import Alte from "./components/oneuniversity/alte";
import Caucasus from "./components/oneuniversity/caucasus";
import Newvision from "./components/oneuniversity/newvision";
import Technical from "./components/oneuniversity/technical";
import Webster from "./components/oneuniversity/webster";
import Blacksea from "./components/oneuniversity/blacksea";
import Aviation from "./components/oneuniversity/aviation";
import Americanuni from "./components/oneuniversity/americanuni";
import CaucasusInternational from "./components/oneuniversity/caucasinternational";
import Kiu from "./components/oneuniversity/kiu";
import Ken from "./components/oneuniversity/kenwalker";
import ListOfPrograms from "./components/listofprograms/listofprograms";
import AdmissionProcess from "./components/admissionprocess/admissionprocess";
import Visa from "./components/visa/visa";
import ResidencePermit from "./components/residencepermit/residencepermit";
import Accommodation from "./components/accommodation/accommodation";
import ArrivalAirportPickup from "./components/arrivalandairportpickup/arrivalandairportpickup";
import Blog from "./components/blog/blog";
import InnerBlog from "./components/blog/innerblog";
import AboutUs from "./components/aboutus/aboutus";
import Faq from "./components/faq/faq";
import Contact from "./components/contact/contact";
import Apply from "./components/apply/apply";
import StudyInGeo from "./components/studyingeopage/studyingeo";
import ChatIcon from "./components/chat/chaticon";
import BachelorProgs from "./components/bachelorprogs/bachelorprogs";
import MasterDeg from "./components/masterdeg/masterdeg";
import Phd from "./components/phd/phd";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import ChangeLanguage from "./components/changelanguage/changelanguage";
import AdminPanelLogin from "./components/adminpanel/adminpanelogin";
import MainAdmin from "./components/adminpanel/mainadmin";

// axios
import axios from "axios";
import { useState } from "react";
import BlogContext from "./components/blog/BlogContext";
// axios

function App() {
  const [blogData, setBlogData] = useState([]);
  return (
    <>
      <BlogContext.Provider value={{ blogData, setBlogData }}>
        <Header />
        <Routes>
          <Route path="admin/*" element={<MainAdmin />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:Id" element={<InnerBlog />} />

          <Route path="/" element={<MainPage />} />
          <Route path="list-of-university/*" element={<ListOfUniversity />} />
          <Route path="university-of-georgia" element={<UOG />} />
          <Route path="ilia-state-university" element={<IliaStateUni />} />
          <Route path="tsmu" element={<Tsmu />} />
          <Route path="tsu" element={<Tsu />} />
          <Route path="alte-university" element={<Alte />} />
          <Route path="caucasus-university" element={<Caucasus />} />
          <Route path="new-vision" element={<Newvision />} />
          <Route path="techical-university" element={<Technical />} />
          <Route path="webster-university" element={<Webster />} />
          <Route path="blacksea" element={<Blacksea />} />
          <Route path="aviation" element={<Aviation />} />
          <Route path="american-university" element={<Americanuni />} />
          <Route
            path="Caucasus-international-university"
            element={<CaucasusInternational />}
          />
          <Route path="kiu" element={<Kiu />} />
          <Route path="ken-walker" element={<Ken />} />

          <Route path="list-of-programs" element={<ListOfPrograms />} />
          <Route path="admission-process" element={<AdmissionProcess />} />
          <Route path="visa" element={<Visa />} />
          <Route path="residence-permit" element={<ResidencePermit />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route
            path="arrival-and-airport-pickup"
            element={<ArrivalAirportPickup />}
          />

          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apply" element={<Apply />} />
          <Route path="study-in-georgia" element={<StudyInGeo />} />

          <Route path="bachelorprogs" element={<BachelorProgs />} />
          <Route path="masterdeg" element={<MasterDeg />} />
          <Route path="phd" element={<Phd />} />
        </Routes>
        <Footer />
        <ChatIcon />
        <ScrollToTop />
        <ChangeLanguage />
      </BlogContext.Provider>
    </>
  );
}

export default App;
