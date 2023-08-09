import "./ItemDetail.css";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nombre, image, valor, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      nombre,
      valor,
    };
    addItem(item, quantity);
  };

  return (
    <article className="CardItemDetalle">
      <header className="HeaderDetalle">
        <picture>
          <img src={image} alt={nombre} className="ItemImg" />
        </picture>
      </header>
      <section className="informacion">
        <h2 className="ItemHeadercentrado">{nombre}</h2>
        <p className="info">Precio : {valor}</p>
        <p className="info">Stock disponible : {stock}</p>
        <p className="parrafo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          quam at tellus ullamcorper, et cursus ante feugiat. Nam euismod, velit
          id posuere dignissim, tortor mauris malesuada dui, at consequat arcu
          arcu ac augue. Nullam nec dui quam. Ut scelerisque orci ut tellus
          fermentum feugiat.
        </p>
        <ItemCount
            initial={1}
            stock = {stock}
            onAdd={(quantity) => handleOnAdd(quantity)}
          />

        <footer className="ItemFooter">
         
        
        </footer>
      </section>
    </article>
  );
};

export default ItemDetail;
