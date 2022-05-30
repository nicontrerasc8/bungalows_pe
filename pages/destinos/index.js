import Image from 'next/image'
import Link from 'next/link'
import {useState , useEffect} from 'react'
import MetaTags from '../../Components/MetaTags'
import { Destinations } from '../../lib/arrays'
import LoadingContainer from "../../Components/LoadingContainer"

const ChooseDestination = () => {

  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  

     return <>
      <MetaTags/>
      {Loading && <LoadingContainer/>}
      <div className='page main-div'>
      <h2>Elige tu destino favorito</h2>
        <section className='destinations grid-2'>
        {
          Destinations && Destinations.map((data, idx) => {
            return <Link key={idx} href={`/destinos/${data.path}`}>
              <article key={idx}>
              <img alt={data.title} src={data.img}/>
              <h4>{data.title}</h4>
            </article>
            </Link>
          })
        }
      </section>
      </div>
     </>
   }

export default ChooseDestination