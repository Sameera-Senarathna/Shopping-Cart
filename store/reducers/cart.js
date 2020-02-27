import {ADD_TO_CART} from "../actions/cart";
import CartItem from "../../model/Cart-item";

const initialState  = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART:

            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            if(state.items[addedProduct.id]) {
                // Already have the item in the cart
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
                return {
                    ...state, // no need since all the state variable are updated
                    items: { ...state.items, [addedProduct.id]: updatedCartItem },
                    totalAmount: state.totalAmount + prodPrice
                }
            } else {
                // Add new item to the cart
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: newCartItem },
                    totalAmount: state.totalAmount + prodPrice
                }
            }

    }
    return state;

}