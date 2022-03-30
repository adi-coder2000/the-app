import {FaReact} from "react-icons/fa";
import AboutFooterTile from "./about-footer-tile";
export default function AboutFooter(){
    return(
        <>
        <div className="width-restrict">
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