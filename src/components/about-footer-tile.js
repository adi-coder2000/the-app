import {FaCode} from "react-icons/fa";
export default function AboutFooterTile(){
    return (
        <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 h-auto w-auto">
            <div  className="text-2xl">
                <FaCode size="4rem"/>
            </div>
            <div className="flex flex-col">
                <div >
                    <h4 className="text-2xl">8,75,000</h4>
                </div>
                <div>
                    <p className="text-xl">
                        LINES OF CODE
                    </p>
                </div>
            </div>
            
        </div>
    );
}