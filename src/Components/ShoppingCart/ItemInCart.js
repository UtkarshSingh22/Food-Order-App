import React from "react";
import Button from "../UI/Button";
import styles from "./ItemInCart.module.css";

const ItemInCart = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.name}>{props.item.name}</div>

            <div className={styles.value}>
                <div className={styles.price}>₹ {props.item.price}</div>
                <div className={styles.amount}>x{props.item.amount}</div>
                <Button className={styles.add}>+</Button>
                <Button className={styles.remove}>-</Button>
            </div>
        </div>
    );
};

export default ItemInCart;
