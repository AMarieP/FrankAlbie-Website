import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import sanityClient from "../client";
import "../stylesheets/allProducts.css";


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
        <div id="productListingPage" >
        <h1>Shop Frank Albie</h1>
            <div id="products">
                {allProductsData &&
                    allProductsData.map((product, index) => (
                    <Link to={'/' + product.slug.current} key={product.slug.current}>
                        <span key={index}>
                        <div className="productListing">
                            <div className="productListingDetails">
                                <h2 className="productListingTitle">{product.title}</h2>
                                <p className="productListingPrice">${product.price}</p>
                            </div>
                            <div className="productListingImage">
                                <img src={product.imageUrl} alt={product.title} />
                            </div>
                        </div>
                        </span>
                    </Link> 
                    ))};
            </div>
        </div>        
        </>
    )
};

export default AllProducts;





{/* <div>
{allProductsData &&
allProductsData.map((product, index) => (
<Link to={'/' + product.slug.current} key={product.slug.current}>
    <span key={index}>
    <div class="productListing">
        <div class="productListingDetails">
            <h2 class="productListingTitle">{product.title}</h2>
            <p class="productListingPrice">${product.price}</p>
        </div>
        <div class="productListingImage">
            <img src={product.imageUrl} alt={product.title} />
        </div>
    </div>
    </span>
</Link> 
))};
</div> */}