import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from 'react'
import MetaTags from '../Components/MetaTags'
import { firestore } from '../lib/firebase'
import CopyToClipboard from 'react-copy-to-clipboard'

const Admin = () => {

     const [Array, setArray] = useState([])
     const [Clipboard, setClipboard] = useState('')

     useEffect(() => {
          const userDoc = firestore.doc('users/gmail')
          userDoc.get().then((doc) => {
               const DocData = doc.data()
               setArray(DocData.mails)
               setClipboard(DocData.mails.join())
         }) 
     }, [])

  return <>
  <MetaTags title="Admin"/>
  <div className='landing'>
       <h1 style={{marginBottom: '1rem'}}>Lista de difusión de gmail: </h1>
       <CopyToClipboard text={Clipboard}>
       <button className='btn-primary'>
           <FontAwesomeIcon icon={faClipboard}/> Copiar al portapapeles
       </button>
       </CopyToClipboard>
       {
            Array && Array.map((data,idx) => {
                 return <p key={idx}>{data}</p>
            })
       }
  </div>
  </>
}

export default Admin