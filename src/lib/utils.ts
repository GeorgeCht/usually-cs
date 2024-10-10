import type { CustomValueType, Variants } from 'framer-motion'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs))
}

/**
 * @link https://github.com/darkroomengineering/satus/blob/main/styles/_easings.scss
 */
export const easing = {
  inQuad: [0.55, 0.085, 0.68, 0.53],
  inCubic: [0.55, 0.055, 0.675, 0.19],
  inQuart: [0.895, 0.03, 0.685, 0.22],
  inQuint: [0.755, 0.05, 0.855, 0.06],
  inExpo: [0.95, 0.05, 0.795, 0.035],
  inCirc: [0.6, 0.04, 0.98, 0.335],
  outQuad: [0.25, 0.46, 0.45, 0.94],
  outCubic: [0.215, 0.61, 0.355, 1],
  outQuart: [0.165, 0.84, 0.44, 1],
  outQuint: [0.23, 1, 0.32, 1],
  outExpo: [0.19, 1, 0.22, 1],
  outCirc: [0.075, 0.82, 0.165, 1],
  inOutQuad: [0.455, 0.03, 0.515, 0.955],
  inOutCubic: [0.645, 0.045, 0.355, 1],
  inOutQuart: [0.77, 0, 0.175, 1],
  inOutQuint: [0.86, 0, 0.07, 1],
  inOutExpo: [1, 0, 0, 1],
  customExpo: [1, 0.2, 0.1, 1],
  inOutCirc: [0.785, 0.135, 0.15, 0.86],
}

/**
 * Standard `framer-motion` animation variants.
 *
 * Includes 3 states for enter, exit, and initial.
 *
 * @param {Variants} variants User defined variants for `initial`, `enter`, and `exit` states.
 * @returns `framer-motion` matching variant props
 *
 * @example
 * ```tsx
 * import { animateVariants } from '@/lib/utils'
 *
 * return (
 *  <Motion.div
 *    {...animateVariants({
 *      initial: {
 *        opacity: 0,
 *        transition: {
 *          duration: 0.5,
 *          ease: easing.inOutQuad,
 *        },
 *      },
 *      enter: { ... },
 *      exit: { ... },
 *    })}
 *  />
 * )
 * ```
 */
export const animateVariants = (variants: Variants) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  }
}
