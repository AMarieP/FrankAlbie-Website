import { CartContext } from "../context/cart/cartContext";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import React, { useContext, useState } from "react";

function AddToCartButton(){
    const [cartContents, setCart] = useState(CartContext);
    const {currentProduct} = useContext(ActiveProductContext);
    function addToCart(product){
        setCart(
            cartContents + product,

        )
    };

    return(
        <button onClick={() => addToCart(currentProduct)} >Add To Cart</button>
    )
}

export default AddToCartButton;