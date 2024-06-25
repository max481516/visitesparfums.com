import { create } from "zustand";

const useStores = create((set) => ({
  showModal: false,
  toggleModal: () =>
    set((state) => {
      console.log(
        "Toggling modal state from",
        state.showModal,
        "to",
        !state.showModal
      ); // Debugging
      return { showModal: !state.showModal };
    }),
}));

export default useStores;
