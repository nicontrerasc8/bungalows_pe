import React, { useEffect, useState } from 'react'
import Carrusel from '../../Components/Carrusel'
import { BlogArr, WhyPeru } from '../../lib/arrays'
import {motion} from "framer-motion"
import MetaTags from '../../Components/MetaTags'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faInfoCircle, faStore } from '@fortawesome/free-solid-svg-icons'

const OxaHaus = () => {


  const [OtherArticles, setOtherArticles] = useState([])

    useEffect(() => {
      var arr = []
      for (let i = 0; i < 3; i++) {
        var Article 
        do {
          var is = false
          Article = BlogArr[Math.floor(Math.random() * BlogArr.length)]
          is = (Article.link === "selvamonos" || arr.includes(Article))
        } while (is);
        arr.push(Article)
      }
      setOtherArticles(arr)
    }, [Array, ])

  return <>
  <MetaTags title="Selvámonos, el festival de música de Oxapampa."/>
  <div className='blog-article top7rem'>
        <h1>Selvámonos, el festival de música de Oxapampa.</h1>
        <span>Escrito por: Cristóbal Espejo</span>
        <img src={"/selvamonos.jpg"} alt="Bungalows Perú"/>
        <p>Selvámonos es un evento que se realiza entre el 30 de junio y 1ro de julio de cada año. Este festival invita a personas de todo el Perú a conocer Oxapampa y disfrutar de un concierto musical espectacular. Selvámonos reúne a algunos de los artistas más talentosos de Perú y del mundo, para ofrecer una experiencia inolvidable a los asistentes.</p>
        <h3>Un evento diferente</h3>
       <p>La edición más reciente de Selvámonos contó con una gran variedad de géneros musicales, desde la música electrónica y el rock, hasta el reggae y la cumbia. Además, el festival ofrece mucho más que sólo música: también hay talleres de arte y cultura, proyecciones de cine y una amplia selección de comida y bebida.</p>
       <p>Pero Selvámonos no es sólo un festival de música, sino también una oportunidad para explorar la hermosa ciudad de Oxapampa y sus alrededores. La región es conocida por su rica biodiversidad, y hay muchas opciones para hacer turismo ecológico y de aventura. Desde senderismo y ciclismo de montaña, hasta excursiones a cascadas y ríos.</p>
        <a href='https://selvamonos.org/2023/' target={"_blank"} rel="noreferrer" className='oxahaus-btn'>
            <button className='btn-primary'>
                <FontAwesomeIcon icon={faInfoCircle}/> Conoce más del festival
            </button>
        </a>
        <p>Aquí te dejamos un vídeo de Selvámonos. ¡Anímate a ir este año!</p>
        <iframe style={{marginTop: "2vh + 10px"}} src='https://www.youtube.com/embed/CflGvRXN8Q0'/>
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
                  Leer artículo
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