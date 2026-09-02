import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Benefits from "./components/sections/Benefits";
import Responsibilities from "./components/sections/Responsibilities";
import Eligibility from "./components/sections/Eligibility";
import HowItWorks from "./components/sections/HowItWorks";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

import ApplicationPage from "./pages/ApplicationPage";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Responsibilities />
        <Eligibility />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route path="/" element={<HomePage />} />

        {/* Student Ambassador Application */}
        <Route path="/apply" element={<ApplicationPage />} />

        {/* Unknown URLs */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;