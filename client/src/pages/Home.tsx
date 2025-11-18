import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DerpFaceGenerator from "@/components/DerpFaceGenerator";
import MintSection from "@/components/MintSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MintSection />
      <DerpFaceGenerator />
      <div className="bg-[var(--black)] relative -mb-[100px]"></div>
      <FAQSection />
      <FooterSection />
    </div>
  );
}
