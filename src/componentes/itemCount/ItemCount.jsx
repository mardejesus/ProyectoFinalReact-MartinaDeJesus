import React, { useState } from "react";
import './ItemCount.css'


const ItemCount = ({stock, inicial, onAdd})=>{

    let [cantidad, setCantidad] = useState(inicial)

    function incrementar (){
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }

    function decrementar(){
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className='Contador'>
            <div className="Controles">
                <button className="btn btn-primary" onClick={decrementar}>-</button>
                <p className="Numero">{cantidad}</p>
                <button className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={()=>onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button> 
                {/* Ejecuta la funcion recibida por props y se pasa como argumento la cantidad del estado solo si hay stock disponible. */}
            </div>
        </div>

    )

}

export default ItemCount