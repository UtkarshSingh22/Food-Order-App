import React from "react";
import styles from "./NavBar.module.css";
import Button from "../UI/Button";

const NavBar = () => {
    return (
        <div className={styles.head}>
            <div className={styles.name}>Foodies</div>
            <Button className={styles.cartBtn}>
                <img src="" alt="" />
                Your Cart <div>0</div>
            </Button>
        </div>
    );
};

export default NavBar;
