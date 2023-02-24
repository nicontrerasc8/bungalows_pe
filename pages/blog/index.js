import Link from 'next/link'
import React from 'react'
import MetaTags from '../../Components/MetaTags'
import { BlogArr } from '../../lib/arrays'
import {motion} from "framer-motion"

const Blog = () => {
  return <>
  <MetaTags title="Blog - Bungalows Perú"/>
  <div className='landing blog-main'>
  <h2>
    Blog
  </h2>
  <p>En este espacio, hablamos sobre lugares que puedes visitar y comidas que puedes degustar en cada uno de tus viajes.</p>
  <section>
  {
      BlogArr.length && BlogArr.map((info,idx) => {
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

export default Blog