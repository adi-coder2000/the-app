import { REACTJS_SKILL } from "../constants/icons";
export default function SkillTile(props){
    return (
        <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 mx-4 h-auto w-auto">
            <div  className="text-2xl">
                {props.icon}
            </div>
            <div className="flex flex-col">
                <div >
                    <h4 className="text-lg">{props.title}</h4>
                </div>
                <div>
                    <p className="text-base">
                    {props.description}
                    </p>
                </div>
            </div>
            
        </div>
    );
}