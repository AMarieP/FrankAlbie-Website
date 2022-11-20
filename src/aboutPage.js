import React, { useEffect, useState } from "react";
import sanityClient from "./client";
import { PortableText } from '@portabletext/react'

//TO DO: Make query get relevant images and display xx

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
        <h1>{aboutContent.title}</h1>
        <p>Text for about page</p>
        <img src="#"/>
        <p>
            <PortableText 
            value={aboutContent.paragraph}
            />
        </p>
        </>

    );
}

export default AboutPage;