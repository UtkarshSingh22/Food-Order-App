import React from "react";
import Button from "../UI/Button";

const ItemInCart = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>{`x${props.quantity}`}</div>
            <Button>+</Button>
            <Button>-</Button>
        </div>
    );
};

export default ItemInCart;
