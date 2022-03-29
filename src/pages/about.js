import AboutFooter from "../components/about-footer";
import AboutMe from "../components/about-me";
import Footer from "../components/footer";
import Header from "../components/header";
import MyPhoto from "../components/my-photo";
import SkillTile from "../components/skill-tile";

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
                    <div className="flex flex-row">
                        <SkillTile/>
                        <SkillTile/>
                    </div>

                    <div className="flex flex-row">
                        <SkillTile/>
                        <SkillTile/>
                    </div>

                    <div className="flex flex-row">
                        <SkillTile/>
                        <SkillTile/>
                    </div>                  
                </div>
                
            </div>
            
            <AboutFooter/>
            <Footer/>
            
        </>      
    );
}