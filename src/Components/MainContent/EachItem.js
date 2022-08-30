import React from "react";
import Button from "../UI/Button";
import styles from "./EachItem.module.css";

const EachItem = (props) => {
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
                />
            </div>
            <Button className={styles.addBtn}>+ Add</Button>
        </div>
    );
};

export default EachItem;
