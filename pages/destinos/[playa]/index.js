import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {FaInfoCircle} from "react-icons/fa"
import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import MetaTags from '../../../Components/MetaTags'
import { Destinations } from '../../../lib/arrays'
import UseCartContext from '../../../lib/context'

const Bungalow = ({data, For, idx, path}) => {

     const [ShowDireccion, setShowDireccion] = useState(false)
     const {Language} = UseCartContext()

     return  <Link href={data.cats ? "/destinos/"+path+"/cat/"+idx : "/destinos/"+path+"/"+data.id}>
     <article>
     
     {
          ShowDireccion && <>
          <p>Dirección: {data.direccion}</p>
          {data.maps &&  <iframe src={data.maps} loading="lazy"/>}
          </>
     }
  
          <img src={data.img} key={idx}/>

     {data.src && <iframe className='place-main-video' src={data.src} allowFullScreen={true}/> }
          <section>
               <h3>{data.Title}</h3>
               <h6>{For} {data.for}</h6>
          </section>
     </article>
</Link>
}

const Playa = ({Array}) => {

     const {Language} = UseCartContext()
     const [Arr, setArr] = useState([])

     useEffect(() => {
       setArr(Language.ImageData[Array])
       console.log(Language.ImageData[Array], Array)
     }, [Array, Language, ])
     

     const [ShowUbicacion, setShowUbicacion] = useState(false)

  return <>
      <MetaTags title={Arr.place + ' | Bungalows Perú'}/> 
     <div className='page main-div' style={{background: "var(--platinum)"}}>
          <h2>{Arr.place}</h2>
          <p style={{margin:"0 0 1rem 0"}}>
               {Arr.description}
          </p>
          <button onClick={() => setShowUbicacion(!ShowUbicacion)} 
               className="btn-primary">
               <FontAwesomeIcon icon={ShowUbicacion ? faEyeSlash : faEye}/> {ShowUbicacion ? (Language.ocultUbi) : (Language.watchUbi)  }
          </button>
          {
               ShowUbicacion && 
               <div className='ubicacion'>
                    <p>{Arr.wayToGo}</p>
                    <iframe src={Arr.ubicacion} loading="lazy"/> 
               </div>
          }
          
          <section className='bungalows'>
          {
               Arr.bung && Arr.bung.length > 0 && Arr.bung.map((data,idx) => {
                    return <Bungalow data={data} For={Language.destinationsFor} idx={idx} key={idx} path={Arr.link}/>
               }) 
          }
          </section>
          {
               Arr.src && <iframe className='bungalow-main-video' src={Arr.src} allowFullScreen={true}/>
          } 
     </div>
  </>
}

export default Playa

export async function getServerSideProps({query}){
     var {playa} = query
     var Array
     if(playa == "punta-hermosa") Array = 0
     
     else if(playa == "oxapampa") Array = 1
     
     else if (playa == "asia") Array = 2


     return {props: {Array}}
}