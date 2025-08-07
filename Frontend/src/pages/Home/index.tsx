import { ScrollSnap } from "@/components/ScrollSnap";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { WorkSection } from "@/components/WorkSection";
import { IntroductionSection } from "@/components/IntroductionSection";

const projects = [
  {
    name: "GAIA",
    logo: "/logos/gaia.svg",
    url: "https://gaia.manizales.unal.edu.co/grupo_inv/grupo-de-investigacion-en-ambientes-inteligentes-adaptativos-gaia",
  },
  {
    name: "Aranda Software",
    logo: "/logos/aranda.svg",
    url: "https://www.arandasoftware.com/",
  },
  {
    name: "Roiback Latam",
    logo: "/logos/roiback.svg",
    url: "https://en.roiback.com/",
  },
];

export const Home = () => {
  return (
    <ScrollSnap>
      {[
        <HeroSection />,
        <IntroductionSection />,
        <WorkSection projects={projects} />,
        <ContactForm />,
      ]}
    </ScrollSnap>
  );
};
