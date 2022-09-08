import React, { useState, useEffect } from "react";
import EachItem from "./EachItem";
import styles from "./AddToCart.module.css";

const AddToCart = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [loadError, setLoadError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://react-http-75e3e-default-rtdb.firebaseio.com/meals.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong.");
            }

            const items = await response.json();

            let loadedMeals = [];

            for (let item in items) {
                loadedMeals.push({
                    id: item,
                    name: items[item].name,
                    description: items[item].description,
                    price: items[item].price,
                });
            }

            setFoodItems(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setLoadError(error.message);
        });
    }, []);

    let content = <p className={styles.noItems}>Found no items to order.</p>;

    if (foodItems.length > 0) {
        content = (
            <div className={styles.card}>
                {foodItems.map((foodItem) => {
                    return <EachItem itemData={foodItem} key={foodItem.id} />;
                })}
            </div>
        );
    }
    if (loadError) {
        content = <p className={styles.error}>{loadError}</p>;
    }
    if (isLoading) {
        content = (
            <p className={styles.noItems}>The food items are loading...</p>
        );
    }

    return (
        <div className={styles.body}>
            <h1 className={styles.head}>Order Now!</h1>
            <React.Fragment>{content}</React.Fragment>
        </div>
    );
};

export default AddToCart;
