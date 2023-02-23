import { faHome, faSearch, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Gmail from '../Components/Gmail'
import MetaTags from '../Components/MetaTags'
import {DropInFromLeft} from "../lib/animations"
import { WhyPeru } from '../lib/arrays'
import {FaChevronLeft, FaChevronRight, FaCity, FaMountain, FaUmbrellaBeach} from "react-icons/fa"
import Carrusel from '../Components/Carrusel'



const ImageData = [
  {
    img: "/ph.jpeg",
    frase: "Hospedajes en Punta Hermosa",
    link: "punta-hermosa"
  },
  {
    img: "/back.jpeg",
    frase: "Hospedajes en Oxapampa",
    link: "oxapampa"
  },
  {
    img: "/asia.png",
    frase: "Hospedajes en Asia",
    link: "asia"
  }
]

const Data3 = [
  {
    title: "Descubrir nuevos lugares",
    icon: <FaMountain/>
  },
  {
    title: "Unas vacaciones para relajarse.",
    icon: <FaUmbrellaBeach/>
  },
  {
    title: "Salir de la ciudad y la rutina",
    icon: <FaCity/>
  }
]


export default function Home() {

  const [Slide, setSlide] = useState(0)
  const SlidesLength = ImageData.length
  const timeout = useRef(null)
  const NextSlide = () => {
    setSlide(Slide => (Slide=== SlidesLength - 1 ? 0 : Slide+1))
  }
  const PrevSlide = () => setSlide(Slide => (Slide=== 0 ? SlidesLength - 1 : Slide-1))

  useEffect(() => {
    timeout.current = setTimeout(NextSlide, 9000);

    return function(){
      if(timeout.current) clearTimeout(timeout.current)
    }

  }, [Slide, SlidesLength])

  return <>
    <MetaTags/>
    <div className='main-bg'>
    <h2>Te damos <span className='red'>alojamiento</span> para que descubras el <span className='red'>Perú</span></h2>
    </div>
    <div className='bg'>
      {
        ImageData.length && ImageData.map((info,idx) => {
          if(idx === Slide)return <motion.div
          initial={{ x: -100, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          exit={{x: -100}}
          viewport={{ once: true }}
           key={idx}>
            <article>
            <Image src={info.img} alt="Bungalows Perú" layout='fill'/>
          </article>
          <section className='bg-sec'>
          <h2>{info.frase}</h2> 
          <Link href={`/destinos/${info.link}`}>
            <button className='btn-primary'>
              Encuentra un alojamiento
            </button>
          </Link> 
          </section>
          </motion.div>
        }) 
      }
      <section className='btns'>
      <button onClick={PrevSlide}>
        <FaChevronLeft/>
      </button>
      <button onClick={PrevSlide}>
        <FaChevronRight/>
      </button>
      </section>
    </div>
    <section className='for'>
    <p className='for-h2'>Tenemos el hospedaje apropiado para todos aquellos que buscan</p>
    <div className='grid-3'>
      {
        Data3.length && Data3.map((info, idx) => {
          return <motion.article 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          
          key={idx}>
            {info.icon}
            <h4>{info.title}</h4>
          </motion.article>
        }) 
      }
    </div>
    <Link href={"/blog/por-que-peru"}>
      <button className='btn-primary'>
        ¿Por qué elegir Perú?
      </button>
    </Link>
    </section>
  </>
}
