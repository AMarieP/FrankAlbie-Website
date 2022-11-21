import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import sanityClient from "../client";

function AllProducts(){

    const [allProductsData, setAllProducts] = useState(null);
    useEffect(() =>{
        sanityClient
        .fetch(
            `*[_type == "product"]{
                _id, title, slug, price, images,
                "imageUrl": images[0].asset->url
                
            }`
        )
        .then((data) => setAllProducts(data))
        .catch(console.error);
    }, []);

    return(
        <>
        <h1>All Products Page</h1>
        <p>all of the products should display here</p>
        <div>
            <Link to={'/cart'}>
                Go To Cart
            </Link>
        </div>
        <div>
            {allProductsData &&
            allProductsData.map((product, index) => (
            <Link to={'/' + product.slug.current} key={product.slug.current}>
                <span key={index}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    {console.log(product.imageUrl)}
                    <img src={product.imageUrl} />
                </span>
            </Link> 
            ))};
        </div>
        
        </>
    )
};

export default AllProducts;