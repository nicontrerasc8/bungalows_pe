import React from 'react'
import {motion} from "framer-motion"

const GoToOxaCorredores = () => {
  return <motion.div
        className='go-to-oxacorredores'
    >
        <h3>¿Estás buscando un terreno en Oxapampa? Podemos ayudarte</h3>
        <a href='https://oxacorredores.com/' rel='noreferrer' target={"_blank"}>
            <button className='btn-primary'>
                Visitar OxaCorredores
            </button>
        </a>
    </motion.div>
}

export default GoToOxaCorredores