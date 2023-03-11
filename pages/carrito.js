import Link from 'next/link'
import React, { useState } from 'react'
import Counter from '../Components/Counter'
import UseCartContext from '../lib/context'

const CartProduct = ({info}) => {

    const [CounterValue, setCounterValue] = useState(info.c)
    const {Products, setProducts} = UseCartContext()

    const Add = () => {
        const existing = Products.find((p) => p.n === info.n)
        existing.c += 1
        setCounterValue(CounterValue+1)
        setProducts([...Products])
    }

    const Substract = () => {
        const existing = Products.find((p) => p.n === info.n)
        if(existing.c > 1){
            existing.c -= 1
            setCounterValue(CounterValue-1)
            setProducts([...Products])
        }
    }


    return <div>
    <img src={info.img}/>
    <section>
        <strong>{info.n}</strong>
        <span>Precio unitario: s/. {info.p}</span>
        <Counter Count={CounterValue} AddToCounter={Add} SubstractCounter={Substract}/>
        <span>Total: s/. {info.c * info.p}</span>
    </section>
</div>
}

const Carrito = () => {

    const {Products, FinalWhatsAppString, TotalProductsPrice} = UseCartContext()



  return <div className='page'>
    {
        Products.length > 0 ? 
        <div className='carrito'>
            <h2>Carrito de compras</h2>
            {
                Products.map((info, idx) => {
                    return <CartProduct info={info} key={idx}/>
                })
            }
            <p className='total'>Total a pagar: s/. {TotalProductsPrice()}</p>
            <a href={`https://api.whatsapp.com/send?phone=51949161510&text="¡Hola! Vengo de su página web. Mi pedido es el siguiente: ${FinalWhatsAppString}"`}  target={"_blank"} rel="noreferrer">
            <button className="btn-secondary">
                Hacer el pedido
            </button>
            </a>
        </div> : 
        <div className='carrito'>
        <p>Aún no has agregado ningún producto al carrito</p>
        <Link href={"/productos"}>
        <button className='btn-secondary'>
            Buscar productos
        </button>
        </Link>
        </div>
    }
  </div>
}

export default Carrito