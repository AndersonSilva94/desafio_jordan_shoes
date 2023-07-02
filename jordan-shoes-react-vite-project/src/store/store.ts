import { create } from 'zustand';

type State = {
  cartItems: Array<any>;
  isOpenedCheckout: boolean;
};

type Actions = {
  addItem: (item: any) => void;
  incrementItem: (item: any) => void;
  decrementItem: (item: any) => void;
  setOpenCheckout: (isOpened: boolean) => void
};

const useStore = create<State & Actions>((set) => ({
  cartItems: [],
  isOpenedCheckout: false,

  addItem: (item: any) => {
    set((state: any) => {
      const findIndex = state.cartItems.findIndex((el: any) => el.title === item.title)

      if(findIndex !== -1) {
        const items = [...state.cartItems];
        items[findIndex].quantity += 1;
        return { cartItems: items };
      } else {
        const newItem = { ...item, quantity: 1 };
        return { cartItems: [...state.cartItems, newItem] };
      }
    })
  },

  cleanCartState: () => {
    set(() => {
      return { cartItems: [] };
    });
  },

  incrementItem: (item: any) => {
    set((state: any) => {
      const findIndex = state.cartItems.findIndex((el: any) => el.title === item.title)
      const items = [...state.cartItems];
      items[findIndex].quantity += 1;
      return { cartItems: items };
    })
  },

  decrementItem: (item: any) => {
    set((state: any) => {
      const findIndex = state.cartItems.findIndex((el: any) => el.title === item.title)
      const items = [...state.cartItems];
      items[findIndex].quantity -= 1;

      if(items[findIndex].quantity === 0) {
        items.splice(findIndex, 1)
      }

      return { cartItems: items };
    })
  },

  setOpenCheckout: (isOpened: boolean) => {
    set((state: any) => ({ isOpenedCheckout: isOpened }))
  }
}));

export { useStore };