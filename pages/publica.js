import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import MetaTags from '../Components/MetaTags'

const Publica = () => {

     const [Name, setName] = useState('')
     const [Place, setPlace] = useState('')
     const [Descripcion, setDescripcion] = useState('')
     const [IsValid, setIsValid] = useState(false)

     useEffect(() => {
       if(Name != '' && Place != '' && Descripcion != '') setIsValid(true)
       else setIsValid(false)
     }, [Name, Place, Descripcion])
     

  return <>
     <MetaTags title='Publica tu bungalow para alquilarlo o venderlo por medio de nuestra web.'/>
     <div className='page main-div'>
          <h2>Publica tu bungalow en nuestra página web.</h2>
          <section className='form'>
               <label>Escribe tu nombre</label>
               <input value={Name} onChange={(e) => setName(e.target.value)}/>
               <label>¿En qué lugar está ubicado el bungalow?</label>
               <input value={Place} onChange={(e) => setPlace(e.target.value)}/>
               <label>Danos una breve descripción del bungalow</label>
               <textarea rows={8} value={Descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
               <div>
                    {
                         IsValid ? <a target="_blank" rel='noreferrer'
                         href={`https://api.whatsapp.com/send?phone=51998855069&text=${`¡Hola Cristóbal! Mi nombre es ${Name} y vengo de la web de Bungalows 🇵🇪. Tengo un bungalow en ${Place} y me gustaría alquilarlo por medio de su página web. Te dejo la descripción de mi bungalow: ${Descripcion}. Gracias!`}`}>
                              <button className='btn-secondary'>
                                   Enviar
                              </button>
                         </a> 
                         : 
                         <button className='btn-secondary inactive' onClick={() => toast.error('Por favor, rellena el formulario.')}>
                         Enviar
                    </button>
                    }
               </div>
          </section>
     </div>
  </>
}

export default Publica