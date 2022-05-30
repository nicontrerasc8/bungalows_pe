import WhatsAppImage from "../public/wa.svg"
import React from 'react'
import Image from "next/image"

const WhatsAppButton = () => {


    return <a rel="noreferrer" target="_blank" className='wa-button' href={'https://wa.me/51998855069'} >
            <Image src={WhatsAppImage} width={80} height={80}/>
        </a>
}

export default WhatsAppButton