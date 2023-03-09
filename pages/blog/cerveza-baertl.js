import React, { useEffect, useState } from 'react'
import Carrusel from '../../Components/Carrusel'
import { BlogArr, WhyPeru } from '../../lib/arrays'
import {motion} from "framer-motion"
import MetaTags from '../../Components/MetaTags'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faStore } from '@fortawesome/free-solid-svg-icons'

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
  <MetaTags title="Baertl, la cerveza artesanal de Oxapampa"/>
  <div className='blog-article top7rem'>
        <h1>Baertl, la cerveza artesanal de Oxapampa</h1>
        <span>Escrito por: Cristóbal Espejo</span>
        <img src={"/baertl.jpg"} alt="Bungalows Perú"/>
        <p>Baertl Bier es una empresa Oxapampina que se dedica a la elaboración de cervezas artesanales. La iniciativa comenzada por Miguel Carranza en el 2014 ha crecido considerablemente desde su fundación.</p>
        <p>La fábrica Baertl está ubicada en el corazón de una reserva de biósfera, ideal para la elaboración de una gran cerveza. La producción de esta cerveza está enfocada en los pequeños detalles, como el tiempo de cocción adecuado, ingredientes de calidad y un sabor inigualable. </p>
        <a href='https://www.oxahaus.com/' target={"_blank"} rel="noreferrer" className='oxahaus-btn'>
            <button className='btn-primary'>
                <FontAwesomeIcon icon={faBeer}/> Conoce más sobre Baertl
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