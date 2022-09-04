import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MainContent from "./Components/MainContent/MainContent";
import AddToCart from "./Components/MainContent/AddToCart";
import StoreInfo from "./Components/MainContent/StoreInfo";
import DeliveryInfo from "./Components/MainContent/DeliveryInfo";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
    const [cartOpen, setCartOpen] = useState(false);

    const openCartHandler = () => {
        setCartOpen(true);
    };

    const closeCartHandler = () => {
        setCartOpen(false);
    };

    return (
        <div className="App">
            <NavBar onOpenCart={openCartHandler} />
            <MainContent />
            <AddToCart />
            <StoreInfo />
            <DeliveryInfo />
            {cartOpen && <ShoppingCart onCloseCart={closeCartHandler} />}
        </div>
    );
}

export default App;
