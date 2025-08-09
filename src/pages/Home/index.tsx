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

import bg_skull from '@/assets/images/bg_skull.jpg'
import imageProfile from '@/assets/images/profile.jpg'

const projects = [
  {
    name: 'GAIA',
    logo: logoGaia,
    url: 'https://gaia.manizales.unal.edu.co/grupo_inv/grupo-de-investigacion-en-ambientes-inteligentes-adaptativos-gaia',
  },
  {
    name: 'Aranda Software',
    logo: logoAranda,
    url: 'https://arandasoft.com/en/',
  },
  {
    name: 'Roiback Latam',
    logo: logoRoiback,
    url: 'https://en.roiback.com/',
  },
]

export const Home = () => {
  return (
    <ScrollSnapAndromeda
      sections={[
        {
          component: (
            <HeroSectionAndromeda
              backgroundImage={bg_skull}
              imageProfile={imageProfile}
            />
          ),
          dotLabel: 'Init',
        },
        {
          component: <IntroductionSectionAndromeda />,
          dotLabel: 'Hi there',
          backgroundColor: 'var(--bg-secondary)',
        },
        {
          component: <WorkSectionAndromeda projects={projects} />,
          dotLabel: '/Work',
        },
        {
          component: <ContactFormAndromeda />,
          dotLabel: 'Contact me',
        },
      ]}
    />
  )
}
