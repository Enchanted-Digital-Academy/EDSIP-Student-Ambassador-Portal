import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Benefits from "../components/sections/Benefits";
import Responsibilities from "../components/sections/Responsibilities";
import Eligibility from "../components/sections/Eligibility";
import HowItWorks from "../components/sections/HowItWorks";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  // Automatically scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Responsibilities />
      <Eligibility />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;