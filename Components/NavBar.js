import { faBars, faCamera, faHome, faLocationArrow, faMapPin, faPlane, faPlaneDeparture, faSearchLocation, faSuitcase, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DropInFromLeft } from '../lib/animations';
import BackDrop from './BackDrop';
import { useRouter } from 'next/router';
import { FaBlog, FaBook, FaHome, FaPlane, FaPlaneDeparture, FaShoppingBag, FaShoppingCart, FaUmbrellaBeach, FaWarehouse } from 'react-icons/fa';
import UseCartContext from '../lib/context';

const NavBar = () => {
     
     const [navSolidColor, setNavSolidColor] = useState(false)
     const [OpenNav, setOpenNav] = useState(false);
     const {ChangeLanguage, Language, ProductsCount} = UseCartContext()

     const ChangeNavigationValue = () => setOpenNav(!OpenNav)

     const router = useRouter()

     const ChangeLang = (e) => {
          ChangeLanguage(e)
          ChangeNavigationValue()
     }
     
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
               <span className='logo'>
                   <article>
                    <Image src={"/logo.png"} layout="fill" fill/>
                    </article> 
                    <strong>
                         Bungalows Perú
                    </strong>
               </span>
       </Link>
       <div className='buttons'>
       <Link href={"/destinos"}>
          <button className="btn-primary">
               <FaHome/> {Language.navBtn1}
          </button>
          </Link>
          <Link href={"/blog"}>
          <button className="btn-secondary">
               <FaPlaneDeparture/> {Language.navBtn2}
          </button>
          </Link>
          <Link href={"/productos"}>
               <button className='btn-secondary'>
                    <FaShoppingBag/> {Language.navBtn3}
               </button>
          </Link> 
          {
               ProductsCount() ?
               <Link href={"/productos"}>
               <button className='btn-tertiary cart-btn'>
                    <FaShoppingCart/>  &#40;{ProductsCount()}&#41;
               </button>
          </Link> : ""
          } 
          <button className='btn-tertiary' onClick={() => ChangeLanguage(1)}>
               <Image src={"/spain.png"} height={45} width={45}/>
          </button>
          <button className='btn-tertiary' onClick={() => ChangeLanguage(2)}>
          <Image src={"/uk.png"} height={45} width={45}/>
          </button>
       </div>
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
     </div>*/}
     <div onClick={ChangeNavigationValue} className={OpenNav ? 'hamburger open-nav' : 'hamburger'}>
          <span className='hamburger-1'/>
          <span className='hamburger-2'/>
          <span className='hamburger-3'/>
     </div> 
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
                    {Language.navBtn1}
                    </button>
                    <button className='btn-secondary' onClick={() => ChangeRoute("/blog")}>
                    {Language.navBtn2}
                    </button>
                    <button className='btn-secondary' onClick={() => ChangeRoute("/productos")}>
                    {Language.navBtn3}
                    </button> 
                    {
               ProductsCount() ?
               <button className='btn-tertiary cart-btn' onClick={() => ChangeRoute("/carrito")}>
                    <FaShoppingCart/> &#40;{ProductsCount()}&#41;
               </button>: ""
          } 
               <a target={"_blank"} rel='noreferrer' href={'https://www.instagram.com/bungalows_peru/'}>
                    <button className='btn-instagram'>
                         <FontAwesomeIcon icon={faCamera}/> Instagram
                    </button>
               </a>
               <div>
                    <button className='btn-tertiary' onClick={() => ChangeLang(1)}>
                    <Image src={"/spain.png"} height={45} width={45}/>
                    </button>
                    <button className='btn-tertiary' onClick={() => ChangeLang(2)}>
                    <Image src={"/uk.png"} height={45} width={45}/>
                    </button>
                    </div>
          </motion.div>
  </BackDrop>
  </>
};

export default NavBar;
