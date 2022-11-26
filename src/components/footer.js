import {Link} from 'react-router-dom'
//need to link w css & grab images from sanity

export default function Footer(){

    return(
        <>
        <footer>
        <div id="logoFooter">
            <a href="#"><img id="footerLogoImage" src="assets\Asset 5@3x.png" alt="Frank Albie Logo"/></a>
        </div>

        <div id="navigationFooter">
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            <Link to={'/contact'}>contact</Link>
            <Link to={'/privacy'}>privacy</Link>
        </div>

        <div id="copyrightFooter">
            <p>© 2022 frankalbie</p>
        </div>
    </footer>
        </>
    )
}