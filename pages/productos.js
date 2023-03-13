import React, { useEffect, useState } from 'react'
import UseCartContext from '../lib/context'
import {FaChevronDown, FaChevronUp, FaShoppingCart} from "react-icons/fa"
import toast from 'react-hot-toast'
import Counter from '../Components/Counter'
import Link from 'next/link'

const P = [
  {
    id: 0,
    n: "Black Angus Bisteck Bola de Lomo",
    options: [
      {
        n: "",
        p: 66
      }
    ],
    img: "/oxa-p-1.png"
  },
  {
    id: 1,
    n: "Black angus T-bone",
    options: [
      {
        n: "",
        p: 66
      }
    ],
    img: "/oxa-p-2.png"
  },
  {
    id: 2,
    n: "Black angus asado de tira",
    options: [
      {
        n: "",
        p: 66
      }
    ],
    img: "/oxa-p-3.png"
  },
  {
    id: 10,
    n: "J. Straub Cecina Ahumada ",
    options: [
      {
        n: "250 grs",
        p: 23.1
      },
      {
        n: "500 grs",
        p: 38.5
      },
    ],
    img: "/oxa-p-11.jpg"
  },
  {
    id: 3,
    n: "Queso Oxandino Finas Hierbas Floralp 500 grs",
    options: [
      {
        n: "",
        p: 28
      }
    ],
    img: "/oxa-p-4.jpg"
  },
  {
    id: 4,
    n: "Queso Oxandino Florap 450 grs",
    options: [
      {
        n: "",
        p: 27
      }
    ],
    img: "/oxa-p-5.jpg"
  },
  {
    id: 5,
    n: "Queso fresco floralp 500 grs",
    options: [
      {
        n: "",
        p: 19
      }
    ],
    img: "/oxa-p-6.jpg"
  },
  {
    id: 10,
    n: "D’Calucho Yogurt de Lúcuma 1kg",
    options: [
      {
        n: "",
        p: 9.9
      },
    ],
    img: "/oxa-p-12.jpg"
  },
  {
    id: 7,
    n: "Mantequilla D'Calucho",
    options: [
      {
        n: "240 grs",
        p: 26.5
      },
      {
        n: "450 grs",
        p: 16
      }
    ],
    img: "/oxa-p-8.jpg"
  },
  {
    id: 8,
    n: "El Colono Café molido tradicional premium 500 gr",
    options: [
      {
        n: "",
        p: 48
      },
    ],
    img: "/oxa-p-9.jpg"
  },
  {
    id: 9,
    n: "El Colono Café Expreso 250 gr",
    options: [
      {
        n: "",
        p: 26.5
      },
    ],
    img: "/oxa-p-10.jpg"
  },
  {
    id: 6,
    n: "Miel pura",
    options: [
      {
        n: "500 grs",
        p: 27
      },
      {
        n: "1 kg",
        p: 49
      }
    ],
    img: "/oxa-p-7.jpg"
  },
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

    useEffect(() => {
      if(info.options.length === 1) setSelected(info.options[0])
    }, [info.options, ])
    

  return <article>
  <img src={info.img}/>
  <h3>
  {info.n}
  </h3>
  {
    info.options.length > 1 ? <div className='select'>
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
  : <p>Precio: s/. {Selected.p}</p>
  }
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