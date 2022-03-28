import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
export default function Header() {
    return(
        <header className="h-10 m-12 px-20">
            <div className="container mx-auto max-w-screen-lg h-full">
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
                        <Link className="mx-3 text-xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //LeetCode */}
                        <Link className="mx-3 text-xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //Codeforce */}
                        <Link className="mx-3 text-xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //GitHub */}
                        <Link className="mx-3 text-xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            
        </header>
    );
    
}