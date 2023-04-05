import Image from 'next/image'
import Link from 'next/link'
import {useState , useEffect} from 'react'
import MetaTags from '../../Components/MetaTags'
import { Destinations } from '../../lib/arrays'
import LoadingContainer from "../../Components/LoadingContainer"
import UseCartContext from '../../lib/context'
import toast from 'react-hot-toast'

const ChooseDestination = () => {

  const {Language} = UseCartContext()
  const [Loading, setLoading] = useState(true)
  const [NewDest, setNewDest] = useState("")
  const [Email, setEmail] = useState("")

  const Submit = async () => {
    let data = {
      email: Email,
      dest: NewDest
    }

             fetch('/api/sugerencias', {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) console.log('Response succeeded!')
                
            })
            setEmail("")
            setNewDest("")
   }

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
      <div className='new-dest'>
      <p>{Language.NewDest}</p>
      <input value={NewDest} onChange={(e) => setNewDest(e.target.value)}/>
      <input value={Email} onChange={(e) => setEmail(e.target.value)} placeholder={Language.email}/>
      <button className='btn-primary' onClick={Submit}>Enviar</button>
      </div>
      </div>
     </>
   }

export default ChooseDestination