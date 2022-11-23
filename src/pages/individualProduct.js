import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import AddToCartButton from "../components/addToCartButton"

function IndividualProduct(){

    const[productData, setProductData] = useState(null); //productdata state is null
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
        .then((data) => setProductData(data[0]))
        .catch(console.error);
    }, [slug]);

    setCurrentProduct(productData);
    console.log(currentProduct + 'hello');

    if (!productData) return <div>Loading...</div>; //if productData is not there return a loading screen 

    return(
        <>
            <h1>{productData.title}</h1>
            <p>How Exciting</p>
            {<AddToCartButton/>}

        </>
    )
}

export default IndividualProduct;