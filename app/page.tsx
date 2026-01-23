import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollingText from "./components/ScrollingText";
import VerticalViral from "./components/VerticalViral";
import Stats from "./components/Stats";
import Results from "./components/Results";
import ReelsGrid from "./components/ReelsGrid";
import OurWork from "./components/OurWork";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import CTASection from "./components/CTASection";
import AgencyBelief from "./components/AgencyBelief";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AgencyIntro from "./components/AgencyIntro";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <AgencyIntro />
        <ScrollingText />
        <Stats />
        <Services />
        <Results />
        <HowItWorks />
        <WhoItsFor />
        <OurWork />
        <AgencyBelief />
        <FAQ />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
