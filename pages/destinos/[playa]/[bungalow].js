import { useEffect, useState } from "react"
import { FaHome, FaMousePointer } from "react-icons/fa"
import UseCartContext from "../../../lib/context"

const Bungalow = ({N, bungalow}) => {

    const [ShowDireccion, setShowDireccion] = useState(false)
    const [Data, setData] = useState(undefined)
    const {Language} = UseCartContext()

    useEffect(() => {
        setData(Language.ImageData[N].bungalows[bungalow])
        console.log(Language.ImageData[N])
      }, [Data, Language, ])


   if(Data) return <div className="page main-div">
    <article className="bungalow">
    
    {
         ShowDireccion && <>
         <p>Dirección: {Data.direccion}</p>
         {Data.maps &&  <iframe src={Data.maps} loading="lazy"/>}
         </>
    }
    {Data.img && Data.img.map((i, idx) => {
         return <img alt={Data.Title} src={i} key={idx}/>
    })}
    {Data.src && <iframe className='place-main-video' src={Data.src} allowFullScreen={true}/> }
    <section>
    <h3>{Data.Title}</h3>
    <h6>{Language.destinationsFor} {Data.for}</h6>
    {
        Data.precios && <>
         <h5>Precios por noche:</h5>
         <ul>
         {
               Data.precios.length && Data.precios.map((info, idx) => {
                   return <li key={idx}>{info}</li>
              })
         }
         </ul>
         </>
    }
    {
        Data.ul &&  <>
        <h4>{Language.includes}: </h4>
        <ul>
             {
                  Data.ul.length > 0 && Data.ul.map((Data,idx) => {
                       return <li key={idx}>
                            {Data}
                       </li>
                  })
             }
        </ul></>
   }
   <a target={"_blank"} rel="noreferrer" href={`https://api.whatsapp.com/send?phone=51998855069&text=${`Hola, vengo de su página web! Me gustaría alquilar el ${Data.Title}`}`}>
    <button className="btn-primary">
        Quiero alquilarlo
    </button>
   </a>
    </section>
</article>
   </div>
    else return ""
}

export default Bungalow

export async function getServerSideProps({query}){
    var {playa, bungalow} = query
    var N
    if(playa == "punta-hermosa") N = 0
    
    else if(playa == "oxapampa") N = 1
    
    else if (playa == "asia") N = 2


    return {props: {N, bungalow}}
}