'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { motion as Motion, type SVGMotionProps } from 'framer-motion'

interface Props extends SVGMotionProps<SVGSVGElement> {
  relativeWidth?: boolean
}

const Uniform = React.forwardRef<SVGSVGElement, Props>(
  ({ className, relativeWidth, ...props }, ref) => {
    return (
      <Motion.svg
        ref={ref}
        width={'244'}
        height={'399'}
        viewBox={'0 0 244 399'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
        className={cn(relativeWidth && 'w-[13.95%]', className)}
        {...props}
      >
        <path
          d={
            'M243.218 0.295898V254.611C243.218 286.361 243.218 399 121.618 399C0.0175705 399 0.0175781 292.264 0.0175781 260.674V0.295898H83.2595V270.566C83.2595 294.497 94.5601 315.876 121.777 315.876C151.222 315.876 160.294 292.104 160.294 270.566V0.295898H243.377H243.218Z'
          }
          fill={'currentColor'}
        />
      </Motion.svg>
    )
  },
)

Uniform.displayName = 'U'

const Sierra = React.forwardRef<SVGSVGElement, Props>(
  ({ className, relativeWidth, ...props }, ref) => {
    return (
      <Motion.svg
        ref={ref}
        width={'230'}
        height={'408'}
        viewBox={'0 0 230 408'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
        className={cn(relativeWidth && 'w-[13.15%]', className)}
        {...props}
      >
        <path
          d={
            'M227.59 295.52C227.59 360.934 180.637 407.84 115.221 407.84C24.4984 407.84 0.942383 315.464 0.942383 315.464L73.3613 285.31C73.3613 285.31 84.1843 326.632 115.539 326.632C135.753 326.632 144.348 307.805 144.348 295.042C144.348 235.212 12.4021 200.431 12.4021 104.066C12.4021 42.3221 61.2649 0.840332 120.473 0.840332C184.934 0.840332 214.698 50.6185 229.659 83.3252L161.856 114.277C158.672 107.576 146.576 86.1971 123.975 86.1971C105.035 86.1971 96.1215 96.5675 96.1215 110.288C96.1215 154.482 227.749 193.411 227.749 295.52H227.59Z'
          }
          fill={'currentColor'}
        />
      </Motion.svg>
    )
  },
)

Sierra.displayName = 'S'

const Alpha = React.forwardRef<SVGSVGElement, Props>(
  ({ className, relativeWidth, ...props }, ref) => {
    return (
      <Motion.svg
        ref={ref}
        width={'299'}
        height={'392'}
        viewBox={'0 0 299 392'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
        className={cn(relativeWidth && 'w-[17.10%]', className)}
        {...props}
      >
        <path
          d={
            'M195.77 321.301H101.386L87.0618 391.023H0L102.978 0.774902L195.611 0.774902L298.748 391.182L209.617 391.182L195.77 321.461V321.301ZM181.127 248.23L149.135 87.5675L116.189 248.23H181.127Z'
          }
          fill={'currentColor'}
        />
      </Motion.svg>
    )
  },
)

Alpha.displayName = 'A'

const Lima = React.forwardRef<SVGSVGElement, Props>(
  ({ className, relativeWidth, ...props }, ref) => {
    return (
      <Motion.svg
        ref={ref}
        width={'195'}
        height={'392'}
        viewBox={'0 0 195 392'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
        className={cn(relativeWidth && 'w-[11.15%]', className)}
        {...props}
      >
        <path
          d={
            'M194.985 317.791V391.182H0.169922V0.615234H83.4118V317.632H194.985V317.791Z'
          }
          fill={'currentColor'}
        />
      </Motion.svg>
    )
  },
)

Lima.displayName = 'L'

const Yankee = React.forwardRef<SVGSVGElement, Props>(
  ({ className, relativeWidth, ...props }, ref) => {
    return (
      <Motion.svg
        ref={ref}
        width={'260'}
        height={'392'}
        viewBox={'0 0 260 392'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
        className={cn(relativeWidth && 'w-[14.87%]', className)}
        {...props}
      >
        <path
          d={
            'M259.116 0.774902L171.1 222.702V391.182H88.0168V222.543L0 0.774902H83.0828L129.399 150.907L175.715 0.774902H258.957H259.116Z'
          }
          fill={'currentColor'}
        />
      </Motion.svg>
    )
  },
)

Yankee.displayName = 'Y'

export const HeroLetters = {
  U: Uniform,
  S: Sierra,
  A: Alpha,
  L: Lima,
  Y: Yankee,
}
