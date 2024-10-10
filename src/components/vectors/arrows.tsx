'use client'

import React from 'react'

const UpRightArrow = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ ...props }, ref) => {
  return (
    <svg
      ref={ref}
      width={'15'}
      height={'15'}
      viewBox={'0 0 15 15'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M14.2327 12.1174L11.45 12.174V5.09589L1.85518 14.4673L0 12.6553L9.59478 3.2839H2.34797L2.40594 0.56591L14.2617 0.537598L14.2327 12.1174Z'
        }
        fill={'currentColor'}
      />
    </svg>
  )
})

UpRightArrow.displayName = 'UpRightArrow'

export const Arrow = {
  UpRight: UpRightArrow,
}
