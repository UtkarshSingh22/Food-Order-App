import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import Button from "../UI/Button";
import { GrCart } from "react-icons/gr";
import CartContext from "../Context/cart-context";

const NavBar = (props) => {
    const context = useContext(CartContext);

    // const numItems = 0;
    // for (let i = 0; i < context.items.length; i++) {
    //     numItems += context.items[i].amount;
    // }

    const numberOfItems = context.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    return (
        <div className={styles.head}>
            <div className={styles.name}>Foodies</div>
            <Button className={styles.cartBtn} onClick={props.onOpenCart}>
                <GrCart />
                Your Cart
                <div className={styles.itemsInCart}>{numberOfItems}</div>
            </Button>
        </div>
    );
};

export default NavBar;
