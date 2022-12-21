import { faHome, faSearch, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Gmail from '../Components/Gmail'
import MetaTags from '../Components/MetaTags'
import { WhyPeru } from '../lib/arrays'

const WhyGrid = () => {
  return <div className='grid-3 why-peru'>
    {
      WhyPeru && WhyPeru.map((data,idx) => {
        return <article key={idx}>
          <FontAwesomeIcon icon={data.icon}/>
          <h4>{data.title}</h4>
          <p>{data.text}</p>
        </article>
      })
    }
  </div>
}

const SVG = () => {
  return <div className="custom-shape-divider-bottom-1639756025">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill='#ececec'/> 
    </svg>
  </div>
}

const Landing = () => {
  return <div className='landing'>
    <article>
    <iframe src="https://www.youtube.com/embed/vwXMasNC5SA?autoplay=1" 
            title="Bungalows Perú" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen/>
      <h2>
      &quot;Siempre buscando el sol&quot;
      </h2>
      <h4>Brindamos el mejor hospedaje para que descubras el Perú</h4>
      <div className='btns-landing'>
        <Link href={"/destinos"}>
        <button className='btn-primary'>
          <FontAwesomeIcon icon={faSearchLocation}/> Buscar bungalows
        </button>
        </Link>
        <Link href={"/publica"}>
          <button className='btn-secondary'>
          <FontAwesomeIcon icon={faHome}/> Publica tu bungalow
          </button>
        </Link>
      </div>
    </article>
  </div>
}


export default function Home() {
  return <>
    <MetaTags/>
    <Landing/>
    <SVG/>  
    <Gmail/>
    <div className='rota180grados'><SVG/></div>
    <div className='main-div'>
      <h2>
        ¿Por qué elegir al Perú como destino turístico?
      </h2>
      <WhyGrid/>
      <Link href={"/destinos"}>
      <button className='btn-secondary'>
        Ver lugares turísticos
      </button>
      </Link>
    </div>
  </>
}
