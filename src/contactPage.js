import React, { useEffect, useState } from "react";
import sanityClient from "./client";
import { PortableText } from '@portabletext/react'

//TO DO: Make query get relevant images and display xx

function ContactPage(){

    const[contactContent, setContactContent] = useState(null);

    useEffect(()=>{
        sanityClient
        .fetch(
            `*[_type == 'content' && title == "aboutme"]{
                title, paragraph
            }`
        )
        .then((data) => setContactContent(data[0]))
        .catch(console.error);
    },);

    if (!contactContent) return <div>Loading...</div>; //if data is not loaded return a loading screen

    return(
        <>
        <h1>{contactContent.title}</h1>

        <p>
            <PortableText 
            value={contactContent.paragraph}
            />
        </p>
        </>

    );
}

export default ContactPage;