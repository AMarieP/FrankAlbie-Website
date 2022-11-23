import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";

function AboutPage(){

    const[aboutContent, setAboutContent] = useState(null);

    useEffect(()=>{
        sanityClient
        .fetch(
            `*[_type == 'content' && title == "About Me Page"]{
                title, paragraph
            }`
        )
        .then((data) => setAboutContent(data))
        .catch(console.error);
    },);

    return(
        <>
        <h1>{aboutContent.title}</h1>
        <p>Text for about page</p>
        <img src="#"/>
        <p>wanna c more</p>
        </>

    )
}

export default AboutPage;