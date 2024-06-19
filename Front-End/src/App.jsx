import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ConsServ from "./Pages/ConsServ";
import DevServ from "./Pages/DevServ";
import Career from "./Pages/Careers";
import Testimonials from "./Pages/Testimonials";
import FaQ from "./Pages/Faq";
import Login from "./pagesApk/Login";
import DashUser from "./pagesApk/dashUser";
import Testimoni from "./pagesApk/Testimoni";
import Setting from "./pagesApk/Settings";
import Layanan from "./pagesApk/Layanan";
import Pemesanan from "./pagesApk/Pemesanan";
import DashAdmin from "./pagesApk/dashAdmin";
import LayananAdmin from "./pagesApk/LayananAdmin";
import PesananAdmin from "./pagesApk/pesananAdmin";
import Pekerja from "./pagesApk/Pekerja";
import SettingAdmin from "./pagesApk/settingAdmin";
import TambahLayanan from "./pagesApk/TambahLayanan";
import TambahPekerja from "./pagesApk/TambahPekerja";
import ProfileUser from "./pagesApk/profUser";
import ProfileAdmin from "./pagesApk/profAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consServ" element={<ConsServ />} />
        <Route path="/devServ" element={<DevServ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/faq" element={<FaQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardUser" element={<DashUser />} />
        <Route path="/pengaturan" element={<Setting />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/dashboardAdmin" element={<DashAdmin />} />
        <Route path="/layananAdmin" element={<LayananAdmin />} />
        <Route path="/pesananAdmin" element={<PesananAdmin />} />
        <Route path="/pekerja" element={<Pekerja />} />
        <Route path="/pengaturanAdmin" element={<SettingAdmin />} />
        <Route path="/tambahLayanan" element={<TambahLayanan />} />
        <Route path="/tambahPekerja" element={<TambahPekerja />} />
        <Route path="/testimoni" element={<Testimoni />} />
        <Route path="/profileAdmin" element={<ProfileAdmin />} />
        <Route path="/profileUser" element={<ProfileUser />} />
      </Routes>
    </Router>
  );
}

export default App;
