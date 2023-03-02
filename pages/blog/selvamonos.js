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
        <p>Selvámonos es un evento que se realiza entre el 30 de junio y 1ro de julio de cada año. Este festival invita a personas de todo el Perú a conocer Oxapampa y disfrutar de un concierto musical con los mejores artistas.</p>
        <h3>Un evento diferente</h3>
        <p>Este festival es muy especial, ya que aquellos que no residen en Oxapampa pueden acampar cerca del concierto. Muchas empresas turísticas ofrecen paquetes para Selvámonos que incluyen tours por lugares atractivos de Oxapampa, como la Catarata del Río Tigre o el Parque Nacional Yanachaga - Chemillén. </p>
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