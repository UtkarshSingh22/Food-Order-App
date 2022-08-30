import React from "react";
import styles from "./NavBar.module.css";
import Button from "../UI/Button";
import { GrCart } from "react-icons/gr";

const NavBar = () => {
    return (
        <div className={styles.head}>
            <div className={styles.name}>Foodies</div>
            <Button className={styles.cartBtn}>
                <GrCart />
                Your Cart
                <div className={styles.itemsInCart}>0</div>
            </Button>
        </div>
    );
};

export default NavBar;
