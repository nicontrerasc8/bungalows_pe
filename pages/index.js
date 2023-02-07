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
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import Carrusel from '../Components/Carrusel'

const WhyGrid = () => {
  return <div className='choose-peru'>
    <h2>
      ¿Por qué elegir al Perú como destino turístico?
    </h2>
    {
      WhyPeru && WhyPeru.map((data,idx) => {
        return <motion.header 
        initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
        key={idx}>
          <article>
            <Carrusel Arr={data.img}/>
          </article>
          <section>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </section>
        </motion.header>
      })
    }
  </div>
}

const ImageData = [
  {
    img: "/ph.jpeg",
    frase: "Encuentra el mejor hospedaje en Punta Hermosa",
    link: "punta-hermosa"
  },
  {
    img: "/back.jpeg",
    frase: "Descubre las maravillas de Oxapampa",
    link: "oxapampa"
  },
  {
    img: "/asia.png",
    frase: "Tu mejor estadía en Asia",
    link: "asia"
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
              Encuentra un hospedaje
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
    <WhyGrid/>
  </>
}
