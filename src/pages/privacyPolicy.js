import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { PortableText } from '@portabletext/react'

//TO DO: Add Stylings

function PrivacyPolicy(){

    const[privacyPolicy, setPrivacyPolicy] = useState(null);

    useEffect(()=>{
        sanityClient
        .fetch(
            `*[_type == 'content' && title == "Privacy Policy"]{
                title, paragraph
            }`
        )
        .then((data) => setPrivacyPolicy(data[0]))
        .catch(console.error);
    },);

    if (!privacyPolicy) return <div>Loading...</div>; //if data is not loaded return a loading screen

    return(
        <>
        <div className="container">
            <h1>{privacyPolicy.title}</h1>
            <PortableText value={privacyPolicy.paragraph}/>
        </div>
        </>

    );
}

export default PrivacyPolicy;