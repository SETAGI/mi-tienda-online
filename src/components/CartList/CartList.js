import { useContext } from "react"
import CartItem from "../CartItem/CartItem";
import CartContext from "../Context/CartContext"
import './CartList.css'

const CartList = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
    return(
        <>
          {
           (cart.length > 0) && <button onClick={clear}>Delete all items</button>
          }  
            <div className="cartList-container">
                {
                    cart.map( item => <CartItem  key={item.id} {...item} removeItem={removeItem}/>)
                }
            </div>
        </>
    )
}

export default CartList