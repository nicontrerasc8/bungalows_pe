import { faBars, faCamera, faHome, faLocationArrow, faMapPin, faPlane, faPlaneDeparture, faSearchLocation, faSuitcase, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DropInFromLeft } from '../lib/animations';
import BackDrop from './BackDrop';
import Logo from "../public/favicon.ico"
import LogoWhite from "../public/logo-white.png"
import { useRouter } from 'next/router';

const NavBar = () => {
     
     const [navSolidColor, setNavSolidColor] = useState(false)
     const [OpenNav, setOpenNav] = useState(false);

     const ChangeNavigationValue = () => setOpenNav(!OpenNav)

     const router = useRouter()
     
     const ChangeRoute = (route) => {
          router.push(route)
          setOpenNav(false)
     }

       useEffect(()=>{
          const HandleScroll = () => {
              setNavSolidColor(window.scrollY > 10)
          }
          window.addEventListener("scroll", HandleScroll)
    
          return () => {
              window.removeEventListener("scroll", HandleScroll)
          }
      }, [])

  return <>
      <nav className={navSolidColor ? 'active' : undefined}>
       <Link href={"/"}>
          <a>
               <span className='logo'>
                   <FontAwesomeIcon icon={faSuitcase}/> Bungalows Perú
               </span>
          </a>
       </Link>
     {/* <div className='buttons'>
          <Link href={"/destinos"}>
          <button className={navSolidColor ? 'btn-tertiary' : 'btn-secondary'}>
               <FontAwesomeIcon icon={faSearchLocation}/> Buscar bungalows
          </button>
          </Link>
          <Link href={'/publica'}>
               <button className={navSolidColor ? 'btn-tertiary' : 'btn-secondary'}>
                    <FontAwesomeIcon icon={faHome}/> Publica tu bungalow
               </button>
          </Link>
          <a href='https://mirror-races.myshopify.com/' target='_blank' rel='noreferrer'>
               <button className={navSolidColor ? 'btn-tertiary' : 'btn-secondary'}>
                    Productos
               </button>
          </a>
     </div>
     <div onClick={ChangeNavigationValue} className={OpenNav ? 'hamburger open-nav' : 'hamburger'}>
          <span className='hamburger-1'/>
          <span className='hamburger-2'/>
          <span className='hamburger-3'/>
     </div> */}
  </nav>
 
  <BackDrop onClick={ChangeNavigationValue} isOn={OpenNav}>
          <motion.div className='btn-toggle-nav'
               onClick={(e) => e.stopPropagation()}
               variants={DropInFromLeft}
               initial="hidden"
               animate="visible"
               exit="exit"
          >
                    <button className='btn-primary' onClick={() => ChangeRoute("/destinos")}>
                         <FontAwesomeIcon icon={faSearchLocation}/> Buscar bungalows
                    </button>
                    <button className='btn-secondary' onClick={() => ChangeRoute("/publica")}>
                         <FontAwesomeIcon icon={faHome}/> Publica tu bungalow
                    </button>
               
               <a target={"_blank"} rel='noreferrer' href={'https://www.instagram.com/bungalows_pe/'}>
                    <button className='btn-instagram'>
                         <FontAwesomeIcon icon={faCamera}/> Instagram
                    </button>
               </a>
          </motion.div>
  </BackDrop>
  </>
};

export default NavBar;
