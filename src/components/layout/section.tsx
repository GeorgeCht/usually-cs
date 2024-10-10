'use client'

import React from 'react'

import { cn } from '@/lib/utils'

export const PageSection = React.forwardRef<
  HTMLElement,
  {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>(({ className, children, startContent, endContent, ...props }, ref) => {
  return (
    <React.Fragment>
      {startContent || null}
      <section
        aria-roledescription={'page-section'}
        className={cn('relative', className)}
        {...props}
        ref={ref}
      >
        {children}
      </section>
      {endContent || null}
    </React.Fragment>
  )
})

PageSection.displayName = 'PageSection'
