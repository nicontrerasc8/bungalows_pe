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
import GoToOxaCorredores from '../Components/Go-To-OxaCorredores'
import UseCartContext from '../lib/context'
import Head from 'next/head'
import Capitalize from '../capitalize'
import Links from '../Components/Links'
import Recomendations from '../Components/Recomendations'
import MyV from '../Components/MyV'



const Data3 = [
  {
    icon: <FaMountain/>
  },
  {
    icon: <FaUmbrellaBeach/>
  },
  {
    icon: <FaCity/>
  }
]


export default function Home() {

  const [Slide, setSlide] = useState(0)
  const timeout = useRef(null)
  const {Language} = UseCartContext()

  const NextSlide = () => {
    setSlide(Slide => (Slide=== Language.ImageData.length  - 1 ? 0 : Slide+1))
  }
  const PrevSlide = () => setSlide(Slide => (Slide=== 0 ? Language.ImageData.length - 1 : Slide-1))

  useEffect(() => {
    console.log(Language.ImageData.length)
    timeout.current = setTimeout(NextSlide, 9000);

    return function(){
      if(timeout.current) clearTimeout(timeout.current)
    }

  }, [Slide, ])

  return <>
    <MetaTags/>
    <div className='main-bg'>
    <h2>{Language.title}</h2>
    </div>
    <div className='bg'>
      {
        Language && Language.ImageData.map((info,idx) => {
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
          <h2>{Language.head} {info.place}</h2> 
          <Link href={`/destinos/${info.link}`}>
            <button className='btn-primary'>
              {Language.btnHead}
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
    <p className='for-h2'>{Language.whyHead}</p>
    <div className='grid-3'>
      {
        Data3.length && Data3.map((info, idx) => {
          return <motion.article 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          
          key={idx}>
            {info.icon}
            <h4>{Language.whyArr[idx]}</h4>
          </motion.article>
        }) 
      }
    </div>
    <Link href={"/blog/por-que-peru"}>
      <button className='btn-primary'>
        {Language.whyBtn}
      </button>
    </Link>
    </section>
    <div className='bg'>
    <motion.div
          initial={{ x: -100, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          exit={{x: -100}}
          viewport={{ once: true }}
           >
            <article>
            <Image src={"/vacation.jpg"} alt="Bungalows Perú" layout='fill'/>
          </article>
          <section className='bg-sec'>
          <h2>{Language.vacationHead}</h2>
          <p>{Language.vacationP}</p>
          <Link href={"/destinos"}>
            <button className='btn-primary'>
              {Language.vacationBtn}
            </button>
          </Link>
          </section>
          </motion.div>
    </div>
    <Recomendations/>
    <Links/>
    <MyV/>
    <GoToOxaCorredores/>
  </>
}
