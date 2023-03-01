import React, { useEffect, useState } from 'react'
import Carrusel from '../../Components/Carrusel'
import { BlogArr, WhyPeru } from '../../lib/arrays'
import {motion} from "framer-motion"
import MetaTags from '../../Components/MetaTags'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PorquePeru = () => {


  const [OtherArticles, setOtherArticles] = useState([])
  const router = useRouter()

    useEffect(() => {
      var arr = []
      for (let i = 0; i < 3; i++) {
        var Article 
        do {
          var is = false
          Article = BlogArr[Math.floor(Math.random() * BlogArr.length)]
          is = (Article.link === "por-que-peru" || arr.includes(Article))
        } while (is);
        arr.push(Article)
      }
      setOtherArticles(arr)
    }, [Array, ])

  return <>
  <MetaTags title="¿Por qué elegir al Perú como destino turístico?"/>
  <div className='choose-peru'>
  <h2>
    ¿Por qué elegir al Perú como destino turístico?
  </h2>
  {
    WhyPeru.length && WhyPeru.map((data,idx) => {
      return <motion.header 
      initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
      key={idx}>
        <article>
          <Carrusel Arr={data.img}/>
        </article>
        <section>
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </section>
      </motion.header>
    })
  }
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

export default PorquePeru