import React, { useContext, useState } from "react";
import styles from "./ShoppingCart.module.css";
import Modal from "./Modal";
import Button from "../UI/Button";
import CartContext from "../Context/cart-context";
import ItemInCart from "./ItemInCart";
import useInput from "../hooks/use-input";

const ShoppingCart = (props) => {
    const [formActive, setFormActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

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

    const submitOrder = async () => {
        const userDetails = {
            name: nameInput,
            phone: phoneInput,
            address: addInput,
        };

        await fetch(
            "https://react-http-75e3e-default-rtdb.firebaseio.com/orders.json",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userDetails,
                    itemsOrdered: ctx.items,
                }),
                headers: { "Content-Type": "application/json" },
            }
        );
    };

    const formSubmissionHandler = () => {
        if (!nameIsValid || !phoneIsValid || !addIsValid) {
            return;
        }
        setIsLoading(true);

        submitOrder();

        nameReset();
        phoneReset();
        addReset();

        setIsLoading(false);
        setOrderPlaced(true);

        ctx.clearItems();
    };

    const nameClasses = nameHasError && styles.invalid;
    const phoneClasses = phoneHasError && styles.invalid;
    const addClasses = addHasError && styles.invalid;

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {!isLoading && !orderPlaced && (
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
            )}
            {!isLoading && !orderPlaced && (
                <div className={styles.total}>
                    <div className={styles.totalAmount}>Total amount</div>
                    <div className={styles.totalPrice}>₹ {ctx.totalAmount}</div>
                </div>
            )}
            {formActive && !isLoading && !orderPlaced && (
                <form className={styles.form}>
                    <p className={styles.info}>Please fill in your details</p>

                    <div className={styles.firstRow}>
                        <div className={`${styles.col1} ${nameClasses}`}>
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

                        <div className={`${styles.col2} ${phoneClasses}`}>
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

                    <div className={`${styles.secondRow} ${addClasses}`}>
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
            {!isLoading && !orderPlaced && (
                <div className={styles.btns}>
                    <Button
                        className={styles.cancel}
                        onClick={props.onCloseCart}
                    >
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
            )}
            {isLoading && !orderPlaced && (
                <h2 className={styles.placing}>
                    Placing your order. Please wait!
                </h2>
            )}
            {!isLoading && orderPlaced && (
                <h2 className={styles.placed}>Order placed!</h2>
            )}
        </Modal>
    );
};

export default ShoppingCart;
