'use client'

import React from 'react'

import { cn } from '@/lib/utils'

const PageWrapper = React.forwardRef<
  HTMLElement,
  {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>(({ className, children, startContent, endContent, ...props }, ref) => {
  return (
    <React.Fragment>
      {startContent || null}
      <article
        aria-roledescription={'page-container'}
        className={cn('relative w-full min-h-dvh sm:px-12 px-6 z-0', className)}
        {...props}
        ref={ref}
      >
        {children}
      </article>
      {endContent || null}
    </React.Fragment>
  )
})

PageWrapper.displayName = 'PageWrapper'

export { PageWrapper }
