import React, { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Button from "../UI/Button";
import { GrCart } from "react-icons/gr";
import CartContext from "../Context/cart-context";

const NavBar = (props) => {
    const context = useContext(CartContext);

    const [isClicked, setIsClicked] = useState(false);

    const { items } = context;

    const btnClasses = `${styles.cartBtn} ${isClicked && styles.bump}`;

    const numberOfItems = context.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setIsClicked(true);

        const timer = setTimeout(() => {
            setIsClicked(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <div className={styles.head}>
            <div className={styles.name}>Foodies</div>
            <Button className={btnClasses} onClick={props.onOpenCart}>
                <GrCart />
                Your Cart
                <div className={styles.itemsInCart}>{numberOfItems}</div>
            </Button>
        </div>
    );
};

export default NavBar;
