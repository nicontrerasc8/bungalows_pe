import React, { useEffect, useState } from 'react'
import UseCartContext from '../lib/context'
import {FaChevronDown, FaChevronUp, FaShoppingCart} from "react-icons/fa"
import toast from 'react-hot-toast'
import Counter from '../Components/Counter'
import Link from 'next/link'

const P = [
  {
    id: 0,
    n: "Café Villarica",
    options: [
      {
        n: "100 gr",
        p: 20
      },
      {
        n: "200 gr",
        p: 30
      },
      {
        n: "400 gr",
        p: 50
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/uploads%2F1643038318481.4fdb0b6-e13d-f855-0aa-ba74aee4ac41?alt=media&token=14dda3dc-b251-4ff1-ac3f-c68348b0ade4"
  }
]

const Product = ({info}) => {

  const [Selected, setSelected] = useState("Elije una opción")
  const {AddToCart, ProductsCount} = UseCartContext()
  const [CountI, setCountI] = useState(1)
  const [Show, setShow] = useState(false)
    
  const ChangeFN = (cat) => {
      setShow(false)
      setSelected(cat)
  }

  const Add = () => setCountI(CountI+1)
  const Substract = () => {
    if (CountI > 1) setCountI(CountI-1)
  }
    const Confirm = () => {
      if(Selected === "Elije una opción") {
        toast.error("Elije una opción")
        return
      }
      AddToCart({
        n: `${info.n} - ${Selected.n}`,
        p: Selected.p,
        img: info.img,
        c: CountI
      })
    }

  return <article>
  <img src={info.img}/>
  <h3>
  {info.n}
  </h3>
  <div className='select'>
  <button className='btn-primary' onClick={() => setShow(!Show)}>
       {Selected.n ? `${Selected.n} - s/.${Selected.p}` : Selected}
       {
          Show ? <FaChevronUp/> : <FaChevronDown/>
        }
      </button>
      {
        Show && info.options.length && info.options.map((data, idx) => {
         if(Selected != info) return <button key={idx} className='btn-primary' onClick={() => ChangeFN(data)}>
            {data.n} - s/.{data.p}
          </button>
        })
      }
</div>
<Counter Count={CountI} AddToCounter={Add} SubstractCounter={Substract}/>
<button className='btn-primary' onClick={Confirm}>
  Comprar
</button>
</article>
}

const Productos = () => {

  const {ProductsCount} = UseCartContext()

  return <div className='page cart'>
    <h2>Nuestros productos</h2>
    {
      ProductsCount() ? <Link href={"/carrito"}>
      <button className='btn-secondary cart'>
        <FaShoppingCart/> Ir al carrito &#40;{ProductsCount()}&#41;
      </button>
    </Link> : ""
    }
    <section>
      {
        P.length && P.map((info, idx) => {
          return <Product info={info} key={idx}/>
        })
      }
    </section>
  </div>
}

export default Productos