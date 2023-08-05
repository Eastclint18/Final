import "./ItemDetail.css";

const ItemDetail = ({ nombre, image, valor, stock }) => {
  return (
    <article className="CardItemDetalle">
      <header className="HeaderDetalle">
        <h2 className="ItemHeadercentrado">{nombre}</h2>

        <picture>
          <img src={image} alt={nombre} className="ItemImg" />
        </picture>
      </header>
      <section className="informacion">
        <p className="info">Precio : {valor}</p>
        <p className="info">Stock disponible : {stock}</p>
        <p className="parrafo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          quam at tellus ullamcorper, et cursus ante feugiat. Nam euismod, velit
          id posuere dignissim, tortor mauris malesuada dui, at consequat arcu
          arcu ac augue. Nullam nec dui quam. Ut scelerisque orci ut tellus
          fermentum feugiat. 
        </p>

        <footer className="ItemFooter">
          <button type="button" className="botoncentrado">
            Agregar al Carrito
          </button>
        </footer>
      </section>
    </article>
  );
};

export default ItemDetail;
