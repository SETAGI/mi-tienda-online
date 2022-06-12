import { useContext } from "react"
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartContext from "../Context/CartContext"
import './CartList.css'

const CartList = () => {
    const {cart, removeItem, clear, totalCost} = useContext(CartContext);
    const total = totalCost();

    if(cart.length === 0 )return (
        <div className="cart-list-no-elements-button">
            <p> No hay items</p>
            <button>
                <Link to={'/'}> volver al inicio </Link>
            </button>
            
        </div>
    )

    return(
        <>
            <div className="cart-list-main-buttons">
                <button onClick={clear}>Delete all items</button>
                <button>
                    <Link to={'/'}> seguir comprando </Link>
                </button> 
            </div>
            <div className="cartList-container">
                {
                    cart.map( item => <Cart  key={item.id} {...item} removeItem={removeItem}/>)
                }
            </div>
            <p className="total-cart-list">Total: ${total}</p>
        </>
    )
}

export default CartList