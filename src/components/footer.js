import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
export default function Footer() {
    return(
        <header className="h-10 m-12 px-20">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-items: start items-center text-xl h-full">
                    <div className="text-gray-700 text-center flex items-center align-items" >
                        {/* //LinkedIN */}
                        <Link className="mx-2 text-base" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //LeetCode */}
                        <Link className="mx-2 text-base" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //Codeforce */}
                        <Link className="mx-2 text-base" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //GitHub */}
                        <Link className="mx-2 text-base" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                    </div>
                    <div className="text-gray-700 m-2 text-center flex items-center align-items cursor-pointer">
                        <p className="flex justify-center w-full text-base">ajay sharma</p>
                    </div>
                </div>
            </div>
            
        </header>
    );
    
}