import ContactIconsBox from "../components/contact-icons-box";
import Footer from "../components/footer";
import Form from "../components/form";
import Header from "../components/header";

export default function Contact(){
    return(
        <div>
            <Header/>
            <div className="container flex justify-around mx-auto max-w-screen-lg h-full my-28">
                <ContactIconsBox/>
                <Form/>
            </div>
            <Footer/>
        </div>      
    );
}