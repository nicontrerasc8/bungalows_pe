import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import IG from "../public/instagram.svg"
import FB from "../public/fb.svg"
import YT from "../public/youtube.svg"
import LI from "../public/linkedin.svg"

const Footer = () => {
  return <footer>
       <h3>Síguenos en: </h3>
       <a href='https://www.instagram.com/bungalows_peru/' target='_blank' rel='noreferrer'>
          <Image src={IG} height={60} width={60}/>
       </a>
       <a href='https://www.facebook.com/bungalowsPE' target='_blank' rel='noreferrer'>
          <Image src={FB} height={70} width={70}/>
       </a>
       {/* <a href='https://www.youtube.com/channel/UCyORLTkS5hJmMQleHhW4xug' target='_blank' rel='noreferrer'>
          <Image src={YT} height={70} width={70}/>
       </a>
       <a href='https://www.linkedin.com/company/bungalows-peru/' target='_blank' rel='noreferrer'>
          <Image src={LI} height={60} width={60}/>
       </a> */}
  </footer>
}

export default Footer