import PRODUCTS from "../../data/dummy-data";
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../actions/products";
import Product from "../../model/product";

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
            };

        case CREATE_PRODUCT:
            const newProduct = new Product(
                new Date().toString(),
                'u1',
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price
            );

            return  {
                ...state,
                availableProduct: state.availableProduct.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct)
            };

        case UPDATE_PRODUCT:

            const productIndex = state.userProducts.findIndex(
                prod => prod.id === action.pid
            );

            const updatedProduct = new Product(
                action.pid,
                state.userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                state.userProducts[productIndex].price
            );

            const updatedUserProducts = [...state.userProducts ];
            updatedUserProducts[productIndex] = updatedProduct;

            const availableProductIndex = state.availableProduct.findIndex(
                prod => prod.id === action.pid
            );

            const updatedAvailableProduct = [...state.availableProduct];
            updatedAvailableProduct[availableProductIndex] = updatedProduct;

            return {
                ...state,
                availableProduct: updatedAvailableProduct,
                userProducts: updatedUserProducts
            }

    }

    return state;
};

export default ProductReducer;