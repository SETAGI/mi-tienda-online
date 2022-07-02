import { useContext, useState } from "react"
import { useForm } from 'react-hook-form'
import { 
    addDoc, 
    collection,
    writeBatch } from 'firebase/firestore'
import { db, collectionsName } from "../../services/firebase";
import CartContext from "../Context/CartContext"
import './Form.css'
import { Link } from "react-router-dom";
import { getProductsById } from "../../services/firebase/firestore";

const Form = () => {
    const {cart, totalCost, clear} = useContext(CartContext);
    const total = totalCost();
    const {register, handleSubmit, formState} = useForm({mode:'onChange'});
    const [ chekckout, setCheckout] = useState(false)
    const [noStock, setNoStock] = useState(false)
    const [ orderId, setOrderId] = useState();

    const createOrder = async ( {fullName, phone, email} ) => {
        const order = {
            buyer:{
                name: fullName,
                phone: phone,
                email: email
            },
            items:cart,
            total: total
        }

        const outOfStock = []
        const ids = cart.map( prod => prod.id )

        const batch = writeBatch(db)
        const products = await getProductsById( ids )
        products.docs.forEach( async doc => {
            const dataDoc = doc.data()
            const prodAmount = cart.find( prod => prod.id === doc.id )?.amount
            if( dataDoc.stock >= prodAmount ) batch.update(doc.ref, {stock: dataDoc.stock - prodAmount})
            else outOfStock.push({id: doc.id})
        })

        if(outOfStock.length === 0) {
            const collectionRef = collection( db, collectionsName.orders)
            addDoc(collectionRef, order).then(({ id } ) => {
                batch.commit()
                setOrderId(id)
            })
            setCheckout(true);
        } else {
            setNoStock(true)
        }
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

    if(noStock) return (
        <div className="order">
            <h2>No hay stock suficiente para finalizar su compra</h2>
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
                    <input 
                        className="input" 
                        {...register('fullName', { required: true })} />
                </label>
                <label className="label">
                    Teléfono:
                    <input 
                        className="input" 
                        {...register('phone', { required: true })}
                        type='number'
                        />
                </label>
                <label className="label">
                    Correo electrónico:
                    <input 
                        className="input" 
                        {...register('email', { 
                            required: true, 
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            }
                        })}
                        type='email'
                    />
                </label>
                <input 
                    type='submit' 
                    value='submit'
                    disabled={!formState.isValid}
                />
            </form>
        </>
    )
}

export default Form;