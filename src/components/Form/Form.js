import { useContext, useState } from "react"
import { useForm } from 'react-hook-form'
import { addDoc, collection } from 'firebase/firestore'
import { db, collectionsName } from "../../services/firebase";
import CartContext from "../Context/CartContext"
import './Form.css'
import { Link } from "react-router-dom";

const Form = () => {
    const {cart, totalCost, clear} = useContext(CartContext);
    const total = totalCost();
    const {register, handleSubmit} = useForm();
    const [ chekckout, setCheckout] = useState(false)
    const [ orderId, setOrderId] = useState();

    const createOrder = ( {fullName, phone, email} ) => {
        const order = {
            buyer:{
                name: fullName,
                phone: phone,
                email: email
            },
            items:cart,
            total: total
        }
        console.log(order)
        const collectionRef = collection( db, collectionsName.orders)
        addDoc(collectionRef, order).then(({ id } )=> {
            setOrderId(id)
        })
        setCheckout(true);
    }

    if(chekckout) return (
        <div className="order">
            <h2> ID de su orden</h2>
            <p> {orderId} </p>
            <button onClick={clear}> 
                <Link to={'/'}> Volver al inicio </Link>
            </button>
        </div>
    )

    return (
        <>
            <h2>Por favor ingrese los datos del comprador: </h2>
            <form className="form" onSubmit={handleSubmit(createOrder)}>
                <label className="label">
                    Nombre completo:
                    <input className="input" {...register('fullName')} />
                </label>
                <label className="label">
                    Teléfono:
                    <input className="input" {...register('phone')}/>
                </label>
                <label className="label">
                    Correo electrónico:
                    <input className="input" {...register('email')}/>
                </label>
                <input type='submit' value='submit'/>
            </form>
        </>
    )
}

export default Form;