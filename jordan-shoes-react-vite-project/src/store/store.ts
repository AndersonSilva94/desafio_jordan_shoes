import create from 'zustand';

const useStore = create((set) => ({
  cartItems: [],
  isOpenedCheckout: false,

  addItem: (item: any) => {
    set((state: any) => {
      const findIndex = state.cartItems.findIndex((el: any) => el.title === item.title)

      if(findIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[findIndex].quantity += 1;
        return { cartItems: updatedCartItems };
      } else {
        const newItem = { ...item, quantity: 1 };
        return { cartItems: [...state.cartItems, newItem] };
      }
    })
  },

  removeFromCart: (item: any) => {
    set((state: any) => {
      const updatedCartItems = state.cartItems.filter((el: any) => el.title !== item.title);
      return { cartItems: updatedCartItems };
    });
  },

  setOpenCheckout: () => {
    set((state: any) => ({ isOpenedCheckout: !state.isOpenedCheckout }))
  }
}));

export { useStore };