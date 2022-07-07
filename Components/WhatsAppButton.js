import WhatsAppImage from "../public/wa.svg"
import React, { useEffect, useState } from 'react'
import Image from "next/image"

const WhatsAppButton = () => {

    const [Size, setSize] = useState(80)

    const ResizeBtn = () => {
        if(window.innerWidth > window.innerHeight)
        setSize(window.innerWidth/18)
        else setSize(window.innerHeight/16)
    }

    useEffect(() => {
      window.addEventListener("resize", ResizeBtn)
      return 0
    }, [])
    


    return <a rel="noreferrer" target="_blank" className='wa-button' href={'https://wa.me/51998855069'} >
            <Image src={WhatsAppImage} width={Size} height={Size}/>
        </a>
}

export default WhatsAppButton