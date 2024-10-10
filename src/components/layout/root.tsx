'use client'

import React from 'react'

import type { NextFontWithVariable } from 'next/dist/compiled/@next/font'

import { Lenis } from '@/lib/lenis'
import { AnimatedCursor } from '@/components/misc/cursor'
import { NavHeader } from '@/components/nav/header'

export const RootLayout = ({
  children,
  font,
}: React.PropsWithChildren & {
  font: NextFontWithVariable
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <html lang={'en'} className={font.className} suppressHydrationWarning>
      <Lenis root>
        <body className={'bg-white'}>
          <main ref={ref}>
            <NavHeader />
            {children}
          </main>
          <AnimatedCursor
            showSystemCursor
            color={'0, 0, 0'}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              '.button-perspective',
            ]}
          />
        </body>
      </Lenis>
    </html>
  )
}
