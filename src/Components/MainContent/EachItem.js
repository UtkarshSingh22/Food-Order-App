import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import styles from "./EachItem.module.css";
import CartContext from "../Context/cart-context";

const EachItem = (props) => {
    const [quantityInput, setQuantityInput] = useState("1");
    const [inputIsValid, setInputIsValid] = useState(true);

    const ctx = useContext(CartContext);

    const quantityInputHandler = (event) => {
        setQuantityInput(event.target.value);
    };

    const addItemHandler = () => {
        const amt = +quantityInput;

        if (quantityInput.trim().length < 1 || amt < "1" || amt > "10") {
            setInputIsValid(false);
            return;
        }
        setInputIsValid(true);

        const item = {
            name: props.itemData.name,
            id: props.itemData.id,
            price: props.itemData.price,
            amount: amt,
        };

        ctx.addItem(item);

        setQuantityInput("1");
    };

    return (
        <div className={styles.card}>
            <div className={styles.name}>{props.itemData.name}</div>
            <div className={styles.des}>{props.itemData.description}</div>
            <div className={styles.price}>₹ {props.itemData.price}</div>
            <div className={styles.quantity}>
                Quantity&nbsp;&nbsp;
                <input
                    type="number"
                    min="1"
                    max="10"
                    className={styles.input}
                    onChange={quantityInputHandler}
                    value={quantityInput}
                />
            </div>
            <Button className={styles.addBtn} onClick={addItemHandler}>
                + Add
            </Button>
            {!inputIsValid && (
                <p className={styles.error}>
                    Please enter a valid quantity(1-10)
                </p>
            )}
        </div>
    );
};

export default EachItem;
