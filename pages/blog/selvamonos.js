import React, { useEffect, useState } from 'react'
import Carrusel from '../../Components/Carrusel'
import { BlogArr, WhyPeru } from '../../lib/arrays'
import {motion} from "framer-motion"
import MetaTags from '../../Components/MetaTags'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faInfoCircle, faStore } from '@fortawesome/free-solid-svg-icons'
import UseCartContext from "../../lib/context"

const OxaHaus = () => {


  const [OtherArticles, setOtherArticles] = useState([])
  const {Language} = UseCartContext()

    useEffect(() => {
      var arr = []
      for (let i = 0; i < (Language.id === 1 ? 3 : 1); i++) {
        var Article 
        do {
          var is = false
          Article = BlogArr[Math.floor(Math.random() * BlogArr.length)]
          is = (Article.link === "selvamonos" || arr.includes(Article) || Article.l != Language.id)
        } while (is);
        arr.push(Article)
      }
      setOtherArticles(arr)
    }, [Array, Language,  ])

  return <>
  <MetaTags title={Language.whySelvamonosBlog.title + " | Bungalows Perú"}/>
  <div className='blog-article top7rem'>
        <h1>{Language.whySelvamonosBlog.title}</h1>
        <img src={
          "https://firebasestorage.googleapis.com/v0/b/pr-verano.appspot.com/o/uploads%2F578cc4b4-484e-480c-8eb8-b8f363baee92%2F1677720451267.png?alt=media&token=6caadce6-6dfa-4ac9-987c-f0828878a7a9"
        } alt="Bungalows Perú"/>
        <p>{Language.whySelvamonosBlog.p1}</p>
        <h3>{Language.whySelvamonosBlog.h1}</h3>
       <p>{Language.whySelvamonosBlog.p2}</p>
       <p>{Language.whySelvamonosBlog.p3}</p>
        <a href='https://selvamonos.org/2023/' target={"_blank"} rel="noreferrer" className='oxahaus-btn'>
            <button className='btn-primary'>
                <FontAwesomeIcon icon={faInfoCircle}/> {Language.whySelvamonosBlog.btn}
            </button>
        </a>
        <p>{Language.whySelvamonosBlog.p4}</p>
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