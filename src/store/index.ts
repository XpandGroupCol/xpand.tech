import { create } from 'zustand'

interface ModalState {
    open: boolean
    onOpen: () => void
    onClose: () => void
}

export const useModalStore = create<ModalState>()((set) => ({
    open: false,
    onOpen: () => set({ open: true }),
    onClose: () => set({ open: false })
}))