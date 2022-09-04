import React from "react";
import styles from "./ShoppingCart.module.css";
import ItemInCart from "./ItemInCart";
import Modal from "./Modal";
import Button from "../UI/Button";

const ShoppingCart = (props) => {
    const Cart = [{ id: 1, name: "Burger", amount: 2, price: 399 }];

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {Cart.map((item) => {
                return item.name;
            })}
            <div className={styles.total}>
                <div className={styles.totalAmount}>Total amount</div>
                <div className={styles.totalPrice}>878</div>
            </div>
            <div className={styles.btns}>
                <Button className={styles.cancel} onClick={props.onCloseCart}>
                    Cancel
                </Button>
                <Button className={styles.order}>Order</Button>
            </div>
        </Modal>
    );
};

export default ShoppingCart;
