import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./client";

function IndividualProduct(){

    const[productData, setProductData] = useState(null); //productdata state is null
    const { slug } = useParams();//makes sure we get the product with the slug we have clicked to!

    console.log(slug);
    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == 'product' && slug.current == "${slug}"]{
                title, slug, price, images,
                "imageUrl": images[0].asset->url
            }`
        )
        .then((data) => setProductData(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!productData) return <div>Loading...</div>; //if productData is not there return a loading screen 

    return(
        <>
            <h1>{productData.title}</h1>
            <p>How Exciting</p>

        </>
    )
}

export default IndividualProduct;