import CartContext from "./cart-context";
import React, { useReducer } from "react";

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id;
        });
        const existingItem = state.items[existingItemIndex];
        let updatedItem;
        let updatedItems;

        if (existingItem) {
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount,
            };

            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return { initialState };
};

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(
        cartReducer,
        initialState
    );

    const addItemHandler = (item) => {
        dispatchCartState({ type: "ADD", item: item });
    };

    const removeItemHandler = (id) => {
        dispatchCartState({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
