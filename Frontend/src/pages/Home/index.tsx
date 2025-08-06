import { ScrollSnap } from "@/components/ScrollSnap";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { WorkSection } from "@/components/WorkSection";
import { IntroductionSection } from "@/components/IntroductionSection";

const projects = [
  {
    name: "hellotax",
    logo: "/logos/hellotax.svg",
    url: "https://app.hellotax.com",
  },
  { name: "Conectar", logo: "/logos/conectar.svg" },
  {
    name: "John Deere",
    logo: "/logos/john-deere.svg",
    url: "https://atu300.deere.com",
  },
  { name: "olaqlu", logo: "/logos/olaqlu.svg" },
  { name: "Pixel2HTML", logo: "/logos/pixel2html.svg" },
  { name: "dropd", logo: "/logos/dropd.svg" },
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
