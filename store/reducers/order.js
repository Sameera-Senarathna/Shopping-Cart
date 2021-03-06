import { ADD_ORDER } from "../actions/order";
import Order from "../../model/Order";

const initialState = {
    orders: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.orderDate.items,
                action.orderDate.amount,
                new Date()
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    }

    return state;
};