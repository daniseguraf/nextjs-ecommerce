import { create } from 'zustand';

interface Store {
  isOpenSideMenu: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useStore = create<Store>()((set) => ({
  isOpenSideMenu: false,
  openSideMenu: () => set({ isOpenSideMenu: true }),
  closeSideMenu: () => set({ isOpenSideMenu: false }),
}));
