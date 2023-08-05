import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, image, valor, stock }) => {
          
  return (
    <article className="CardItem2">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src={image} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="info">Precio : ${valor}</p>
        <p className="info">Stock disponible : {stock}</p>
        
      </section>
      
      <footer className="ItemFooter">
        <button className="Option">
          <Link to={`/detalle/${id}`}>Ver detalle</Link>
        </button>
      </footer>
    </article>
  );
 
};

export default Item;
