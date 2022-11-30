import { Link } from 'react-router-dom'
import '../stylesheets/footer.css'

export default function Footer(){

    return(
        <>
        <footer>
        <div id="logoFooter">
            <a href="#"><img id="footerLogoImage" src="http://localhost:3000/static/media/Asset5@3x.05d3ea6b653bf316a36f.png" alt="Frank Albie Logo"/></a>
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