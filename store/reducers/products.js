import PRODUCTS from "../../data/dummy-data";
import {DELETE_PRODUCT} from "../actions/products";

const initialState = {
    availableProduct: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const ProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.pid),
                availableProduct: state.availableProduct.filter(product => product.id !== action.pid)
            }
    }

    return state;
};

export default ProductReducer;