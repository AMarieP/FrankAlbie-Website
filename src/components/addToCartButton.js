import { CartContext } from "../context/cart/cartContext";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import React, { useContext, useState } from "react";

//Check if in arr already, if in arr increment quantity instead of products

function AddToCartButton(){
    const [cartContents, setCart] = useContext(CartContext);
    const {currentProduct} = useContext(ActiveProductContext);

    function addQuantityValue(prod){
        prod.quantity = 1
    };

    function checkIfProductExists(product){
        for(let i = 0; i < cartContents.length; i++){
            if(cartContents[i]._id === product._id){
                return true
            }
        }
        return false;
    };

    function addToCart(product){
        let exists = checkIfProductExists(product);
        console.log("exists " + exists)

        if(exists === true){
            product.quantity++
            console.log(cartContents)
        }else if(exists === false){
            addQuantityValue(product);
            console.log("Cart: " + cartContents + "Product: " + product.title)
            let b = cartContents.push(product)
        }

    };

    return(
        <button onClick={() => addToCart(currentProduct)} >Add To Cart</button>
    )
}

export default AddToCartButton;