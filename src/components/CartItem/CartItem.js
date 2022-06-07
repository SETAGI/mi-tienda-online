const CartItem = ({title, amount, pictureUrl, price, id, removeItem}) => {

    return (
        <div className='card'>
            <p className='title'> {title} </p>
            <img src={pictureUrl} alt='celular'/>
            <p className='price'> ${price} </p>
            <p> Amount selected : {amount} </p>
            <button onClick={()=> removeItem(id)}> Remove item</button>
        </div>
    )
}

export default CartItem;