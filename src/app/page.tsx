'use client'

import React from 'react'

import { AnimatePresence, motion as Motion } from 'framer-motion'
import { circInOut } from 'framer-motion'

import { useScreenSize } from '@/lib/hooks'
import { animateVariants, cn, easing } from '@/lib/utils'

import { PageWrapper } from '@/components/layout/wrapper'
import { PageSection } from '@/components/layout/section'
import { FadeInImage } from '@/components/misc/image'
import { HeroLetters } from '@/components/vectors/hero'
import { Button } from '@/components/ui/button'
import { Arrow } from '@/components/vectors/arrows'

const storiesData = [
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
] as const

type StoryData = (typeof storiesData)[number]

const HeroContent = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div
    className={cn(
      'flex flex-col w-full max-lg:items-center max-lg:w-full lg:w-[498px]',
      className,
    )}
    {...props}
  >
    <p
      className={
        'uppercase font-aeonik font-extrabold max-lg:text-center text-black pb-3'
      }
    >
      Full website coming soon
    </p>
    <h3
      className={
        'font-aeonik font-medium text-black text-2xl max-lg:text-center max-lg:px-16 max-sm:px-2'
      }
      style={{ fontFeatureSettings: '"ss01" 1' }}
    >
      We are a creative workspace usually focusing on branding & packaging but
      always going beyond that.
    </h3>
    <Button outbound className={'mt-8 w-fit'}>
      <span>Contact us</span>
    </Button>
  </div>
)

const StoryPreview = ({
  story,
  isOpen,
}: {
  story: StoryData
  isOpen: boolean
}) => {
  const { screenSize } = useScreenSize()
  return (
    <Motion.div
      key={'main-nav'}
      {...animateVariants({
        initial: { width: 0, height: 0 },
        enter: {
          width: isOpen
            ? screenSize.width > 1024
              ? `${screenSize.width * 0.6}px`
              : screenSize.width - 8 * 2
            : 0,
          height: isOpen ? '800px' : 0,
          bottom: '-40px',
          right: '-40px',
          transition: { duration: 0.615, ease: easing.customExpo },
        },
        exit: {
          width: 0,
          height: 0,
          bottom: '-40px',
          right: '-40px',
          transition: {
            duration: 0.475,
            delay: 0.125,
            ease: easing.customExpo,
          },
        },
      })}
      className={
        'absolute flex flex-col justify-between rounded-[32px] overflow-hidden bg-black text-[#FFF] bottom-0 right-0 z-0'
      }
      animate={isOpen ? 'enter' : 'exit'}
    >
      <StoryPreviewContent story={story} isOpen={isOpen} />
      <StoryPreviewImage story={story} />
    </Motion.div>
  )
}

const StoryPreviewContent = ({
  story,
  isOpen,
}: {
  story: StoryData
  isOpen: boolean
}) => (
  <React.Fragment>
    <Motion.div
      key={'hover-project-title'}
      className={'absolute bottom-0 z-10'}
      {...animateVariants({
        initial: { x: 15, opacity: 0 },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.475,
            delay: 0.385,
            ease: easing.customExpo,
          },
        },
        exit: {
          x: 15,
          opacity: 0,
          transition: { duration: 0.275, ease: easing.customExpo },
        },
      })}
      animate={isOpen ? 'enter' : 'exit'}
    >
      <h2
        className={
          'font-aeonik font-normal max-[1375px]:hidden text-5xl max-w-[328px] text-white mb-8 ml-10'
        }
      >
        {story.title}
      </h2>
    </Motion.div>
    <Motion.div
      key={'hover-project-tags'}
      className={'absolute inset-0 z-10'}
      {...animateVariants({
        initial: { x: 15, opacity: 0 },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.475,
            delay: 0.185,
            ease: easing.customExpo,
          },
        },
        exit: {
          x: 15,
          opacity: 0,
          transition: { duration: 0.275, ease: easing.customExpo },
        },
      })}
      animate={isOpen ? 'enter' : 'exit'}
    >
      <h3
        className={'font-aeonik font-medium uppercase text-white mt-10 ml-10'}
      >
        {story.tags}
      </h3>
    </Motion.div>
    <Motion.div
      key={'hover-project-year'}
      className={'absolute top-0 right-28 z-10'}
      {...animateVariants({
        initial: { x: -15, opacity: 0 },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.475,
            delay: 0.185,
            ease: easing.customExpo,
          },
        },
        exit: {
          x: -15,
          opacity: 0,
          transition: { duration: 0.275, ease: easing.customExpo },
        },
      })}
      animate={isOpen ? 'enter' : 'exit'}
    >
      <h3
        className={'font-aeonik font-medium uppercase text-white mt-10 mr-10'}
      >
        {story.year}
      </h3>
    </Motion.div>
  </React.Fragment>
)

const StoryPreviewImage = ({
  story,
}: {
  story: StoryData
}) => (
  <Motion.div
    key={story.title}
    className={'w-full h-full absolute opacity-70 z-0'}
    initial={{ x: -75 }}
    animate={{ x: 0 }}
  >
    <FadeInImage
      className={'object-cover w-full h-full'}
      src={story.img.src}
      width={story.img.width}
      height={story.img.height}
      alt={story.title}
    />
  </Motion.div>
)

const StoryThumbnail = ({
  index,
  onMouseEnter,
}: {
  index: number
  onMouseEnter: (index: number) => void
}) => (
  <li
    onMouseEnter={() => onMouseEnter(index)}
    className={'w-1/4 lg:w-[70px] bg-black rounded-2xl link cursor-pointer'}
  >
    <FadeInImage
      className={'object-cover w-full h-full md:hover:scale-125 transition-all'}
      src={`/img/${9 - index * 2}.webp`}
      alt={'story-showcase'}
      width={630}
      height={630}
    />
  </li>
)

const ViewMoreButton = () => (
  <li
    className={
      'flex items-center justify-center w-1/4 lg:w-[70px] bg-black lg:group-hover:bg-[#FFF000] transition-colors delay-100 rounded-2xl link cursor-pointer'
    }
  >
    <Arrow.UpRight
      className={
        'max-lg:size-8 text-white lg:group-hover:text-black transition-colors delay-100'
      }
    />
  </li>
)

const StoriesSection = ({
  storiesAreOpen,
  setStoriesAreOpen,
  storiesIndex,
  setStoriesIndex,
}: {
  storiesIndex: number
  storiesAreOpen: boolean
  setStoriesAreOpen: (value: boolean) => void
  setStoriesIndex: (value: number) => void
}) => {
  const { screenSize } = useScreenSize()

  return (
    <div
      className={'group flex flex-row-reverse relative gap-4 w-full lg:w-auto'}
      onMouseEnter={() => screenSize.width > 1024 && setStoriesAreOpen(true)}
      onMouseLeave={() => screenSize.width > 1024 && setStoriesAreOpen(false)}
    >
      <div className={'w-full relative'}>
        <AnimatePresence mode={'sync'}>
          <StoryPreview
            story={storiesData[storiesIndex]}
            isOpen={storiesAreOpen}
          />
        </AnimatePresence>
        <ul
          className={
            'flex flex-row w-full gap-1.5 *:relative *:aspect-[9/12] *:overflow-hidden'
          }
        >
          {storiesData.map((story, index) => (
            <StoryThumbnail
              key={story.title}
              index={index}
              onMouseEnter={setStoriesIndex}
            />
          ))}
          <ViewMoreButton />
        </ul>
      </div>
      <div className={'hidden lg:block z-10'}>
        <p
          className={
            'font-aeonik text-lg font-medium leading-[1.1em] group-hover:text-white transition-colors delay-100 w-20 uppercase lg:text-end text-start'
          }
        >
          Latest stories
        </p>
      </div>
    </div>
  )
}

const AnimatedCircularBackground = () => {
  const { screenSize } = useScreenSize()

  // set animateTo to the biggest of either screenSize.width or screenSize.height

  const animateTo = Math.max(screenSize.width, screenSize.height) * 1.5

  return (
    <div
      className={
        'absolute flex items-center justify-center inset-0 size-full z-0 overflow-hidden pointer-events-none'
      }
    >
      <Motion.div
        initial={{ width: 0, height: 0 }}
        animate={{ width: animateTo, height: animateTo }}
        transition={{
          easings: circInOut(1),
          duration: 0.375,
          delay: 0.333,
        }}
        className={'size-full aspect-square rounded-full bg-[#FFF200]'}
      />
    </div>
  )
}

export default function HomePage() {
  const { screenSize } = useScreenSize()

  const [storiesAreOpen, setStoriesAreOpen] = React.useState(false)
  const [storiesIndex, setStoriesIndex] = React.useState(0)
  const [_, setHeroContent] = React.useState<{
    width: number
    height: number
  } | null>(null)

  const section = React.useRef(null)
  const heroContentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    heroContentRef.current &&
      setHeroContent({
        width: heroContentRef.current.clientWidth,
        height: heroContentRef.current.clientHeight,
      })
  }, [screenSize])

  return (
    <PageWrapper className={'flex flex-col justify-end transition-all'}>
      <AnimatedCircularBackground />
      <PageSection
        className={
          'flex flex-col justify-between w-full sm:min-h-[calc(100vh-120px)] min-h-[calc(100vh-80px)] h-full pb-4 z-0'
        }
        ref={section}
      >
        <div
          className={
            'relative flex flex-row gap-[0.725%] w-full *:text-black *:h-auto'
          }
        >
          <HeroLetters.U
            relativeWidth
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          />
          <HeroLetters.S
            relativeWidth
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={'mx-[0.725%]'}
          />
          <HeroLetters.U
            relativeWidth
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />
          <HeroLetters.A
            relativeWidth
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={'mr-[0.666%]'}
          />
          <HeroLetters.L
            relativeWidth
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={'mr-[1%]'}
          />
          <HeroLetters.L
            relativeWidth
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          />
          <HeroLetters.Y
            relativeWidth
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={'-ml-[2.333%]'}
          />
        </div>
        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className={'lg:hidden'}
        >
          <HeroContent />
        </Motion.div>
        <Motion.div
          ref={heroContentRef}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', mass: 0.7, duration: 1.2 }}
          className={
            'w-full flex lg:flex-row flex-col gap-6 justify-between lg:items-end sm:pt-12 sm:pb-8 max-sm:pb-2'
          }
        >
          <HeroContent className={'max-lg:hidden'} />
          <StoriesSection
            storiesAreOpen={storiesAreOpen}
            setStoriesAreOpen={setStoriesAreOpen}
            storiesIndex={storiesIndex}
            setStoriesIndex={setStoriesIndex}
          />
        </Motion.div>
      </PageSection>
    </PageWrapper>
  )
}
