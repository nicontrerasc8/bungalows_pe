import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { DropInFromLeft } from '../lib/animations'
import UseCartContext from '../lib/context'

const ArrOfRecomendations = [
    {
        r: "Esta plataforma me encanta ¡Puedo elegir entre varios destinos y reservar con unos clics!",
        p: "Esteban Rodríguez"
    },
    {
        r: "Tuvimos unas vaciones muy relajantes. Recomiendo mucho este servicio de alquiler.",
        p: "Luis Pérez"
    },
    {
        r: "Muy contentas por todo el servicio brindado por Bungalows Perú. Volveremos pronto.",
        p: "Isabel Peña"
    },
]

const Recomendations = () => {

    const [Slide, setSlide] = useState(0)
  const SlidesLength = 3
  const {Language} = UseCartContext()
  const timeout = useRef(null)

  useEffect(() => {
    const NextSlide = () => {
      setSlide(Slide => (Slide=== SlidesLength - 1 ? 0 : Slide+1))
    }
    timeout.current = setTimeout(NextSlide, 8000);

    return function(){
      if(timeout.current) clearTimeout(timeout.current)
    }

  }, [Slide, SlidesLength])

  return <div className='section recomendations'>
    <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
    >
        {
            Language.recomendations.length && Language.recomendations.map((data, idx) => {
                if(Slide === idx) return <motion.article key={idx}
                variants={DropInFromLeft} initial="hidden"
            animate="visible"
            exit="exit"
                >
                    <h3>&#8220;{data.r}&#8221;</h3>
              <span>{data.p}</span>
                </motion.article>
            })
        }
    </AnimatePresence>
  </div>
}

export default Recomendations