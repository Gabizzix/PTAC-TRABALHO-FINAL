import { useParams } from "react-router-dom";
import Header from "./Componentes/header";
export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));

    const video = lista.filter((objeto) => {
    if(objeto.id == id){
    return objeto;
}
    return null;

})

    return( 
    video.map((video)=>
    <div>
    <Header/>
    <div className="cardee">
    <iframe
        width="250"
        height="250"
        src={ 
                "https://www.youtube.com/embed/" + video.linkvideo.slice(17)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
                </iframe>
                <p class="letra">{video.video}</p>
                <p class="letra">{video.youtuber}</p>
                <p class="letra">{video.visualizacao}</p>
                <p class="letra">{video.curtidas}</p>
          </div>
      </div>

));
}