import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import BusinessSection from "@/components/Sections/BusinessSection";
import CompanySection from "@/components/Sections/CompanySection";
import NewsSection from "@/components/Sections/NewsSection";
import RecruitSection from "@/components/Sections/RecruitSection";

export default function Home() {
  return (
    <main>
      <section id="hero" className="bg-white">
        <HeroSection />
      </section>
      <section id="about" className="bg-white">
        <AboutSection />
      </section>
      <section id="business" className="bg-white">
        <BusinessSection />
      </section>
      <section id="company" className="bg-white">
        <CompanySection />
      </section>
      <section id="news" className="bg-white">
        <NewsSection />
      </section>
      <section id="recruit" className="bg-white">
        <RecruitSection />
      </section>
      <div className="bg-[url(/assets/fixed-img.webp)] h-screen fixed bg-center bg-cover z-[-3] w-full [transition:inherit] top-[0] left-[0] filter brightness-[0.3] grayscale"></div>
    </main>
  );
}
