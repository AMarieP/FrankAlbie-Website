import { CartContext } from "./cartContext";
import { ActiveProductContext } from "../activeProduct/activeProductContext";
import React, { useState } from "react";



export default function Cart(){
    const {cartContents, setCart} = useState(CartContext[0]);

    
    // //adds a product to cart
    // function addToCart(product){
    //     setCart([
    //         cartContents,
    //         {
    //             id: product._id,
    //             prodName: product.title,
    //             prodQuant: product.quantitiy,
    //             cartQuant: 1,
    //             prodPrice: product.price,
    //         }
    //     ])
    // };

    // //filters all contents except for the product id that is passed to delete a product from the cart arr.
    // function removeFromCart(productId){
    //     setCart(
    //         cartContents.filter((t) => t.id ==! productId)
    //         )
    // };

    // function incrementProduct(productId, cartQuant, prodQuant){
    //     if(prodQuant > cartQuant){
    //         cartQuant = cartQuant + 1;
    //     }else if(prodQuant <= cartQuant){
    //         cartQuant = cartQuant
    //     }
    // };

    // function cartCostTotal(){
    //     let total = 0;
    //     let prices = cartContents.map(cartContents.prodPrice * cartContents.quantitiy);
    //     prices.forEach(() => total += prices[0])

    // }
    
    return(
        <>
        </>
    )
}