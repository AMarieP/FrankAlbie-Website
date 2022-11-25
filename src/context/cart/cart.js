import { CartContext } from "./cartContext";
import { ActiveProductContext } from "../activeProduct/activeProductContext";
import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'




export default function Cart(){
    const {cartContents, setCart} = useContext(CartContext);
    //gets rid of first value defualts in context
    const firstVal = cartContents.shift();



    //Total of cart
    let total = cartCostTotal();
    function cartCostTotal(){
        let t = 0;
        cartContents.map((product) =>{
            t += product.price
            console.log(total)
            return t
        })
        return t
    }


    //filters all contents except for the product id that is passed to delete a product from the cart arr.
    function removeFromCart(productId){
        setCart(
            cartContents.filter((t) => t.id ==! productId)
            )
    };

    function incrementProduct(productId, cartQuant, prodQuant){
        if(prodQuant > cartQuant){
            cartQuant = cartQuant + 1;
        }else if(prodQuant <= cartQuant){
            cartQuant = cartQuant
        }
    };


    let cartListings = "";
    if(cartContents.length == 0){
        cartListings = "There are no items in your cart!"
    } else{
        for(let i = 1; i < cartContents.length; i++){
            cartListings += "sjhffhsdkjfh"
        }
    }

    
    return(
        <>
        {cartContents &&
            cartContents.map((product, index) => (<>
            <Link to={'/' + product.slug.current} key={index}>
                <span key={index}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <img src={product.imageUrl} />
                </span>
            </Link> 
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
</>
            ))}
            <p>Total: {total}</p>
        </>
    )
}