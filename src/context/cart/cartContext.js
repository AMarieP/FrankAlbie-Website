import { createContext, useState, useEffect } from "react";


const CartContext = createContext([{}, () => {}]);

const CartProvider = (props) => {
    const [cartContents, setCart] = useState([]);
            //  //If there is data in cart contents it will get it and set it
    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('cartContents'))
        console.log(cartItemsData + "Cart Items Data")
            
        if (!cartItemsData) setCart(cartItemsData)
    }, [])
        
    //Whenever cart contents updates set the local storage cartcontents to what cart items is
    useEffect(() => {
        localStorage.setItem('cartContents', JSON.stringify(cartContents))
        console.log(cartContents + "cart Contents1")
        console.log(localStorage.getItem('cartContents') + "Cart Contents")
    }, [cartContents])

    return (
        <CartContext.Provider value={[cartContents, setCart]}>
            {props.children}
        </CartContext.Provider>
    );
  }

export { CartContext, CartProvider };
