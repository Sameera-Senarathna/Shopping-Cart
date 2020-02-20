import PRODUCTS from "../../data/dummy-data";

const initialState = {
    availableProduct: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const ProductReducer = (state = initialState, action) => {
    return state;
};

export default ProductReducer;