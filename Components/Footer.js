import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect } from 'react'
import IG from "../public/instagram.svg"
import FB from "../public/fb.svg"
import YT from "../public/youtube.svg"
import LI from "../public/linkedin.svg"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import UseCartContext from '../lib/context'

const Footer = () => {
   const {Language} = UseCartContext()

   useEffect(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.log(err);
      }
    }, []);

  return <footer>
       <h3>{Language.follow} </h3>
       <a href='https://www.instagram.com/bungalows_peru/' target='_blank' rel='noreferrer'>
          <FaInstagram/>
       </a>
       <a href='https://www.facebook.com/bungalowsPE' target='_blank' rel='noreferrer'>
          <FaFacebook/>
       </a>
       <a href='https://www.youtube.com/channel/UCyORLTkS5hJmMQleHhW4xug' target='_blank' rel='noreferrer'>
          <FaYoutube/>
       </a>
       <a href='https://www.linkedin.com/company/bungalows-peru/' target='_blank' rel='noreferrer'>
          <FaLinkedin/>
       </a>
  </footer>
}

export default Footer