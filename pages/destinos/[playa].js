import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import MetaTags from '../../Components/MetaTags'
import { Destinations } from '../../lib/arrays'
import UseCartContext from '../../lib/context'

const Bungalow = ({data, For}) => {

     const [ShowDireccion, setShowDireccion] = useState(false)


     return <article className="bungalow">
     
     {
          ShowDireccion && <>
          <p>Dirección: {data.direccion}</p>
          {data.maps &&  <iframe src={data.maps} loading="lazy"/>}
          </>
     }
     {data.img && data.img.map((i, idx) => {
          return <img alt={data.Title} src={i} key={idx}/>
     })}
     {data.src && <iframe className='place-main-video' src={data.src} allowFullScreen={true}/> }
     <section>
     <h3>{data.Title}</h3>
     <h6>{For} {data.for}</h6>
     {
          data.precios && <>
          <h5>Precios por noche:</h5>
          <ul>
          {
                data.precios.map((info, idx) => {
                    return <li key={idx}>{info}</li>
               })
          }
          </ul>
          </>
     }
     {
         data.ul &&  <>
         <h4>Incluye: </h4>
         <ul>
              {
                   data.ul.length > 0 && data.ul.map((data,idx) => {
                        return <li key={idx}>
                             {data}
                        </li>
                   })
              }
         </ul></>
    }
     </section>
</article>
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
          {
               Arr.src && <iframe className='bungalow-main-video' src={Arr.src} allowFullScreen={true}/>
          }
          {
               Arr.bungalows && Arr.bungalows.length > 0 && Arr.bungalows.map((data,idx) => {
                    return <Bungalow data={data} For={Language.destinationsFor} key={idx}/>
               }) 
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