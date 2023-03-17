import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import UseCartContext from '../../../../lib/context'
import MetaTags from "../../../../Components/MetaTags"

const Index = ({Array, data, playa}) => {

    const {Language} = UseCartContext()
     const [Arr, setArr] = useState([])

     useEffect(() => {
       setArr(Language.ImageData[Array].bung[data])
       console.log(Language.ImageData[Array].bung[data], Array)
     }, [Array, Language, ])

  return <>
    <MetaTags title='Bungalows Perú'/>
    <div className='page main-div'>
    <section className='bungalows'>
        {
            Arr.cats && Arr.cats.length > 0 && Arr.cats.map((data,idx) => {
                return <Link href={"/destinos/"+playa+"/"+data.id} key={idx}>
                    <article>
                    <img alt={data.img} src={data.img}/>
                    <h2>
                        {
                            data.i
                        }
                    </h2>
                </article>
                </Link>
           }) 
        }
    </section>
  </div>
  </>
}

export default Index

export async function getServerSideProps({query}){
    var {playa, data} = query
    var Array
    if(playa == "punta-hermosa") Array = 0
    
    else if(playa == "oxapampa") Array = 1
    
    else if (playa == "asia") Array = 2


    return {props: {Array, data, playa}}
}