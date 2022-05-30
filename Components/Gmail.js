import React from 'react'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import useKeypress from 'react-use-keypress'
import {firestore} from "../lib/firebase"
import LoadingContainer from './LoadingContainer'

const Gmail = () => {

     const [Value, setValue] = useState('')
     const [Loading, setLoading] = useState(false)
     const [Array, setArray] = useState([])
     const [URL, setURL] = useState('')

     const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };

     const SubmitForm = async () => {
          if(validateEmail(Value)){
               setLoading(true)
      
          const batch = firestore.batch();
          var arr = Array
          arr.push(Value)
          batch.set(URL, 
               {mails: arr}, 
               {merge: true})
          await batch.commit()
          toast.success("Listo, hemos recibido tu correo.")
          setLoading(false)
          setValue("")
          }
          else{
               toast.error("Ingresa un email válido")
          }
        };  
        
        useKeypress(["Enter"],(event) => {
          if(event.key === "Enter" && Value != ''){
              SubmitForm()
          }
      })

      useEffect(() => {
          const userDoc = firestore.doc('users/gmail')
          userDoc.get().then((doc) => {
               const DocData = doc.data()
               setArray(DocData.mails)
         }) 
          setURL(userDoc)
      }, [])
      

  return <>
  {Loading && <LoadingContainer/>}
  <div className='gmail'>
       <p>¿Quieres recibir nuestras ofertas y promociones? Déjanos tu correo</p>
       <input value={Value} onChange={(e) => setValue(e.target.value)} type="gmail"/>
       <button className='btn-primary' type='button' onClick={SubmitForm}>
            Enviar
       </button>
  </div>
</>
}

export default Gmail