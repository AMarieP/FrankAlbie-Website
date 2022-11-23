import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContext } from './context/cart/cartContext';
import { ActiveProductContext } from './context/activeProduct/activeProductContext';
import Cart from './context/cart/cart';
import IndividualProduct from './pages/individualProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActiveProductContext.Provider value={IndividualProduct}>
    <CartContext.Provider value={Cart}>
      <App />
    </CartContext.Provider>
    </ActiveProductContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
