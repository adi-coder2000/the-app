import { Link } from "react-router-dom";
import { GITHUB_URL, INSTAGRAM_URL, LEETCODE_URL, LINKEDIN_URL } from "../constants/external_urls";
import { GITHUB_HEADER, INSTRAGRAM_HEADER, LEETCODE_HEADER, LINKEDIN_HEADER } from "../constants/icons";
import * as ROUTES from "../constants/routes";
export default function Header() {
    return(
        <header className="h-10 m-20 px-20">
            <div className="width-restrict">
                <div className="flex justify-between items-center text-xl h-full">
                    <div>
                        <Link className="mx-3" to={ROUTES.WORK}>
                            WORK
                        </Link>
                        <Link className="mx-3" to={ROUTES.ABOUT}>
                            ABOUT ME
                        </Link>
                        <Link className="mx-3" to={ROUTES.CONTACT}>
                            CONTACT ME
                        </Link>
                    </div>
                
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1 className="flex justify-center w-full text-2xl">AJAY SHARMA</h1>
                    </div>
                    <div className="text-gray-700 text-center flex items-center align-items" >
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
            </div>
            
        </header>
    );
    
}