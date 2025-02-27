'use client'

import React from 'react'

export const Logo = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ ...props }, ref) => {
  return (
    <svg
      ref={ref}
      width={'41'}
      height={'41'}
      viewBox={'0 0 41 41'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M20.5 0C9.19849 -3.98582e-09 3.98628e-09 9.19849 0 20.5C-3.98537e-09 31.8015 9.19849 41 20.5 41C31.8015 41 41 31.8015 41 20.5C41 9.19849 31.8015 3.98582e-09 20.5 0ZM20.5 37.4672C11.1466 37.4672 3.53284 29.8534 3.53284 20.5C3.53284 11.1466 11.1466 3.53284 20.5 3.53284C29.8534 3.53284 37.4672 11.1466 37.4672 20.5C37.4672 29.8534 29.8534 37.4672 20.5 37.4672Z'
        }
        fill={'currentColor'}
      />
      <path
        d={
          'M28.8107 12.7355L26.3036 14.7209C27.6047 16.4091 28.0799 17.9249 28.0799 20.2551C28.0799 24.1249 24.8243 27.0376 20.4993 27.0376C16.1743 27.0376 12.9187 24.119 12.9187 20.2551C12.9187 17.9249 13.394 16.4091 14.6951 14.7209L12.188 12.7355C10.3641 14.7744 9.36606 17.4256 9.36606 20.2551C9.36606 26.5086 14.1485 31.2225 20.4993 31.2225C26.8502 31.2225 31.6326 26.5086 31.6326 20.2551C31.6326 17.4256 30.6345 14.7744 28.8107 12.7355Z'
        }
        fill={'currentColor'}
      />
    </svg>
  )
})

Logo.displayName = 'Logo'
