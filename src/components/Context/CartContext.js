import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = itemToAdd => {
        if(!isInCart( itemToAdd.id )) setCart([ ...cart, itemToAdd ]) 
        else {
            const newCart = cart.map( item => 
                item.id === itemToAdd.id 
                    ? {...item, amount: (item.amount + itemToAdd.amount) } 
                    : item
            )
            setCart(newCart);
        }
    }

    const totalAmount = () => {
        let acc = 0;
        cart.forEach( item => acc += item.amount )
        return acc;        
    }

    const isInCart = (id) => {
        return cart.find( item => item.id === id) ? true : false;
    }

    const clear = () => setCart([]);

    const removeItem = (id) => {
        setCart( cart.filter(item => item.id !== id))
    }

    const totalCost = () => {
        let acc = 0;
        cart.forEach( item => acc+= (item.price * item.amount))
        return acc;
    }

    return(
        <CartContext.Provider value= {{ cart, addToCart, totalAmount, isInCart, clear, removeItem, totalCost}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;