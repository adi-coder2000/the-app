import {FaReact} from "react-icons/fa";
export default function SkillTile(){
    return (
        <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 mx-4 h-auto w-auto">
            <div  className="text-2xl">
                <FaReact size="4rem"/>
            </div>
            <div className="flex flex-col">
                <div >
                    <h4 className="text-2xl">React.JS</h4>
                </div>
                <div>
                    <p className="text-xl">
                    Ducimus facere vitae sapiente ab sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            
        </div>
    );
}