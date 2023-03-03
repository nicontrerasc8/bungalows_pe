import React, { useEffect, useState } from 'react'
import Carrusel from '../../Components/Carrusel'
import { BlogArr, WhyPeru } from '../../lib/arrays'
import {motion} from "framer-motion"
import MetaTags from '../../Components/MetaTags'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faNetworkWired, faStore, faTree } from '@fortawesome/free-solid-svg-icons'

const LandHaus = () => {


  const [OtherArticles, setOtherArticles] = useState([])

    useEffect(() => {
      var arr = []
      for (let i = 0; i < 3; i++) {
        var Article 
        do {
          var is = false
          Article = BlogArr[Math.floor(Math.random() * BlogArr.length)]
          is = (Article.link === "landhaus" || arr.includes(Article))
        } while (is);
        arr.push(Article)
      }
      setOtherArticles(arr)
    }, [Array, ])

  return <>
  <MetaTags title="LandHaus, un condominio ecológico en Oxapampa."/>
  <div className='blog-article top7rem'>
        <h1>LandHaus, un condominio ecológico en Oxapampa.</h1>
        <span>Escrito por: Cristóbal Espejo</span>
        <img src={"/landhaus-1.jpg"} alt="Bungalows Perú"/>
        <p>Landhaus es un condominio ecológico ubicado en Oxapampa. Este condominio está ubicado en una zona exclusiva de Oxapampa y tiene un área de aproximadamente 2 hectáreas. El diseño fue desarrollado por el grupo ECKE arquitectos, quienes priorizaron la integración del proyecto a la naturaleza y el paisaje, así como la utilización de materiales locales de bajo mantenimiento. </p>
        <div className='imgs-blog'>
        <img src={"/landhaus-2.jpg"} alt="Bungalows Perú"/>
        <img src={"/landhaus-3.jpeg"} alt="Bungalows Perú"/>
        <img src={"/landhaus-4.jpeg"} alt="Bungalows Perú"/>
        </div>
        <p>El condominio está formado por 15 lotes de 1000m² cada uno. Cada lote lleva incluido un punto de agua y acceso para energía eléctrica.</p>
        <a href='https://www.landhaus.pe/' target={"_blank"} rel="noreferrer" className='oxahaus-btn'>
            <button className='btn-primary'>
                <FontAwesomeIcon icon={faInfoCircle}/> Conoce más sobre el proyecto aquí
            </button>
        </a>
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

export default LandHaus