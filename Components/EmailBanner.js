import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import UseCartContext from '../lib/context'
import { ValidateEmail } from '../lib/ValidateEmail'
import BackDrop from './BackDrop'
import {FaTimes} from "react-icons/fa"

const EmailBanner = () => {
    const [BannerOn, setBannerOn] = useState(false)
    const [EmailVal, setEmailVal] = useState("")
    const {Language} = UseCartContext()

    const ChangeBannerVal = () => setBannerOn(!BannerOn)

    const Send = () => {
        if(ValidateEmail(EmailVal)){
            let data = {
                email: EmailVal
            }
            fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }).then((res) => {
                  

                  
              })
              toast.success("Te has suscrito con éxito a nuestro Newsletter")
              ChangeBannerVal()
        }
        else toast.error("Escribe un valor válido")
    }

    useEffect(() => {
      setTimeout(() => {
        ChangeBannerVal()
      }, 45000);
    }, [])    

  return <BackDrop isOn={BannerOn} onClick={ChangeBannerVal}>
    <div className='email-banner' onClick={(e) => e.stopPropagation()}>
      <div className='close'>
          <span onClick={ChangeBannerVal}>
            <FaTimes/>
          </span>
      </div>
        <p>{Language.newsLetter}</p>
        <input placeholder={Language.email} value={EmailVal} onChange={(e) => setEmailVal(e.target.value)}/>
        <button className='btn-primary' onClick={Send}>
            {Language.subscribe}
        </button>
    </div>
  </BackDrop>
}

export default EmailBanner
