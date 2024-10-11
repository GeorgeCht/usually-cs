export interface Story {
  title: string
  link: string
  img: {
    src: string
    width: number
    height: number
  }
  tags: string
  year: string
}

export const heroParagraphData = {
  label: 'Full website coming soon',
  text: 'We are a creative workspace usually focusing on branding & packaging but always going beyond that.',
  button: {
    label: 'Contact us',
    url: 'mailto:hello@usually.design',
  },
}

export const storiesData: Array<Story> = [
  {
    title: 'Cross & Roll Brand Creation',
    link: '/',
    img: {
      src: '/img/crossroll_big.png',
      width: 1635,
      height: 1080,
    },
    tags: '(packaging) (branding)',
    year: '2022',
  },
  {
    title: 'Jamin Brand Design',
    link: '/',
    img: {
      src: '/img/crossroll_big.png',
      width: 1635,
      height: 1080,
    },
    tags: '(other) (design)',
    year: '2023',
  },
  {
    title: 'Tesoro Packaging',
    link: '/',
    img: {
      src: '/img/crossroll_big.png',
      width: 1635,
      height: 1080,
    },
    tags: '(test) (packaging)',
    year: '2024',
  },
]
