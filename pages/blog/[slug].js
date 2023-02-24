import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { firestore, postToJSON } from '../../lib/firebase'; 
import ReactHtmlParser from 'react-html-parser';
import MetaTags from '../../Components/MetaTags';


function Blog({Array}){

    useEffect(() => {
      console.log(Array)
    }, [Array])
    
    

  return <>
  <MetaTags title={Array.title} description="Escrito por Cristóbal Espejo"/>
  <div className='blog-article top7rem'>
        <h1>{Array.title}</h1>
        <span>Escrito por: Cristóbal Espejo</span>
        <img src={Array.img} alt="Bungalows Perú"/>
        {
            ReactHtmlParser(Array.content)
        }
     </div></>
};

export default Blog;

export async function getServerSideProps({query}){
    var {slug} = query
     var Aux = firestore.doc(`blog/${slug}`)
     var Array = postToJSON(await Aux.get());

     return {props:{Array}}
}

