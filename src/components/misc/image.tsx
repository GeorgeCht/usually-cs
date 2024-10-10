'use client'

import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'
import type { ImageProps } from 'next/image'

interface FadeInImageProps extends Omit<ImageProps, 'onLoad'> {
  fadeInDuration?: number
}

const FadeInImage = ({
  alt = 'image',
  src,
  className,
  fadeInDuration = 300,
  ...props
}: FadeInImageProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  const handleImageLoad = React.useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Image
      alt={alt}
      src={src}
      loading={'lazy'}
      className={cn(
        'object-cover w-full h-full transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className,
      )}
      onLoad={handleImageLoad}
      style={{ transitionDuration: `${fadeInDuration}ms` }}
      {...props}
    />
  )
}

export { FadeInImage }
