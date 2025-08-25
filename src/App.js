import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SpecialitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
