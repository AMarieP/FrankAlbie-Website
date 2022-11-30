import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import {PortableText} from '@portabletext/react'
import LoadingScreen from "../components/loadingScreen";
import { Link } from "react-router-dom";

import "../stylesheets/aboutPage.css"

import ginaPortrait from "../images/ginaPortrait.jpg"
import halcyon from '../images/halcyon.jpg'
import spindrift from '../images/spindrift.jpg'
import inflore from '../images/inflorescense.jpg'


function AboutPage(){

    const[aboutContent, setAboutContent] = useState(null);

    useEffect(()=>{
        sanityClient
        .fetch(
            `*[_type == 'content' && title == "About Frankalbie"]{
                title, paragraph
            }`
        )
        .then((data) => setAboutContent(data[0]))
        .catch(console.error);
    },);

    if (!aboutContent) return <LoadingScreen />; //if data is not loaded return a loading screen

    return(
        <>
        <div className="container">
            <div id="infloroBanner"></div>
            <div id="aboutPage">
                <h1 id="aboutHeading" >{aboutContent.title}</h1>
                <div id="aboutContent" >
                    <PortableText value={aboutContent.paragraph}/>
                    </div>
                <img id="portrait" src={ginaPortrait}/>
                <img className="circle" id="halCircle" src={halcyon}/>
                <img className="circle" id="spinCircle" src={spindrift}/>
                <div id="boxKhaki"></div>
                <p id="linkToSeeMore">wanna see more? <Link to={'/shop'} className="shopLink"> SHOP </Link>  here or  <Link to={'/contact'} className="contactLink"> CONTACT US </Link></p>
            </div>
        </div>
        </>

    );
}

export default AboutPage;