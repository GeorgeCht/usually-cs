'use client'

import React from 'react'
import Link from 'next/link'

import { motion as Motion } from 'framer-motion'
import type { Variant } from 'framer-motion'

import { cn } from '@/lib/utils'
import { useScroll } from '@/lib/hooks'

import { Logo } from '@/components/vectors/logo'
import { LinkFlip } from '@/components/misc/link'
import { Magnetic } from '@/components/misc/magnetic'

export const NavHeader = ({ className }: { className?: string }) => {
  const [flag, setFlag] = React.useState(true)
  const [menuIsOpen, _] = React.useState(false)
  const [logoIsHovered, setLogoIsHovered] = React.useState(false)

  const { scrollDirection } = useScroll()

  const variants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        type: 'spring',
        mass: 0.7,
        duration: 1.2,
      },
    } as Variant,
    idle: {
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        mass: 0.7,
        duration: 1.2,
      },
    } as Variant,
  }

  React.useEffect(() => {
    setTimeout(() => setFlag(false), 2000)
  }, [])

  return (
    <nav
      className={cn(
        'fixed w-full flex items-center justify-between sm:px-12 px-6 sm:py-10 py-6 z-50 opacity-0 transition-all',
        scrollDirection === 'up' && !menuIsOpen && !flag
          ? ' opacity-100 -translate-y-28'
          : ' opacity-100 translate-y-0',
        className,
      )}
    >
      <Motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className={'group flex basis-1/3 justify-start'}
      >
        <Link href={'/'}>
          <Motion.div
            suppressHydrationWarning
            variants={variants}
            animate={logoIsHovered ? 'hover' : 'idle'}
            onMouseEnter={() => setLogoIsHovered(true)}
            onMouseLeave={() => setLogoIsHovered(false)}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
          >
            <Magnetic>
              <Logo className={'w-8 h-8 sm:w-10 sm:h-10'} />
            </Magnetic>
          </Motion.div>
          <span className={'sr-only'}>Logo</span>
        </Link>
      </Motion.div>
      <div
        className={
          'group min-[430px]:flex hidden basis-1/3 justify-center m-auto'
        }
      />
      <Motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className={'relative flex basis-1/3 justify-end'}
      >
        <Magnetic>
          <LinkFlip
            className={'uppercase font-bold'}
            href={'/'}
            text={'(instagram)'}
          />
        </Magnetic>
      </Motion.div>
    </nav>
  )
}
