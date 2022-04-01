
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GITHUB_URL, INSTAGRAM_URL, LEETCODE_URL, LINKEDIN_URL } from "../constants/external_urls";
import { GITHUB_HEADER, INSTRAGRAM_HEADER, LEETCODE_HEADER, LINKEDIN_HEADER, MENU_HEADER } from "../constants/icons";
import * as ROUTES from "../constants/routes";
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            borderBottom : isActive ? '1px solid black' : '0px'
        }
    }
    return(
        <header className="h-10 m-20 px-20">
            <div className="width-restrict">
                <div className="flex items-center bg-grey-800 p-3 xl:flex-wrap xl:flex xl:flex-row xl:justify-between xl:items-center text-xl xl:h-full">
                    <div className="inline-flex p-3 hover:bg-grey-900 rounded mr-auto xl:hidden">
                        {MENU_HEADER}
                    </div>
                    <div className="hidden xl:flex">
                        <div className="top-nav flex flex-col xl:flex xl:flex-row">
                            <NavLink className="mx-3" style={navLinkStyles}  to={ROUTES.WORK}>
                                WORK
                            </NavLink>
                            <NavLink className="mx-3" style={navLinkStyles}  to={ROUTES.ABOUT}>
                                ABOUT ME
                            </NavLink>
                            <NavLink className="mx-3" style={navLinkStyles}  to={ROUTES.CONTACT}>
                                CONTACT ME
                            </NavLink>
                        </div>
                    </div>
                    
                
                    <div className="p-2 mr-4 inline-flex items-center text-gray-700 xl:text-center xl:flex xl:items-center xl:align-items xl:cursor-pointer">
                        <h1 className="flex justify-center w-full text-[1.75rem] tracking-wide">AJAY SHARMA</h1>
                    </div>
                    
                    <div className="text-gray-700 xl:text-center hidden xl:flex xl:items-center xl:align-items" >
                        {/* //LinkedIN */}
                        <a className="mx-3 text-xl" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIN Profile Link">
                            {LINKEDIN_HEADER}
                        </a>
                        {/* //LeetCode */}
                        <a className="mx-3 text-xl" href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Pofile Link">
                            {LEETCODE_HEADER}
                        </a>
                        {/* //GITHUB */}
                        <a className="mx-3 text-xl" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile Link">
                            {GITHUB_HEADER}
                        </a>
                        {/* //GitHub */}
                        <a className="mx-3 text-xl" href={INSTAGRAM_URL}  target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile Link">
                            {INSTRAGRAM_HEADER}
                        </a>
                    </div>
                </div>
                {/* Small Menu */}
                {/* <div className="hidden ham-menu">
                    <div className="flex items-center flex-col w-full">
                        <   NavLink className="mx-3" style={navLinkStyles}  to={ROUTES.WORK}>
                                WORK
                            </NavLink>
                            <NavLink className="mx-3" style={navLinkStyles}  to={ROUTES.ABOUT}>
                                ABOUT ME
                            </NavLink>
                            <NavLink className="mx-3" style={navLinkStyles}  to={ROUTES.CONTACT}>
                                CONTACT ME
                            </NavLink>
                    </div>
                </div> */}

                
            </div>
            
        </header>
    );
    
}