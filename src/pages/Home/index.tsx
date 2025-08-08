import {
  ScrollSnapAndromeda,
  HeroSectionAndromeda,
  IntroductionSectionAndromeda,
  WorkSectionAndromeda,
  ContactFormAndromeda,
} from "components-seed";
import bg_skull from "@/assets/images/bg_skull.jpg";

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
    <ScrollSnapAndromeda
      components={[
        {
          component: <HeroSectionAndromeda backgroundImage={bg_skull} />,
          dotLabel: "init",
        },
        {
          component: <IntroductionSectionAndromeda />,
          dotLabel: "init",
        },
        {
          component: <WorkSectionAndromeda projects={projects} />,
          dotLabel: "init",
        },
        {
          component: <ContactFormAndromeda />,
          dotLabel: "init",
        },
      ]}
    />
  );
};
