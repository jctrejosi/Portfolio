import {
  ScrollSnapAndromeda,
  HeroSectionAndromeda,
  IntroductionSectionAndromeda,
  WorkSectionAndromeda,
  ContactFormAndromeda,
} from "components-seed";
import bg_skull from "@/assets/images/bg_skull.jpg";
import imageProfile from "@/assets/images/profile.jpg";

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
          component: (
            <HeroSectionAndromeda
              backgroundImage={bg_skull}
              imageProfile={imageProfile}
            />
          ),
          dotLabel: "Init",
        },
        {
          component: <IntroductionSectionAndromeda />,
          dotLabel: "Hi there",
        },
        {
          component: <WorkSectionAndromeda projects={projects} />,
          dotLabel: "/Work",
        },
        {
          component: <ContactFormAndromeda />,
          dotLabel: "Contact me",
        },
      ]}
    />
  );
};
