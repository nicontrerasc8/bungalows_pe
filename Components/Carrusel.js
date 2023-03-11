import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

const Carrusel = ({Arr}) => {

    const [Slide, setSlide] = useState(0)
  const SlidesLength = Arr.length
  const timeout = useRef(null)
  const NextSlide = () => {
    setSlide(Slide => (Slide=== SlidesLength - 1 ? 0 : Slide+1))
  }

  useEffect(() => {

    if(SlidesLength > 1){
        timeout.current = setTimeout(NextSlide, 9000);

        return function(){
        if(timeout.current) clearTimeout(timeout.current)
        }
    }

  }, [Slide, SlidesLength])

  return  (
    Arr.length && Arr.map((info,idx) => {
      if(idx === Slide)return <Image src={info} key={idx} alt="Bungalows Perú" layout='fill'/>
    }) 
  )
}

export default Carrusel