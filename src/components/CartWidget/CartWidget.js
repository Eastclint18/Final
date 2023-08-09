import carrito from "./recursos/3144456.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "" }}
    >
      <img className="Carrito" src={carrito} alt="cart-widget" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
