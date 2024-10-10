'use client'

import { useEffect, useState, useRef } from 'react'

type AllEventMaps = HTMLElementEventMap & DocumentEventMap & WindowEventMap

export function useEventListener<K extends keyof HTMLElementEventMap>(
  type: K,
  listener: (event: HTMLElementEventMap[K]) => void,
  element: HTMLElement,
): void

export function useEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (event: DocumentEventMap[K]) => void,
  element: Document,
): void

export function useEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (event: WindowEventMap[K]) => void,
  element?: Window,
): void

export function useEventListener<K extends keyof AllEventMaps>(
  type: K,
  listener: (event: AllEventMaps[K]) => void,
  element?: HTMLElement | Document | Window | null,
) {
  const listenerRef = useRef(listener)

  useEffect(() => {
    listenerRef.current = listener
  })

  useEffect(() => {
    const el = element === undefined ? window : element

    const internalListener = (ev: AllEventMaps[K]) => {
      return listenerRef.current(ev)
    }

    el?.addEventListener(
      type,
      internalListener as EventListenerOrEventListenerObject,
    )

    return () => {
      el?.removeEventListener(
        type,
        internalListener as EventListenerOrEventListenerObject,
      )
    }
  }, [type, element])
}

export const useIsTouchdevice = (): boolean => {
  const [isTouchdevice, setIsTouchdevice] = useState<boolean>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchdevice(window.matchMedia('(hover: none)').matches)
    }
  }, [])

  return isTouchdevice ?? false
}

export const useScreenSize = () => {
  const isClient = typeof window === 'object'

  const [screenSize, setScreenSize] = useState(
    isClient
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : {
          width: 0,
          height: 0,
        },
  )

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient])

  return { screenSize }
}

export const useSsr = () => {
  const isDOM =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.documentElement

  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  }
}

export const useScroll = () => {
  const { isBrowser } = useSsr()
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(
    isBrowser ? document.body.getBoundingClientRect() : { top: 0, left: 0 },
  )
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top)
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>()

  const listener = (_: Event) => {
    isBrowser && setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(
      lastScrollTop > -bodyOffset.top || scrollY < 600 ? 'down' : 'up',
    )
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
