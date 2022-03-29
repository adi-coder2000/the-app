import {FaReact} from "react-icons/fa";
import AboutFooterTile from "./about-footer-tile";
export default function AboutFooter(){
    return(
        <>
        <div className="container mx-auto max-w-screen-lg h-full">
        <hr/>
            <div className="flex flex-wrap justify-around">          
                <AboutFooterTile/>  
                <AboutFooterTile/>
                <AboutFooterTile/>
            </div>
        <hr/>

        </div>
        </>
    );
}