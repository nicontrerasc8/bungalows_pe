import {motion} from "framer-motion"
import React, { useEffect, useState } from 'react';
import { firestore, postToJSON } from '../../lib/firebase'; 
import parse from "html-react-parser"
import MetaTags from '../../Components/MetaTags';
import { BlogArr } from '../../lib/arrays';
import Link from "next/link";


function Blog({Array, slug}){

    const [OtherArticles, setOtherArticles] = useState([])

    useEffect(() => {
      var arr = []
      for (let i = 0; i < 3; i++) {
        var Article 
        do {
          var is = false
          Article = BlogArr[Math.floor(Math.random() * BlogArr.length)]
          is = (Article.link == slug || arr.includes(Article))
        } while (is);
        arr.push(Article)
      }
      setOtherArticles(arr)
    }, [Array, ])
    
    

  return <>
  <MetaTags title={Array.title} description="Escrito por Cristóbal Espejo"/>
  <div className='blog-article top7rem'>
        <h1>{Array.title}</h1>
        <span>Escrito por: Cristóbal Espejo</span>
        <img src={Array.img} alt="Bungalows Perú"/>
        {
            parse(Array.content)
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
};

export default Blog;

export async function getServerSideProps({query}){
    var {slug} = query
     var Aux = firestore.doc(`blog/${slug}`)
     var Array = postToJSON(await Aux.get());

     return {props:{Array, slug}}
}

