import { create } from 'zustand'
import type { MouseEvent } from 'react'

export interface CursorState {
  cursorVariant: 'default' | 'action' | 'url'
  cursorText: string
  setCursorVariant: (variant: 'default' | 'action' | 'url') => void
  setCursorText: (text: string) => void
  hoverAction: (event: MouseEvent) => void
  hoverUrl: (event: MouseEvent) => void
  hoverReset: (event: MouseEvent) => void
}

export type InitialCursorState = Pick<
  CursorState,
  'cursorText' | 'cursorVariant'
>

export const initialState: InitialCursorState = {
  cursorVariant: 'default',
  cursorText: '',
}

export const useCursorStore = create<CursorState>((set) => ({
  ...initialState,
  setCursorVariant: (variant: CursorState['cursorVariant']) => {
    set({ cursorVariant: variant })
  },
  setCursorText: (text: CursorState['cursorText']) => {
    set({ cursorText: text })
  },
  hoverAction: (_: MouseEvent) => {
    set({ cursorVariant: 'action', cursorText: 'Action' })
  },
  hoverUrl: (_: MouseEvent) => {
    set({ cursorVariant: 'url', cursorText: '' })
  },
  hoverReset: (_: MouseEvent) => {
    set({ cursorVariant: 'default', cursorText: '' })
  },
}))
