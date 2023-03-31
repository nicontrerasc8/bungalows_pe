import React from 'react'
import UseCartContext from '../lib/context'

const LinkInfo = [
    {
        l: "https://www.facebook.com/maripoxaecotours",
        i: "/maripoxa.jpg"
    },
    {
        l: "https://www.facebook.com/mosel.oxapampa.peru",
        i: "/mosel.png",
    },
    {
        l: "https://www.floralpperu.com/",
        i: "/floralp.png",
    },
    {
        l: "https://www.mielfrey.com/",
        i: "/frey.png"
    }
]

const Links = () => {

    const {Language} = UseCartContext()

  return <>
    <div className='links'>
    <h2>
    {Language.aliados}
    </h2>
    {
        LinkInfo.length && LinkInfo.map((info, idx) => {
            return <a href={info.l} target={"_blank"} rel="noreferrer" key={idx}>
                <img src={info.i} alt={info.l}/>
            </a>
        })
    }
  </div>
  </>
}

export default Links