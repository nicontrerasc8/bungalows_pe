import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import IG from "../public/ig.svg"
import FB from "../public/fb.svg"

const Footer = () => {
  return <footer>
       <h3>Síguenos en: </h3>
       <a href='https://www.instagram.com/bungalows_peru/' target='_blank' rel='noreferrer'>
          <Image src={IG} height={80} width={80}/>
       </a>
       <a href='https://www.facebook.com/bungalowsPE' target='_blank' rel='noreferrer'>
          <Image src={FB} height={70} width={70}/>
       </a>
  </footer>
}

export default Footer