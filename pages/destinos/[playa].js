import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import MetaTags from '../../Components/MetaTags'
import { Destinations } from '../../lib/arrays'

const Bungalow = ({data}) => {

     const [ShowDireccion, setShowDireccion] = useState(false)

     return <article className="bungalow">
     <h3>{data.Title}</h3>
     <h6>para {data.for}</h6>
     <button style={{marginBottom: "1rem"}}
          className='btn-primary' onClick={() => setShowDireccion(!ShowDireccion)}>
          <FontAwesomeIcon icon={ShowDireccion ? faEyeSlash : faEye}/> Dirección
     </button>
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
          ShowDireccion && <>
          <p>Dirección: {data.direccion}</p>
          {data.maps &&  <iframe src={data.maps} loading="lazy"/>}
          </>
     }
     {data.img && data.img.map((i, idx) => {
          return <img alt={data.Title} src={i} key={idx}/>
     })}
     <div className='flex-wrap'>
  {/*    <a href={`https://api.whatsapp.com/send?phone=51998855069&text=${`¡Hola!, me gustaría saber los precios del bungalow ${data.wa}.`}`}>
          <button className='btn-secondary'>Consulta los precios</button>
     </a> */}
     {/* <button className='btn-secondary'>Ver ubicación</button> */}
     </div>
     {data.src && <iframe src={data.src} allowFullScreen={true}/> }
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
</article>
}

const Playa = ({Array}) => {

     const [ShowUbicacion, setShowUbicacion] = useState(false)

  return <>
     <MetaTags title={Array.title + ' | Bungalows PE'}/>
     <div className='page main-div' style={{background: "var(--platinum)"}}>
          <h2>{Array.title}</h2>
          <p style={{margin:"0 0 1rem 0"}}>
               {Array.description}
          </p>
          <button onClick={() => setShowUbicacion(!ShowUbicacion)} 
               className="btn-primary">
               <FontAwesomeIcon icon={ShowUbicacion ? faEyeSlash : faEye}/> {ShowUbicacion ? 'Ocultar ubicación' : 'Ver ubicación'}
          </button>
          {
               ShowUbicacion && 
               <div className='ubicacion'>
                    <p>{Array.wayToGo}</p>
                    <iframe src={Array.ubicacion} loading="lazy"/> 
               </div>
          }
          {
               Array.src && <iframe className='bungalow-main-video' src={Array.src} allowFullScreen={true}/>
          }
          {
               Array.bungalows.length > 0 && Array.bungalows.map((data,idx) => {
                    return <Bungalow data={data} key={idx}/>
               }) 
          }
     </div>
  </>
}

export default Playa

export async function getServerSideProps({query}){
     var {playa} = query
     var Array = []
     if(playa == "punta-hermosa"){
          Array = Destinations[1]
     }
     else if(playa == "oxapampa"){
          Array = Destinations[0]
     }


     return {props: {Array}}
}