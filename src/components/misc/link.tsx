'use client'

import { cn } from '@/lib/utils'

import type { LinkProps } from 'next/link'
import Link from 'next/link'

interface Props extends LinkProps {
  text: string
  className?: string
}

export const LinkFlip = ({ text, className, ...props }: Props) => {
  return (
    <Link
      className={cn(
        'linkflip relative inline-block overflow-hidden h-auto cursor-pointer',
        className,
      )}
      {...props}
    >
      <span data-text={text}>{text}</span>
    </Link>
  )
}
