import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MainContent from "./Components/MainContent/MainContent";
import AddToCart from "./Components/MainContent/AddToCart";
import StoreInfo from "./Components/MainContent/StoreInfo";
import DeliveryInfo from "./Components/MainContent/DeliveryInfo";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

const foodItems = [
    {
        id: "1",
        name: "Pizza",
        description: "Finest pizza with delicious toppings!",
        price: 499,
    },
    {
        id: "2",
        name: "Pasta",
        description: "An italian specialty!",
        price: 349,
    },
    {
        id: "3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 299,
    },
    {
        id: "4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 399,
    },
];

const itemsInCart = [];

function App() {
    const [itemsAdded, setItemsAdded] = useState(itemsInCart);

    const addItemToCart = (item) => {
        setItemsAdded([item, ...itemsAdded]);
    };

    return (
        <div className="App">
            <NavBar />
            <MainContent />
            <AddToCart foodItems={foodItems} addItem={addItemToCart} />
            <StoreInfo />
            <DeliveryInfo />
            <ShoppingCart itemsInCart={itemsAdded} />
        </div>
    );
}

export default App;
