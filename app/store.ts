import { create } from "zustand";

type State = {
  active: boolean;
  setActive: (value: boolean) => void;
  from: string;
  setFrom: (type: string) => void;
};

export const useHoverStore = create<State>((set) => ({
  active: false,
  setActive: (value) => set({ active: value }),
  from: "",
  setFrom: (type) => set({ from: type }),
}));
