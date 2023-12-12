import { Link } from "react-router-dom";
export default function Card({listavideo}){
return(

        listinhamusic.map((videos) => (
        <div className="carde">
        <div class="produto-carde" key={videozinho.id}>
             
        <Link to={`/detalhe/${videos.id}`}>
        <p class="letra">Vídeo: {videozinho.video}</p>
        </Link>  
            
        <iframe
        width="250"
        height="250"
        src={ "https://www.youtube.com/embed/" + videos.linkvideo.slice(17)}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
</iframe>
</div>
</div>
)) 
)};