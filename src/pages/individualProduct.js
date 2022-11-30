import React, { useContext, useEffect, useState } from "react";
import {PortableText} from '@portabletext/react'
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import AddToCartButton from "../components/addToCartButton"
import LoadingScreen from "../components/loadingScreen";

import "../stylesheets/productPage.css";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Link} from 'react-router-dom'
import ToggleMenu from "../components/toggle";


function IndividualProduct(){

    const { slug } = useParams();//makes sure we get the product with the slug we have clicked to!
    const {currentProduct, setCurrentProduct} = useContext(ActiveProductContext);

    console.log(slug);
    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == 'product' && slug.current == "${slug}"]{
                _id, title, slug, price, SKU, images, stockAmount, blurb, description, productDetails,
                "imageUrl": images[0].asset->url,
                "imageUrl2": images[1].asset->url,
                "imageUrl3": images[2].asset->url
            }`
        )
        .then((data) => setCurrentProduct(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!currentProduct) return <LoadingScreen/>; //if productData is not there return a loading screen 
    
    let description = currentProduct.description;
    let productDetails = currentProduct.productDetails;

    return(
        <>
        <div className="container">
            <div id="productPage">
                    <div id="image">
                        <div id="productPageImageCarousel" className="carousel carousel-dark" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={currentProduct.imageUrl} className="d-block w-10" alt={currentProduct.title}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={currentProduct.imageUrl2} className="d-block w-10" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={currentProduct.imageUrl3} className="d-block w-10" alt="..."/>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#productPageImageCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#productPageImageCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="content">
                        <h1 id="productName">{currentProduct.title}</h1>
                        <p id="productBlurb">{currentProduct.blurb}</p>
                        <p id="price">${currentProduct.price}</p>
                        <AddToCartButton />
                        <ToggleMenu title="Description" content={description}/>
                        <ToggleMenu title="Product Details" content={productDetails}/>
                    </div>
                </div>
        </div>
        </>
    )
}

export default IndividualProduct;