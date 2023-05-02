import React from 'react'
import UseCartContext from '../lib/context'
import {motion} from "framer-motion"

const MyV = () => {
    const {Language} = UseCartContext()

    return <>
      <div className='m-y-v'>
      <motion.article
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Nuestra misión</h3>
        <p>Promover el turismo vivencial y auténtico en el Perú, brindando una experiencia turística única, a través de la oferta de alojamiento en bungalows, que permita a nuestros clientes conocer la cultura y tradiciones locales, interactuar con las comunidades locales, disfrutar de la naturaleza, la gastronomía peruana, realizar actividades de aventura y apoyar a los productores y negocios locales a través de nuestra plataforma.</p>
      </motion.article>
      <motion.article
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Nuestra visión</h3>
        <p>Promover el turismo vivencial y auténtico en el Perú, brindando una experiencia turística única, a través de la oferta de alojamiento en bungalows, que permita a nuestros clientes conocer la cultura y tradiciones locales, interactuar con las comunidades locales, disfrutar de la naturaleza, la gastronomía peruana, realizar actividades de aventura y apoyar a los productores y negocios locales a través de nuestra plataforma.</p>
      </motion.article>
    </div>
    </>
}

export default MyV