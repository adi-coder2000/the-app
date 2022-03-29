import { INSTAGRAM_URL, LINKEDIN_URL } from "../constants/external_urls";
import { INSTRAGRAM_CFI, LINKEDIN_CFI } from "../constants/icons";
export default function ContactIconsBox(){
    return(
        <div className="m-auto">
            <div className="flex flex-col justify-around bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30rem] h-full">
                <div className="flex mt-4 mb-8">
                    <h2 className="text-center text-[4rem] m-auto">
                        CONTACT
                    </h2>
                </div>
                <div className="">
                <h2 className="text-center text-[2rem] m-auto">
                    WANNA SAY SOMETHING?
                </h2>
                </div>
                <div className="m-3">
                <h3 className="text-center text-[1rem] m-auto">
                As a freelancer, i'm available for new projects and collaborations
                </h3>
                </div>

                <div className="flex flex-wrap mx-auto">
                <div className="text-gray-700 text-center flex items-center align-items" >
                    <a className="mx-3 text-xl" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIN Profile Link">
                        {LINKEDIN_CFI}
                    </a>

                    <a className="mx-3 text-xl" href={INSTAGRAM_URL}  target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile Link">
                        {INSTRAGRAM_CFI}
                    </a>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
}