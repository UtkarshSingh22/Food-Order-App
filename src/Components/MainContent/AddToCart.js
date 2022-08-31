import React from "react";
import EachItem from "./EachItem";
import styles from "./AddToCart.module.css";

const AddToCart = (props) => {
    const AddItemHandler = (item) => {
        props.addItem(item);
    };

    return (
        <div className={styles.body}>
            <h2 className={styles.head}>Order Now!</h2>
            <div className={styles.card}>
                {props.foodItems.map((foodItem) => {
                    return (
                        <EachItem
                            itemData={foodItem}
                            key={foodItem.id}
                            addItem={AddItemHandler}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AddToCart;
