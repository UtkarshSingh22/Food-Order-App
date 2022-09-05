import React, { useContext } from "react";
import styles from "./ShoppingCart.module.css";
import Modal from "./Modal";
import Button from "../UI/Button";
import CartContext from "../Context/cart-context";
import ItemInCart from "./ItemInCart";

const ShoppingCart = (props) => {
    const ctx = useContext(CartContext);

    const hasItems = ctx.items.length > 0;

    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className={styles.items}>
                {ctx.items.map((item) => {
                    return <ItemInCart item={item} />;
                })}
            </div>
            <div className={styles.total}>
                <div className={styles.totalAmount}>Total amount</div>
                <div className={styles.totalPrice}>₹ {ctx.totalAmount}</div>
            </div>
            <div className={styles.btns}>
                <Button className={styles.cancel} onClick={props.onCloseCart}>
                    Cancel
                </Button>
                {hasItems && <Button className={styles.order}>Order</Button>}
            </div>
        </Modal>
    );
};

export default ShoppingCart;
