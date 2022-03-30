import {FaCode} from "react-icons/fa";
export default function AboutFooterTile(){
    return (
        <div className="card-effect flex m-4">
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