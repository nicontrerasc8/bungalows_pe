import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { firestore, postToJSON } from '../../lib/firebase'; 
import ReactHtmlParser from 'react-html-parser';


function Blog({Array}){

    useEffect(() => {
      console.log(Array)
    }, [Array])
    
    

  return <div className='blog-article'>
        <h1>{Array.title}</h1>
        <img src={Array.img} alt="Bungalows Perú"/>
        {
            ReactHtmlParser(Array.content)
        }
     </div>
};

export default Blog;

export async function getServerSideProps({query}){
    var {slug} = query
     var Aux = firestore.doc(`blog/${slug}`)
     var Array = postToJSON(await Aux.get());

     return {props:{Array}}
}

