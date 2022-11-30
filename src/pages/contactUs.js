import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import {PortableText} from '@portabletext/react'
import LoadingScreen from "../components/loadingScreen";

import "../stylesheets/contactUs.css"

import ginaPortrait from "../images/ginaPortrait.jpg"
import halcyon from '../images/halcyon.jpg'
import spindrift from '../images/spindrift.jpg'
import inflore from '../images/inflorescense.jpg'


function ContactPage(){

    const[contactContent, setContactContent] = useState(null);

    useEffect(()=>{
        sanityClient
        .fetch(
            `*[_type == 'content' && title == "Get in touch"]{
                title, paragraph
            }`
        )
        .then((data) => setContactContent(data[0]))
        .catch(console.error);
    },);

    if (!contactContent) return <LoadingScreen />; //if data is not loaded return a loading screen

    return(
        <>
        <div className="container">
            <div id="contactPage">
                <h1 id="contactHeading" >{contactContent.title}</h1>
                <div id="contactText"><PortableText value={contactContent.paragraph}/></div>
                <div id="contactButtons">
                    <p>Email: <a id="contactEmail"  href = "mailto:frankalbiedesign@gmail.com?subject=Getting%20in%20Touch:%20Email%20Enquiry">frankalbiedesign@gmail.com</a></p>
                    <br/><p>Instagram: <a id="contactIg" href="https://www.instagram.com/frankalbie/">@frankalbie</a></p>
                </div>
                <img id="contrastBackground" src={inflore}/>
            </div>
        </div>
        </>

    );
}

export default ContactPage;