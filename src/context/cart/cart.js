import { CartContext } from "./cartContext";
import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom'




export default function Cart(){
    const [cartContents, setCart] = useContext(CartContext);
    console.log(localStorage.getItem('cartContents'))

    //Total of cart
    function cartCostTotal(){
        let t = 0;
        cartContents.map((product) =>{
            t += product.price
            return t
        })
        return t
    }
    let total = cartCostTotal();



    //filters all contents except for the product id that is passed to delete a product from the cart arr.
    function removeFromCart(productId){
        setCart(
            cartContents.filter((t) => t.id ==! productId)
            )
    };

//Increments or decrements product
    function incrementProduct(product, index){
        if(product.stockAmount > product.quantity){
            cartContents[index].quantity++
            console.log(cartContents[index].quantity)
        }

    };

    function decrementProduct(product, index){
        if(product.quantity > 1){
            cartContents[index].quantity--
        }else{
            removeFromCart(product.id)
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
        <span key={index * product.price}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.imageUrl} />
        </span>
    </Link> 
    <button onClick={() => removeFromCart(product.id)}>Remove</button>
    <button onClick={() => incrementProduct(product, index)} >+</button>                    
    <p>{product.quantity}</p>
    <button onClick={() => decrementProduct(product, index)} >-</button>
    </>
    ))}
    <p>Total: {total}</p>

        </>
    )
}