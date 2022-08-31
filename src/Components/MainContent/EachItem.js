import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./EachItem.module.css";

const EachItem = (props) => {
    const [quantityInput, setQuantityInput] = useState("");

    const quantityInputHandler = (event) => {
        setQuantityInput(event.target.value);
    };

    const addItemHandler = () => {
        const item = {
            name: props.itemData.name,
            price: props.itemData.price,
            quantity: parseInt(quantityInput),
        };

        props.addItem(item);

        setQuantityInput("");
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
                    min="0"
                    max="30"
                    className={styles.input}
                    onChange={quantityInputHandler}
                    value={quantityInput}
                />
            </div>
            <Button className={styles.addBtn} onClick={addItemHandler}>
                + Add
            </Button>
        </div>
    );
};

export default EachItem;
