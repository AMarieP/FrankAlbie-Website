import React, { useContext, useEffect, useState } from "react";
import {PortableText} from '@portabletext/react'
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import AddToCartButton from "../components/addToCartButton"
import LoadingScreen from "../components/loadingScreen";
import "../stylesheets/productPage.css";

import {Link} from 'react-router-dom'


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


    return(
        <>
            <h1>{currentProduct.title}</h1>
            <p>How Exciting</p>
            {<AddToCartButton/>}
            <Link to={"/cart"}><button>Go To Cart</button>
</Link>

        <div id="productPage">
                <div id="image">
                    <div id="productPageImageCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={currentProduct.imageUrl} className="d-block w-100" alt={currentProduct.title}/>
                        </div>
                        <div className="carousel-item">
                            <img src={currentProduct.imageUrl2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={currentProduct.imageUrl3} className="d-block w-100" alt="..."/>
                        </div>
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
                <div id="content">
                    <h1 id="productName">{currentProduct.title}</h1>
                    <p id="productBlurb">{currentProduct.blurb}</p>
                    <p id="price">${currentProduct.price}</p>
                    <AddToCartButton />
                    
                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Description
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            {/* <div className="accordion-body">
                                {currentProduct.description}
                            </div> */}
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Details
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <PortableText value={currentProduct.description}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndividualProduct;