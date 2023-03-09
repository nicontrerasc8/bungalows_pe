import React, { useEffect, useState } from 'react'
import Carrusel from '../../Components/Carrusel'
import { BlogArr, WhyPeru } from '../../lib/arrays'
import {motion} from "framer-motion"
import MetaTags from '../../Components/MetaTags'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

const OxaHaus = () => {


  const [OtherArticles, setOtherArticles] = useState([])

    useEffect(() => {
      var arr = []
      for (let i = 0; i < 3; i++) {
        var Article 
        do {
          var is = false
          Article = BlogArr[Math.floor(Math.random() * BlogArr.length)]
          is = (Article.link === "oxahaus" || arr.includes(Article))
        } while (is);
        arr.push(Article)
      }
      setOtherArticles(arr)
    }, [Array, ])

  return <>
  <MetaTags title="OxaHaus, un rincón de Oxapampa en Lima"/>
  <div className='blog-article top7rem'>
        <h1>OxaHaus, un rincón de Oxapampa en Lima</h1>
        <span>Escrito por: Cristóbal Espejo</span>
        <img src={"/oxahaus.jpeg"} alt="Bungalows Perú"/>
        <p>OxaHaus es una tienda de productos traídos de Oxapampa en Lima. En las calles de la Molina, resalta mucho por su diseño, que tiene la arquitectura de la cultura austro alemana. Apenas entres a la tienda, sentirás que has viajado al mismo Oxapampa.</p>
        <div className='imgs-blog'>
        <img src={"/oxahaus-2.jpg"} alt="Bungalows Perú"/>
        <img src={"/oxahaus-3.jpg"} alt="Bungalows Perú"/>
        <img src={"/oxahaus-4.jpg"} alt="Bungalows Perú"/>
        </div>
        <h3>Productos de calidad</h3>
        <p>Aquí podrás conseguir las mejores carnes premium, chorizos, cecina, cerdo y cordero. También productos naturales traídos de Oxapampa, como miel, polen, café, quesos, yogures, leche natural, chocolate y cervezas artesanales. </p>
        <a href='https://www.oxahaus.com/' target={"_blank"} rel="noreferrer" className='oxahaus-btn'>
            <button className='btn-primary'>
                <FontAwesomeIcon icon={faStore}/> Visitar la página web
            </button>
        </a>
        <p>La tienda está ubicada en Jirón Samoa 382, La Molina.</p>
        <iframe style={{marginTop: "2vh + 10px"}} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.886337062216!2d-77.00119678518675!3d-12.119928791418575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7fd1ffc0dff%3A0x1993b73acb9737cd!2sOxaHaus!5e0!3m2!1ses-419!2spe!4v1677703545935!5m2!1ses-419!2spe'/>
     </div>
<div className="other-articles">
      <h4>También te puede interesar</h4>
      <section>
  {
      OtherArticles.length && OtherArticles.map((info,idx) => {
          return <motion.article 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={idx}>
            <img src={info.img}/>
            <div>
              <h5>{info.title}</h5>
              <Link href={`/blog/${info.link}`}>
                <button className='btn-primary'>
                {Language.readArticle}
                </button>
              </Link>
            </div>
          </motion.article>
      })
  }
  </section>
    </div>
</>
}

export default OxaHaus