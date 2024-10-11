import localFont from 'next/font/local'

import type React from 'react'
import type { Metadata, Viewport } from 'next'

import { RootLayout } from '@/components/layout/root'

import './globals.css'

const aeonik = localFont({
  src: [
    {
      path: '/fonts/Aeonik-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-aeonik',
})

export const metadata: Metadata = {
  title: 'Usually Design | Coming Soon',
  description:
    'We are a creative workspace usually focusing on branding and packaging but always going beyond that.',
  keywords: [
    'branding',
    'packaging',
    'design',
    'website',
    'portfolio',
    'agency',
    'athens',
    'greece',
  ],
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayout font={aeonik}>{children}</RootLayout>
}
