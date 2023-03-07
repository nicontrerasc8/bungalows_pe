import Link from 'next/link'
import React from 'react'
import MetaTags from '../../Components/MetaTags'
import { BlogArr } from '../../lib/arrays'
import {motion} from "framer-motion"
import UseCartContext from '../../lib/context'
import Capitalize from '../../capitalize'

const Blog = () => {

  const {Language} = UseCartContext()

  return <>
  <MetaTags title="Blog - Bungalows Perú"/>
  <div className='landing blog-main'>
  <h2>
    {Capitalize(Language.navBtn2)}
  </h2>
  <p>{Language.blogP}</p>
  <section>
  {
      BlogArr.length && BlogArr.map((info,idx) => {
          if(info.l === Language.id)return <motion.article 
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