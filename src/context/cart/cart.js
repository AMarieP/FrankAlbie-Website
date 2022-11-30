import { CartContext } from "./cartContext";
import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom'


export default function Cart(){
    const [cartContents, setCart] = useContext(CartContext);
    console.log(localStorage.getItem('cartContents'))
    
    //mail funtion TBD
    function sendMail() {
        var link = "mailto:me@example.com"
                 + "?cc=myCCaddress@example.com"
                 + "&subject=" + encodeURIComponent("This is my subject")
                 + "&body=" + encodeURIComponent(document.getElementById('myText').value)
        ;
        
        window.location.href = link;
    }

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
            );
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
    

    //cart listings element
    let cartListings = <>{cartContents &&
        cartContents.map((product, index) => (<>
            <span key={index * product.price}>
                <li className="listing">
                    <div className="cartListing">
                        <div className="cartProdDetails">
                            <div className="cartProdImg">
                                <img src={product.imageUrl}/>
                            </div>
                            <div className="cartProdText">
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                            </div>
                        </div>
                        <button class="cartButtonDelete" onClick={() => removeFromCart(product.id)}>X</button>
                    </div>
                    <hr class="cartHr"/>
                </li>
            </span>
        </>
        ))}</>

    //empty cart element

    let emptyCartMessage = <div id="emptyItemDiv">
        <p id="emptyPara" >There are no items in your cart!</p>
    </div>
    

    //Shows a message saying no cart items if Cart is empty
    let cartList = cartContents.length == 0 ? emptyCartMessage : cartListings;
    
    return(
        <>
        <ul id="cartList">
            <hr className="cartHr"/>
                {cartList}
            <p id="cartTotal">Total: ${total}</p>
            <button className="button" >Enquire Now</button>
        </ul>

        </>
    )
}