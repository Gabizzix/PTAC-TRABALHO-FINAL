import React from "react";
import {Link} from "react-router-dom";
import Header from "./Componentes/header";
import Card from "./Componentes/card";

export default function Destaque(){
    const listavideo = JSON.parse(localStorage.getItem ("Lista")).slice(-4);
    const destaqueapp = listavideo.slice(-4)

    return (
    <div>
    <Header/>
    <h2 class="destaques">Videos Preferidos</h2>
    <Card listavideo ={destaqueapp}/>

</div>
);
}