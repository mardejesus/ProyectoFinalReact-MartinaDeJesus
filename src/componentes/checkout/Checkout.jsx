import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../../services/firebase";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, total, clear } = useContext(CartContext)

    const datosComprador = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name && !user.phone) {
            alert('Completa los campos')
        } else {
            let order = {
                user,
                item: cart,
                total: total,
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }

    }
    return (
        <div className="contenedorCheck">
            {orderId !== ''
                ? <div style={{ margin: '50px' }}>
                    <h2>Orden finalizada</h2>
                    <h5>Id de compra: {orderId}</h5>
                    <button className="btn btn-dark"> <Link to='/'><h3>Ver más productos</h3></Link></button>
                </div>
                :
                <div style={{margin:'30px'}}>
                    <h2 style={{margin:'30px'}}>Finalizar compra</h2>

                    <form style={{ display: 'grid', gridTemplateRows: 'repeat(5,1)', gap: '20px', justifyContent: 'center' }} onSubmit={finalizarCompra}>
                        <div className="">
                            <label className="">Nombre Completo:</label>
                            <input onChange={datosComprador} className="" type="text" placeholder="Nombre y apellido" name="name" />
                        </div>
                        <div className="">
                            <label className="">Telefono:</label>
                            <input onChange={datosComprador} className="" type="number" placeholder="5433647777" name="phone" />
                        </div>
                        <div className="">
                            <label className="">Email</label>
                            <input onChange={datosComprador} className="" type="email" placeholder="email@email.com" name="mail" />
                        </div>
                        <div className="">
                            <label className="">Repita su Email</label>
                            <input className="" type="email" placeholder="email@email.com" name="mail" onChange={((e) => setValidateEmail(e.target.value))} />
                        </div>
                        <button className="botonOrden" type="submit" disabled={validateEmail !== user.mail}>Generar orden</button>
                    </form>

                </div>}
        </div>
    )
}

export default Checkout