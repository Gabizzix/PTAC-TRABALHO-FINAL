import {Link} from "react-router-dom";
import Header from "/Componentes/header";
import Card from "/Componentes/card";
import Destaque from "/Destaque";

export default function Home(){
    const listinhamusic = JSON.parse(localStorage.getItem ("Lista")) || [];

    return (
        <div>
        <Header/>
        <Card listinhamusic ={listinhamusic}/>
            
</div>
);
}