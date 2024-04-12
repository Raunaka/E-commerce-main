import {
  Add_products,
  Add_cart,
  Product_view,
  Cart_items,
  update_cart,
  delete_cart
} from "../actions";

let initialState = {
  products: [],
  cart: [],
  itemToDisplay: "",
  totalCart: 0,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case Add_products:
      return {
        ...state,
        products: action.products,
      };
    case Add_cart:
      let flag = state.cart.indexOf(action.cart);
      if (flag !== -1) {
        action.cart.qty += 1;
      } else {
        return {
          ...state,
          cart: [action.cart, ...state.cart],
        };
      }
      return state; // Return state outside the if-else block
    case Product_view:
      return {
        ...state,
        itemToDisplay: action.view,
      };
    case Cart_items:
      let total = state.cart.reduce((total, item) => {
        return (total += item.qty);
      }, 0);
      return {
        ...state,
        totalCart: total,
      };
    case update_cart:
      let index = state.cart.indexOf(action.updatedItem);
      if (index !== -1) {
        state.cart[index] = action.updatedItem;
      }
      return {
        ...state,
        cart: [...state.cart], // No need to create a new array here
      };
    case delete_cart:
      let position = state.cart.indexOf(action.item);
      state.cart.splice(position, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}
