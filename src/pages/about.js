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

            <div className="container flex justify-aroud mx-auto max-w-screen-lg h-full">

                <div className="mx-4">
                <MyPhoto/>
                </div>
                
                <div className="flex flex-col">
                    <AboutMe/>
                    <div className="flex flex-wrap">
                        
                        <div className="flex flex-row">
                            <SkillTile title={SKILLS_DATA[0].title} description={SKILLS_DATA[0].description} icon={REACTJS_SKILL}/> 
                            <SkillTile title={SKILLS_DATA[1].title} description={SKILLS_DATA[1].description} icon={FLUTTER_SKILL}/> 
                        </div>
                        <div className="flex flex-row">
                            <SkillTile title={SKILLS_DATA[2].title} description={SKILLS_DATA[2].description} icon={NODEJS_SKILL}/> 
                            <SkillTile title={SKILLS_DATA[4].title} description={SKILLS_DATA[4].description} icon={LINUX_SKILL}/> 
                        </div>
                        <div className="flex flex-row">
                            <SkillTile title={SKILLS_DATA[10].title} description={SKILLS_DATA[10].description} icon={PYTHON_SKILL}/> 
                        </div>
                        </div>
                    {/* 

                    <div className="flex flex-row">
                        <SkillTile/>
                        <SkillTile/>
                    </div>

                    <div className="flex flex-row">
                        <SkillTile/>
                        <SkillTile/>
                    </div>                   */}
                </div>
                
            </div>
            
            <AboutFooter/>
            <Footer/>
            
        </>      
    );
}