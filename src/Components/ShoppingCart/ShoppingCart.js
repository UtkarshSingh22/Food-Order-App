import React, { useContext, useState } from "react";
import styles from "./ShoppingCart.module.css";
import Modal from "./Modal";
import Button from "../UI/Button";
import CartContext from "../Context/cart-context";
import ItemInCart from "./ItemInCart";
import useInput from "../hooks/use-input";

const ShoppingCart = (props) => {
    const [formActive, setFormActive] = useState(false);

    const {
        inputValue: nameInput,
        inputIsValid: nameIsValid,
        hasError: nameHasError,
        inputValueHandler: nameValueHandler,
        inputIsBlurHandler: nameBlurHandler,
        reset: nameReset,
    } = useInput((value) => value.trim().length !== 0);

    const {
        inputValue: phoneInput,
        inputIsValid: phoneIsValid,
        hasError: phoneHasError,
        inputValueHandler: phoneValueHandler,
        inputIsBlurHandler: phoneBlurHandler,
        reset: phoneReset,
    } = useInput(
        (value) => value.trim().length >= 9 && value.trim().length <= 11
    );

    const {
        inputValue: addInput,
        inputIsValid: addIsValid,
        hasError: addHasError,
        inputValueHandler: addValueHandler,
        inputIsBlurHandler: addBlurHandler,
        reset: addReset,
    } = useInput((value) => value.trim().length !== 0);

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

    let formIsValid = false;

    if (nameIsValid && phoneIsValid && addIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = () => {
        if (nameHasError || phoneHasError || addHasError) {
            return;
        }
        alert("Ordered successfully!");

        nameReset();
        phoneReset();
        addReset();
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
                                onChange={nameValueHandler}
                                onBlur={nameBlurHandler}
                                value={nameInput}
                            ></input>
                            {nameHasError && (
                                <p className={styles.errorText}>
                                    Name must not be empty
                                </p>
                            )}
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
                                onChange={phoneValueHandler}
                                onBlur={phoneBlurHandler}
                                value={phoneInput}
                            ></input>
                            {phoneHasError && (
                                <p className={styles.errorText}>
                                    Phone number must be of 9 - 11 digits
                                </p>
                            )}
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
                            onChange={addValueHandler}
                            onBlur={addBlurHandler}
                            value={addInput}
                        ></textarea>
                        {addHasError && (
                            <p className={styles.errorText}>
                                Address must not be empty
                            </p>
                        )}
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
                {formActive && (
                    <Button
                        className={styles.order}
                        onClick={formSubmissionHandler}
                    >
                        Order
                    </Button>
                )}
            </div>
        </Modal>
    );
};

export default ShoppingCart;
