//Component to make animated loading screen
import "../stylesheets/loading.css";
import loaderImage from "../images/Asset5@3x.png"



export default function LoadingScreen(){

  return(
    <div id="loadWrapper" >
        <div id="loadContents">
            <p id="welcomeTo" >welcome to</p>
            <img id="frankalbieLoadingLogo" src={loaderImage}/>
            <div id="loading">
                <p>loading</p>
                <div id="dot1">.</div>
                <div id="dot2">.</div>
                <div id="dot3">.</div>
            </div>
        </div>
    </div>
  ); 
}