import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Program from "../pages/Program";
import Research from "../pages/Research";
import SPDC from "../pages/SPDC";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/research" element={<Research />} />
        <Route path="/spdc" element={<SPDC />} />
      </Route>
    </Routes>
  );
}
