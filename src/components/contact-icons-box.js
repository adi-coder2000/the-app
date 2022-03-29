import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
export default function ContactIconsBox(){
    return(
        <div className="">
            <div className="flex flex-col justify-around bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 h-full">
            <div className="flex mx-auto">
                <h2 className="text-2xl">
                    CONTACT
                </h2>
                </div>
                <div className="flex mx-auto">
                <h2 className="text-2xl">
                    WANNA SAY SOMETHING?
                </h2>
                </div>
                <div className="mx-4">
                <h3 className="text-xl">
                As a freelancer, i'm available for new projects and collaborations
                </h3>
                </div>

                <div className="flex mx-auto">
                <div className="text-gray-700 text-center flex items-center align-items" >
                        {/* //LinkedIN */}
                        <Link className="mx-3 text-2xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //LeetCode */}
                        <Link className="mx-3 text-2xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //Codeforce */}
                        <Link className="mx-3 text-2xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                        {/* //GitHub */}
                        <Link className="mx-3 text-2xl" to={ROUTES.WORK} aria-label="Dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </Link>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
}