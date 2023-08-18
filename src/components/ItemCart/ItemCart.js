import React from "react";

const ItemCart = ({ product }) => {
  console.log(product);
  return (
    <div className="itemCart">
      <img src={product.image} alt={product.nombre} />
      <div>
        <p>Titulo : {product.nombre}</p>
        <p>Cantidad : {product.quantity}</p>
        <p>Precio : {product.valor}</p>
        <button>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
