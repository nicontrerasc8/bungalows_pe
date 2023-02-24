import React from 'react'
import Carrusel from '../../Components/Carrusel'
import { WhyPeru } from '../../lib/arrays'
import {motion} from "framer-motion"
import MetaTags from '../../Components/MetaTags'

const PorquePeru = () => {
  return <>
  <MetaTags title="¿Por qué elegir al Perú como destino turístico?"/>
  <div className='choose-peru'>
  <h2>
    ¿Por qué elegir al Perú como destino turístico?
  </h2>
  {
    WhyPeru.length && WhyPeru.map((data,idx) => {
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
</>
}

export default PorquePeru