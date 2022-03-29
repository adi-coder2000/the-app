export default function WorkTile(props){
    return(
        <>
            <div className="my-8">
            <figure class="snip1136 navy">
            <img className="h-auto w-full" src={props.imgurl}/>
            <figcaption>
            <div>
            <h2>GOOGLE <span> CLONE</span></h2>
            </div>
            <div>
            <p>This project is clone of Google search engine. It uses latest technologies like ReactJS, Firebase, TailwindCSS, etc<br/>
            <i></i>ClICK TO VIEW LIVE PREVIEW</p>
            
            </div><a href="https://www.google.com"></a>
            </figcaption>
            </figure>


            </div>
        </>
    );
}