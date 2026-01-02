import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
