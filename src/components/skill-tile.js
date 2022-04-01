import { REACTJS_SKILL } from "../constants/icons";
export default function SkillTile(props){
    return (
        <div className="card-effect flex">
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