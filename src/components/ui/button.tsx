'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { Arrow } from '@/components/vectors/arrows'
import { type HTMLMotionProps, motion as Motion } from 'framer-motion'

interface Props extends HTMLMotionProps<'button'> {
  children?: React.ReactNode
  outbound?: boolean
}

export const Button = ({
  children,
  className,
  outbound = false,
  ...props
}: Props) => {
  return (
    <Motion.button
      type={'button'}
      className={cn(
        'flex min-w-52 items-center justify-between bg-black text-white text-lg uppercase font-bold rounded-full px-6 py-3 transition-colors hover:bg-black/85 active:bg-black/90',
        className,
      )}
      whileTap={{ scale: 0.975 }}
      {...props}
    >
      {children}
      {outbound && (
        <React.Fragment>
          <Arrow.UpRight className={'ml-2 text-white'} />
          <span className={'sr-only'}>Opens in new tab</span>
        </React.Fragment>
      )}
    </Motion.button>
  )
}
