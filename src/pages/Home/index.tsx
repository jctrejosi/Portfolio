import {
  ContactFormAndromeda,
  HeroSectionAndromeda,
  IntroductionSectionAndromeda,
  ScrollSnapAndromeda,
  WorkSectionAndromeda,
} from 'components-seed'

import logoAranda from '@/assets/images/logo-aranda.webp'
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'

const projects = [
  {
    name: 'GAIA',
    logo: logoGaia,
    link: {
      url: 'https://gaia.manizales.unal.edu.co/grupo_inv/grupo-de-investigacion-en-ambientes-inteligentes-adaptativos-gaia',
      text: 'Website',
    },
  },
  {
    name: 'Aranda Software',
    logo: logoAranda,
    link: {
      url: 'https://arandasoft.com/en/',
      text: 'Website',
    },
  },
  {
    name: 'Roiback Latam',
    logo: logoRoiback,
    link: {
      url: 'https://en.roiback.com/',
      text: 'Website',
    },
  },
]

export const Home = () => {
  return (
    <ScrollSnapAndromeda
      sections={[
        {
          component: (
            <HeroSectionAndromeda />
          ),
          dotLabel: 'Init',
        },
        {
          component: <IntroductionSectionAndromeda />,
          dotLabel: 'Hi there',
          backgroundColor: 'var(--bg-secondary)',
        },
        {
          component: <WorkSectionAndromeda items={projects} />,
          dotLabel: '/Work',
        },
        {
          component: <ContactFormAndromeda sendTo="contact@myportfolio.com" />,
          dotLabel: 'Contact me',
          backgroundColor: 'var(--bg-secondary)',
        },
      ]}
    />
  )
}
