const CartWidget = ({carritoLength}) => {
    
    return (
      <div className="cart-widget">
        <button type="button"><img src="/assets/imagenes/carrito-de-compras2.png" alt="Logo" width={50}/></button>
        <span>{carritoLength}</span>
      </div>
    );
  };
  
  export default CartWidget;