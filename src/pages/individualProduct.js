import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import AddToCartButton from "../components/addToCartButton"

import {Link} from 'react-router-dom'


function IndividualProduct(){

    const { slug } = useParams();//makes sure we get the product with the slug we have clicked to!
    const {currentProduct, setCurrentProduct} = useContext(ActiveProductContext);

    console.log(slug);
    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == 'product' && slug.current == "${slug}"]{
                _id, title, slug, price, SKU, images,
                "imageUrl": images[0].asset->url
            }`
        )
        .then((data) => setCurrentProduct(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!currentProduct) return <div>Loading...</div>; //if productData is not there return a loading screen 


    return(
        <>
            <h1>{currentProduct.title}</h1>
            <p>How Exciting</p>
            {<AddToCartButton/>}
            <Link to={"/cart"}><button>Go To Cart</button>
</Link>
        </>
    )
}

export default IndividualProduct;