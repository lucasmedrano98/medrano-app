import { Link } from "react-router-dom";

const CartWidget = () => {
    
    return (
      <div className="cart-widget">
        <Link to={`/cart`}><img src="/assets/imagenes/carrito-de-compras2.png" alt="Logo" width={50}/></Link>
      </div>
    );
  };
  
  export default CartWidget;