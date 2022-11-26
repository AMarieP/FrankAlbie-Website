import {Link} from 'react-router-dom'

//navbar


export default function NavigationBar(){
        
    //On hover change logo into different colour
    let homepage = document.getElementById('homepage');
    let homepageImage = document.getElementById('homepageImage');
    console.log(homepage);

    function hoverImage(){
        homepageImage.setAttribute('src', 'assets/Asset 5@3x.png');
        console.log("hover")
    };

    function offImage(){
        homepageImage.setAttribute('src', 'assets/Asset 7@3x.png');
        console.log("off");
    };

    homepage.addEventListener('mouseover', hoverImage);
    homepage.addEventListener('mouseout', offImage);


    function helloFunction(){
        console.log('Hello World!');
    };
    
    return(
        <>
            <nav>
                <a id="homepage" href="#"><img id="homepageImage" src="assets\Asset 7@3x.png"/></a>
                <a href="#">Shop</a>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/cart'}>Cart</Link>
            </nav>

        </>
    )
}