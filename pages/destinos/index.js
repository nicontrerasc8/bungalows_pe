import Image from 'next/image'
import Link from 'next/link'
import {useState , useEffect} from 'react'
import MetaTags from '../../Components/MetaTags'
import { Destinations } from '../../lib/arrays'
import LoadingContainer from "../../Components/LoadingContainer"
import UseCartContext from '../../lib/context'

const ChooseDestination = () => {

  const {Language} = UseCartContext()
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
      <h2 style={{marginBottom: "calc(3vh + 10px)"}}>{Language.destinationsP}</h2>
        <section className='destinations grid-3'>
        {
          Language && Language.ImageData.map((data, idx) => {
            return <Link key={idx} href={`/destinos/${data.link}`}>
              <article>
             <div className='img'>
              <Image src={data.img} layout="fill" fill alt='Bungalows Perú'/>
             </div>
              <h2>{data.place}</h2>
            </article>
            </Link>
          })
        }
      </section>
      </div>
     </>
   }

export default ChooseDestination