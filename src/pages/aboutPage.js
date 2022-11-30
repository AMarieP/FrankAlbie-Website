import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import {PortableText} from '@portabletext/react'
import "../stylesheets/aboutPage.css"


function AboutPage(){

    const[aboutContent, setAboutContent] = useState(null);

    useEffect(()=>{
        sanityClient
        .fetch(
            `*[_type == 'content' && title == "aboutme"]{
                title, paragraph
            }`
        )
        .then((data) => setAboutContent(data[0]))
        .catch(console.error);
    },);

    if (!aboutContent) return <div>Loading...</div>; //if data is not loaded return a loading screen

    return(
        <>
        <div id="aboutPage">
        <h1 id="aboutHeading" >{aboutContent.title}</h1>
        <p id="aboutContent" >
            <PortableText value={aboutContent.paragraph}/>
            </p>
        <img id="portrait" src="{../images/my about photo eek.JPG}"/>
        <img className="circle" id="halCircle" src="../images/"/>
        <img className="circle" id="spinCircle" src="../Components/assets/spindrift.jpg"/>
        <div id="boxKhaki"></div>
        <p id="linkToSeeMore">wanna see more? <a href="#" className="shopLink">SHOP</a> here or <a href="#" className="contactLink">CONTACT US</a></p>
    </div>
        </>

    );
}

export default AboutPage;