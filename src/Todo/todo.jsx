import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '/style.css';

export default function Todo () {

  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [lista, setLista] = useState(listaLocalStorage || []);
  const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [imagem, setImagem] = useState("");
  const [Mensagem, setMensagem] = useState(false);
  const [produto, setProduto] = useState("");
  const [marca, setMarca] = useState("");
  
  useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, { id: id, imagem: imagem, mensagem: mensagem, produto: produto, marca: marca 
    }]);

        setId(id + 1);
        setImagem("");
        setMensagem(true);
        setProduto("");
        setMarca("");

    };

    const remover = (id) => {
    const listaFiltrada = lista.filter((esmal) => esmal.id !== id);
    setLista(listaFiltrada);

    }

    return (
    <div class="container">
    <Link to="/">HOME</Link>
    <h1 class="esmalte">LOJA DE ESMALTES</h1>
    <form onSubmit={salvar}>
  
    <p class="esmalte">PRODUTO:</p>
      <input value={produto} type="text"
      onChange={(e) =>{ setProduto(e.target.value)}}/>

    <p class="esmalte">MARCA:</p>
      <input value={marca} type="text"
      onChange={(e) =>{ setMarca(e.target.value)}}/>

    <p class="esmalte">IMAGEM:</p>
      <input value={imagem} type="text"
      onChange={(e) =>{ setImagem(e.target.value)}}/>
      
    <button className="button-red">ADICIONAR PRODUTO</button>
    </form>
    {lista.map((esmal) => (
    <div class="produto-card" key={esmal.id}>

    <Link to={'/detalhe/${ativ.id}'}>
    <p>{esmal.esmalte}</p>
    </Link>  
    <img src={esmal.imagem} alt="" class="imagem" />
    <p class="esmalte">PRODUTO: {esmal.produto}</p>
    <p class="esmalte">MARCA {esmal.marca}</p>
    <button class="button-red" onClick={() => remover(esmal.id)}>REMOVER</button>
    </div>
      
))}  
</div>                                                                                                                     
); 

}