import React, { useContext, useState } from "react";
import styles from "./ShoppingCart.module.css";
import Modal from "./Modal";
import Button from "../UI/Button";
import CartContext from "../Context/cart-context";
import ItemInCart from "./ItemInCart";

const ShoppingCart = (props) => {
    const [formActive, setFormActive] = useState(false);

    const ctx = useContext(CartContext);
    const hasItems = ctx.items.length > 0;

    const addItemHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 });
    };

    const removeItemHandler = (item) => {
        ctx.removeItem(item);
    };

    const showFormHandler = () => {
        setFormActive(true);
    };

    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className={styles.items}>
                {ctx.items.map((item) => {
                    return (
                        <ItemInCart
                            key={item.id}
                            item={item}
                            onAdd={addItemHandler.bind(null, item)}
                            onRemove={removeItemHandler.bind(null, item)}
                        />
                    );
                })}
            </div>
            <div className={styles.total}>
                <div className={styles.totalAmount}>Total amount</div>
                <div className={styles.totalPrice}>₹ {ctx.totalAmount}</div>
            </div>
            {formActive && (
                <form className={styles.form}>
                    <p className={styles.info}>Please fill in your details</p>

                    <div className={styles.firstRow}>
                        <div className={styles.col1}>
                            <label htmlFor="name" className={styles.nameLabel}>
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className={styles.nameInput}
                            ></input>
                        </div>

                        <div className={styles.col2}>
                            <label
                                htmlFor="phone"
                                className={styles.phoneLabel}
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="number"
                                className={styles.phoneInput}
                            ></input>
                        </div>
                    </div>

                    <div className={styles.secondRow}>
                        <label htmlFor="address" className={styles.addLabel}>
                            Address
                        </label>
                        <textarea
                            id="address"
                            type="text"
                            className={styles.addInput}
                        ></textarea>
                    </div>
                </form>
            )}
            <div className={styles.btns}>
                <Button className={styles.cancel} onClick={props.onCloseCart}>
                    Cancel
                </Button>
                {hasItems && !formActive && (
                    <Button
                        className={styles.proceed}
                        onClick={showFormHandler}
                    >
                        Proceed
                    </Button>
                )}
                {formActive && <Button className={styles.order}>Order</Button>}
            </div>
        </Modal>
    );
};

export default ShoppingCart;
