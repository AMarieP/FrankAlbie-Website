import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navigation.css';

//images import
import desktopLogo from '../images/Asset7@3x.png'
import desktopLogoHover from '../images/Asset5@3x.png'
import deviceLogo from "../images/Asset1@3x.png"

import { ReactComponent as CartImg } from '../images/icons/shopping-basket-svgrepo-com.svg';
import { ReactComponent as ContactIcon } from '../images/icons/speech-bubble-svgrepo-com.svg';
import { ReactComponent as ShopIcon } from '../images/icons/shop-svgrepo-com.svg'
import { ReactComponent as AboutIcon } from '../images/icons/star-svgrepo-com(2).svg';


export default function NavigationBar(){
        
    //On hover change logo into different colour
    const [mouseHover, setMouseHover] = useState(false);
    const [target, setTarget] = useState()

    const homepageImageSrc = mouseHover && target.id =="homepageImage" ? desktopLogoHover : desktopLogo;
    const navShop = mouseHover && target.id=='navShop' ? "navShopHoverLink" : '';
    const navAbout = mouseHover && target.id=='navAbout' ? "navAboutHoverLink" : '';
    const navContact = mouseHover && target.id=='navContact' ? "navContactHoverLink" : '';
    const cart = mouseHover && target.id=='cart' ? "cartHoverLink" : '';

    
    const handleMouseEnter = () =>{
        setMouseHover(true)
    }

    const handleMouseLeave = () =>{
        setMouseHover(false)
    }

    document.onmouseover = function(e) {
        setTarget(e.target);
        console.log(target.id)


    }

    return(
        <>
            {/* {Navigation for Desktop} */}
            <nav id="desktopNav" >
                <Link id="homepage" to={'/'}><img id="homepageImage" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={homepageImageSrc}/></Link>
                <Link id="navShop" to={'/shop'} className={navShop} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Shop</Link>
                <Link id="navAbout"  to={'/about'} className={navAbout} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</Link>
                <Link id="navContact" to={'/contact'} className={navContact} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</Link>
                <Link id="cart" to={'/cart'} className={cart} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><CartImg id="cartImg" alt="cart" /> Cart</Link>
            </nav>

           {/* { Navigation for Mobile & tablet}  */}
            <nav id="devicesNav">
                <div id="backgroundNav"></div>
                <Link to={'/shop'} id="devNavShop"><ShopIcon className="svg" alt="shop"/></Link>
                <Link to={'/about'} id="devNavAbout" ><AboutIcon className="svg" alt="about"/></Link>
                <Link to={'/'} id="devNavHome" ><img src={deviceLogo} alt="home"/></Link>
                <Link to={'/contact'} id="devNavContact"><ContactIcon className="svg" alt="contact" /></Link>
                <Link to={'/cart'} id="devNavCart"><CartImg className="svg" alt="cart"/></Link>
            </nav>
        </>
    )
}