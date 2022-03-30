import AboutFooter from "../components/about-footer";
import AboutMe from "../components/about-me";
import Footer from "../components/footer";
import Header from "../components/header";
import MyPhoto from "../components/my-photo";
import SkillTile from "../components/skill-tile";
import { SKILLS_DATA } from "../constants/skills_data";
import { REACTJS_SKILL, FLUTTER_SKILL, NODEJS_SKILL, LINUX_SKILL, PYTHON_SKILL } from "../constants/icons";

export default function About(){
    return(
        <>  
            <Header/>

            <div className="width-restrict flex">
                <div className="width-restrict">
                    <div className="flex justify-around flex-wrap mb-8">
                        <MyPhoto/>
                        <AboutMe/>
                    </div>
                
                    <div className="flex flex-wrap">
                        <SkillTile title={SKILLS_DATA[0].title} description={SKILLS_DATA[0].description} icon={REACTJS_SKILL}/> 
                        <SkillTile title={SKILLS_DATA[1].title} description={SKILLS_DATA[1].description} icon={FLUTTER_SKILL}/> 
                        <SkillTile title={SKILLS_DATA[10].title} description={SKILLS_DATA[10].description} icon={PYTHON_SKILL}/>
                    </div>
                </div>
            </div>
            
            <AboutFooter/>
            <Footer/>
            
        </>      
    );
}