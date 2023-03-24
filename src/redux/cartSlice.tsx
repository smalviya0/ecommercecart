// export const ADD_TO_CART = 'ADD_TO_CART';

// // Interfaces
// interface Product {
// id: number;
// name: string;
// price: number;
// }

// interface CartItem {
// product: Product;
// quantity: number;
// }

// interface CartState {
// items: CartItem[];
// }

// interface AddToCartAction {
// type: typeof ADD_TO_CART;
// payload: Product;
// }

// type CartAction = AddToCartAction;

// // Action Creators
// export const addToCart = (product: Product): AddToCartAction => ({
// type: ADD_TO_CART,
// payload: product,
// });

// // Reducer Function
// const initialState: CartState = {
// items: [],
// };

// const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
// switch (action.type) {
// case ADD_TO_CART:
// const existingItemIndex = state.items.findIndex(
// (item) => item.product.id === action.payload.id
// );
// if (existingItemIndex !== -1) {
//     const updatedItems = [...state.items];
//     updatedItems[existingItemIndex].quantity += 1;

//     return {
//       ...state,
//       items: updatedItems,
//     };
//   } else {
//     return {
//       ...state,
//       items: [...state.items, { product: action.payload, quantity: 1 }],
//     };
//   }
// default:
//   return state;
// }
// };

// export default cartReducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: {
    product: {
      id: number;
      name: string;
      price: number;
    };
    quantity: number;
  }[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: { id: number; name: string; price: number };
      }>
    ) => {
      const { product } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ product, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.product.id !== productId);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item.product.id === productId
      );
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
