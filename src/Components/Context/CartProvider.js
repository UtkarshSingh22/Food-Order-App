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
    if (action.type === "REMOVE") {
        const updatedTotalAmount = state.totalAmount - action.item.price;

        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id;
        });
        const existingItem = state.items[existingItemIndex];

        if (existingItem.amount === 1) {
            let updatedItems = [...state.items];
            updatedItems.splice(existingItemIndex, 1);

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        }

        const updatedItem = {
            ...existingItem,
            amount: existingItem.amount - 1,
        };

        let updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "CLEAR") {
        return initialState;
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

    const removeItemHandler = (item) => {
        dispatchCartState({ type: "REMOVE", item: item });
    };

    const clearItemsHandler = () => {
        dispatchCartState({ type: "CLEAR" });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearItems: clearItemsHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
