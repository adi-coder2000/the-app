import { GITHUB_URL, INSTAGRAM_URL, LEETCODE_URL, LINKEDIN_URL } from "../constants/external_urls";
import { GITHUB_HEADER, INSTRAGRAM_HEADER, LEETCODE_HEADER, LINKEDIN_HEADER } from "../constants/icons";

export default function Footer() {
    return(
        <header className="h-10 m-12 px-20">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-items: start items-center text-xl h-full">
                    <div className="text-gray-700 text-center flex items-center align-items" >
                        {/* //LinkedIN */}
                        <a className="mx-2 text-xl" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIN Profile Link">
                            {LINKEDIN_HEADER}
                        </a>
                        {/* //LeetCode */}
                        <a className="mx-2 text-xl" href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Pofile Link">
                            {LEETCODE_HEADER}
                        </a>
                        {/* //GITHUB */}
                        <a className="mx-2 text-xl" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile Link">
                            {GITHUB_HEADER}
                        </a>
                        {/* //GitHub */}
                        <a className="mx-2 text-xl" href={INSTAGRAM_URL}  target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile Link">
                            {INSTRAGRAM_HEADER}
                        </a>
                    </div>
                    <div className="text-gray-700 m-2 text-center flex items-center align-items cursor-pointer">
                        <p className="flex justify-center w-full text-base">ajay sharma</p>
                    </div>
                </div>
            </div>
            
        </header>
    );
    
}