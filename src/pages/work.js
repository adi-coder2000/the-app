import Footer from "../components/footer";
import Header from "../components/header";
import WorkTile from "../components/work-tile";

export default function Work(){
    return(
        <>
            <Header/>
            <div className="flex flex-col width-restrict m-auto p-auto">
            <WorkTile imgurl="https://theartsdevelopmentcompany.org.uk/wp-content/uploads/2019/02/Website-Building-Landscape-1280x640.jpg"/>
            <WorkTile imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Homepage.svg/800px-Google_Homepage.svg.png"/>
            <WorkTile imgurl="https://media.bitdegree.org/storage/media/images/2018/11/How-to-Create-A-Website-From-Scratch-The-Beginner’s-Guide.jpg"/>
            <WorkTile imgurl="https://www.dreamhost.com/blog/wp-content/uploads/2018/06/dh-website-builders-6.jpg"/>
            </div>
            
            <Footer/>
        </>      
    );
}